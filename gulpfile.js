'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    requireDir = require('require-dir')('./gulp_tasks');

var $ = require('gulp-load-plugins')();
var config = require('./config.js');

gulp.task('browser-sync', function() {
    browserSync({
        proxy: config.proxy
    });
});

gulp.task('watch', ['browser-sync', 'styles:watch', 'styleguide:watch']);

gulp.task('default', function(done) {
  runSequence(['bower', 'styles', 'styleguide', 'watch'], done);
});
