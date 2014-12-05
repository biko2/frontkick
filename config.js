var _ = require('underscore');
var config = require('./config.json');
var local_config = require('./config_overrides.json');
_.extend(config, local_config);

module.exports = config;