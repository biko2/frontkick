var _ = require('underscore');
var config = require('./config.json');
var fs = require('fs');

var local_config = {}
var localFilePath = './config_overrides.json';
if (fs.existsSync(localFilePath)) {
    local_config = require(localFilePath);
}

_.extend(config, local_config);

module.exports = config;
