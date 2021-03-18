'use strict';
module.exports = class ServerlessEnvVarLogger {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.log();

    this.hooks = {
      'before:package:initialize': () => this.log(),
    };
  }

  log() {
    console.log({
      BAR: process.env.BAR,
      BAZ: process.env.BAZ,
      FOO: process.env.FOO
    });
  }
};
