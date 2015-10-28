'use strict';

var Publisher = require('../').Publisher;

var chai = require('chai');
var expect = chai.expect;

var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

chai.use(require('chai-as-promised'));

var BasicEnvelope = require('../lib/basic-envelope.js');

var Promise = require('bluebird');

describe('Publisher', function() {
  var mockBroker;

  beforeEach(function() {
    mockBroker = {
      registerRoute: function(/* name, pattern */) {},
      publish: function(/* routeName, routingKey, content, options */) {
        return Promise.resolve();
      }
    };
  });

  describe('default construction', function() {
    var publisher;

    beforeEach(function() {
      publisher = new Publisher(mockBroker);
    });

    it('should use the basic envelope', function() {
      expect(publisher._envelope instanceof BasicEnvelope).to.eq(true);
    });
  });

  describe('construction options', function() {
    it('should use the route name passed in the options', function() {
      var publisher = new Publisher(mockBroker, {
        routeName: 'my-route'
      });

      expect(publisher._routeName).to.eq('my-route');
    });

    it('should use the route pattern passed in the options', function() {
      var pattern = {};

      var publisher = new Publisher(mockBroker, {
        routePattern: pattern
      });

      expect(publisher._routePattern).to.eq(pattern);
    });

    it('should use the envelope passed in the options', function() {
      var envelope = {};
      var publisher = new Publisher(mockBroker, {
        envelope: envelope
      });

      expect(publisher._envelope).to.eq(envelope);
    });
  });

  describe('constructor argument checking', function() {
    it('should throw an assertion error given no broker', function() {
      var fn = function() {
        new Publisher();
      };

      expect(fn).to.throw('AssertionError: broker (object) is required');
    });
  });

  describe('publish', function() {
    var publisher;

    beforeEach(function() {
      publisher = new Publisher(mockBroker);
    });

    it('should register a route with the broker', function() {
      sinon.spy(mockBroker, 'registerRoute');

      var pattern = {};
      return new Publisher(mockBroker, {
        routePattern: pattern
      }).publish('test-event')
      .then(function(){
        expect(mockBroker.registerRoute).to.have.been.calledWith('publish', pattern);
      });
    });

    it('should be rejected with an assertion error given no event name', function() {
      var fn = function(){
        publisher.publish();
      };

      expect(fn).to.throw('eventName (string) is required');
    });

    it('should be fulfilled given the broker.publish calls are fulfilled', function() {
      mockBroker.publish = function() {
        return Promise.resolve();
      };

      var p = publisher.publish('something-happened');

      return expect(p).to.be.fulfilled;
    });

    it('should be rejected given the broker.publish call is rejected', function() {
      var brokerPromise = Promise.reject(new Error('Aw, snap!'));

      mockBroker.publish = function() {
        return brokerPromise;
      };

      var p = publisher.publish('something-happened');

      return expect(p).to.be.rejectedWith('Aw, snap!');
    });

    it('should be rejected given the middleware rejects the message', function() {
      publisher.use(function(message, actions){
        actions.error(new Error('Aw, snap!'));
      });

      var p = publisher.publish('something-happened');

      return expect(p).to.be.rejectedWith('Aw, snap!');
    });

    it('should call middleware with the message', function() {
      var middlewareCalled = false;
      publisher.use(function(message, actions){
        middlewareCalled = true;
        actions.next();
      });

      var p = publisher.publish('something-happened');

      return p.then(function() {
        expect(middlewareCalled).to.equal(true);
      });
    });

    it('should set persistent to true by default', function() {
      sinon.spy(mockBroker, 'publish');

      return publisher.publish('something-happened').then(function(){
        expect(mockBroker.publish).to.have.been.calledWith('publish', 'something-happened', null, sinon.match({persistent: true}));
      });
    });

    it('should copy properties from the properties property of the message to the publish options', function() {
      sinon.spy(mockBroker, 'publish');

      return publisher.publish('something-happened').then(function(){
        expect(mockBroker.publish).to.have.been.calledWith('publish', 'something-happened', null, sinon.match({type: 'something-happened'}));
      });
    });

    it('should copy properties from the publishOptions property of the options to the publish options', function() {
      sinon.spy(mockBroker, 'publish');

      var options = {
        publishOptions: {
          correlationId: '123'
        }
      };

      return publisher.publish('something-happened', null, options).then(function(){
        expect(mockBroker.publish).to.have.been.calledWith('publish', 'something-happened', null, sinon.match({correlationId: '123'}));
      });
    });

    it('should overwrite publish options set from anywhere else with values from the publishOptions property of the options', function() {
      sinon.spy(mockBroker, 'publish');

      var options = {
        publishOptions: {
          persistent: false
        }
      };

      return publisher.publish('something-happened', null, options).then(function(){
        expect(mockBroker.publish).to.have.been.calledWith('publish', 'something-happened', null, sinon.match({persistent: false}));
      });
    });
  });
});
