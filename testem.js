const path = require('path');
const LogReporter = require('./src/index');
const reporter = new LogReporter({
  reportFile: 'deprecations.json',
  patterns: [
    /(requested id is the same as the one returned by the adapter)/,
    /formatName called with invalid personalName object/
  ]
});

module.exports = {
  test_page: 'tests/index.html?hidepassed&nolint',
  framework: 'qunit',
  disable_watching: true,
  browser_start_timeout: 180,
  browser_disconnect_timeout: 90,
  socket_heartbeat_timeout: 600,
  timeout: 3600,
  launch_in_ci: ['Chrome'],
  launch_in_dev: ['Chrome'],
  browser_args: {
    Chrome: {
      mode: 'ci',
      args: [
        '--disable-dev-shm-usage',
        '--disable-software-rasterizer',
        '--headless',
        '--remote-debugging-port=0',
        '--window-size=1440,900'
      ]
    }
  },
  reporter
};
