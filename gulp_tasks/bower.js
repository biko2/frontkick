'use strict';

var gulp = require('gulp'),
  bower = require('gulp-bower'),
  mainBowerFiles = require('main-bower-files'),
  runSequence = require('run-sequence'),
  del = require('del'),
  config = require('../config.js');

var destPath = config.bower.dest,
  bowerComponentsPath = config.bower.src;

gulp.task('bower', function(done) {
  runSequence(['bower:update', 'bower:clean:dest'], 'bower:cp', done);
});

gulp.task('bower:cp', function() {
  return gulp
    .src(mainBowerFiles(), { base: bowerComponentsPath})
    .pipe(gulp.dest(destPath));
});

gulp.task('bower:update', function() {
  return bower().pipe(gulp.dest(bowerComponentsPath));
});

gulp.task('bower:clean:src', function(done) {
  del([
    bowerComponentsPath + "/**"
  ], done);
});

gulp.task('bower:clean:dest', function(done) {
  del(destPath, done);
});
