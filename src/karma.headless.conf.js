// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require("karma-spec-reporter"),
      require('karma-istanbul-threshold'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    parallelOptions: {
      executors: 4, // Defaults to cpu-count - 1
      shardStrategy: 'round-robin'
      // shardStrategy: 'description-length'
    },
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'cobertura'],
      fixWebpackSourcePaths: true,
      // Most reporters accept additional config options. You can pass these through the `report-config` option
      // all options available at: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/html/index.js#L135-L137
      'report-config': { },
    },
    angularCli: {
      environment: 'dev'
    },
    files: [
    ],
    coverageReporter: {
      includeAllSources: true
    },
    reporters: ['progress', 'kjhtml'],
    port: Math.floor((Math.random() * 500) + 9500),
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity,
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          // Without a remote debugging port, Google Chrome exits immediately.
          `--remote-debugging-port=${Math.floor((Math.random() * 500) + 9000)}`,
          '--no-sandbox'
          // '--max_old_space_size=4096'
        ],
        debug: false
      }
    },
    // How long does Karma wait for a browser to reconnect (in ms).
    // With a flaky connection, it is pretty common that the browser disconnects, but the actual test execution is still running without any problems.
    // Karma does not treat a disconnection as an immediate failure and will wait for browserDisconnectTimeout (ms).If the browser reconnects during that time, everything is fine.
    // Default: 2000
    browserDisconnectTimeout: 6000,
    // The number of disconnections tolerated.
    // The disconnectTolerance value represents the maximum number of tries a browser will attempt in the case of a disconnection.
    // Usually, any disconnection is considered a failure, but this option allows you to define a tolerance level when there is a flaky network link between the Karma server and the browsers.
    // Default: 0
    browserDisconnectTolerance: 3,
    // How long will Karma wait for a message from a browser before disconnecting from it (in ms).
    // If, during test execution, Karma does not receive any message from a browser within browserNoActivityTimeout(ms), it will disconnect from the browser.
    // Default: 10000
    browserNoActivityTimeout: 60000,
    // Timeout for capturing a browser (in ms).
    // The captureTimeout value represents the maximum boot-up time allowed for a browser to start and connect to Karma.
    // If any browser does not get captured within the timeout, Karma will kill it and try to launch it again and, after three attempts to capture it, Karma will give up.
    // Default: 60000
    captureTimeout: 120000,
    // Karma will report all the tests that are slower than given time limit (in ms).This is disabled by default (since the default value is 0).
    reportSlowerThan: 1000
    // More info about disconnected issue is here:
    // https://github.com/karma-runner/karma-chrome-launcher/issues/154
    // https://github.com/karma-runner/karma/issues/2652
  });
};
