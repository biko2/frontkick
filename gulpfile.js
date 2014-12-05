'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    requireDir = require('require-dir')('./gulp_tasks');

var config = require('./config.json');
var local_config = require('./config_overrides.json');

var $ = require('gulp-load-plugins')();

gulp.task('browser-sync', function() {
    browserSync({
        proxy: local_config.proxy
    });
});

gulp.task('watch', ['browser-sync', 'styles:watch', 'styleguide:watch']);


gulp.task('compile', function(done) {
  runSequence('styles', done);
});

// ****************************************************
// Tarea por defecto
// ****************************************************

gulp.task('default', function(done) {
  runSequence(['bower', 'styles', 'styleguide', 'watch'], done);
});
