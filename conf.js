exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['testspec.js']
  specs: ['zoo_spec.js'],
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
}
