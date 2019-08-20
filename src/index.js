const ora = require('ora');
const figures = require('figures');
const chalk = require('chalk');
const fse = require('fs-extra');

const colors = {
  log: chalk.gray,
  title: chalk.bold,
  error: chalk.red,
  skip: chalk.yellow,
  todo: chalk.blue,
  pass: chalk.green,
  duration: chalk.gray.dim,
  stack: chalk.red,
  information: chalk.magenta,
  warning: chalk.cyan
};

class LogReporter {
  constructor(options, out) {
    this.out = out || process.stdout;
    this.options = options;
    this.logStore = [];
    this.stats = {
      logCount: 0,
      total: 0,
      passed: 0
    };

    this.patterns = [/id:\s([a-z|\-\.]*)/, ...this.options.patterns];

    // init ora spinner
    this.spinner = ora({
      isEnabled: true,
      color: 'gray',
      hideCursor: false,
      spinner: 'dots2',
      stream: this.out
    });
    this.spinner.start();
  }

  report(prefix, data) {
    const { logs, failed } = data;

    // increment counters
    this.stats.total++;
    if (!failed) {
      this.stats.passed++;
    }

    if (logs) {
      logs.forEach((log) => {
        this.stats.logCount++;

        const { text, type } = log;
        let regexResult;

        for (let i = 0; i < this.patterns.length; i++) {
          regexResult = text.match(this.patterns[i]);
          if (regexResult) break;
        }

        const id = regexResult ? regexResult.pop() : undefined;
        const logStoreResult = this.findLogStore(id);

        if (logStoreResult) {
          // count existing log type
          logStoreResult.count++;
        } else {
          // strip stacktraces
          const newLineIndex = text.indexOf('\n');

          // found new log type, so store it
          this.logStore.push({
            id,
            type,
            count: 1,
            text: newLineIndex > 0 ? text.substring(0, text.indexOf('\n')) : text
          });
        }
      });
    }

    const SEPERATOR = chalk.gray.dim(figures.pointerSmall);
    const testName = colors.title(data.name.trim());
    const passStatus = colors.pass(`${this.stats.passed} tests passed`);
    const deprecationStatus = colors.warning(`Total deprecations ${SEPERATOR} ${this.stats.logCount}`);
    const uniqueStatus = colors.information(`Unique deprecations ${SEPERATOR} ${this.logStore.length}`);
    const str = [testName, passStatus, deprecationStatus, uniqueStatus].join('\n');

    this.writeLine(str);
  }

  finish() {
    this.writeTestSummary();

    this.spinner.succeed();
  }

  findLogStore(id) {
    return this.logStore.find((log) => log.id === id);
  }

  writeLine(text) {
    this.spinner.text = text;
    this.spinner.render();
  }

  writeTestSummary() {
    fse.outputJsonSync(this.options.reportFile, this.logStore, { spaces: 2 });
  }
}

module.exports = LogReporter;
