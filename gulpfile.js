'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    requireDir = require('require-dir')('./gulp_tasks'),
    _ = require('underscore');

var config = require('./config.json');
var local_config = require('./config_overrides.json');
_.extend(config, local_config);

var $ = require('gulp-load-plugins')();

gulp.task('browser-sync', function() {
    browserSync({
        proxy: config.proxy
    });
});

gulp.task('watch', ['browser-sync', 'styles:watch', 'styleguide:watch']);

gulp.task('default', function(done) {
  runSequence(['bower', 'styles', 'styleguide', 'watch'], done);
});
