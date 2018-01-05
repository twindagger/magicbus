const magicbus = require('../lib')
const environment = require('./_test-env')

const publisherRoutePattern = require('../lib/route-patterns/publisher-route-pattern')
const workerRoutePattern = require('../lib/route-patterns/worker-route-pattern')

describe('Binder really using RabbitMQ', function () {
  let serviceDomainName = 'magicbus'
  let appName = 'tests'
  let connectionInfo = environment.rabbit
  let binder

  beforeEach(function () {
    binder = magicbus.createBinder(connectionInfo)
  })

  afterEach(function () {
    return binder.shutdown()
  })

  it('should be able to bind an exchange to a queue', function () {
    return binder.bind({
      serviceDomainName: serviceDomainName,
      appName: appName,
      name: 'binder-publish',
      pattern: publisherRoutePattern()
    }, {
      serviceDomainName: serviceDomainName,
      appName: appName,
      name: 'binder-subscribe',
      pattern: workerRoutePattern()
    }, { pattern: '#' })
  })
})
