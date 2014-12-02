'use strict';

var gulp = require('gulp'),
  bower = require('gulp-bower'),
  mainBowerFiles = require('main-bower-files'),
  runSequence = require('run-sequence'),
  del = require('del');

var vendorPath = 'vendor',
  bowerComponentsPath = 'bower_components';

gulp.task('bower', function(done) {
  runSequence(['bower:update', 'bower:clean:vendor'], 'bower:sync', done);
});

// Sincroniza los ficheros de bower con la carpeta vendor del theme
gulp.task('bower:sync', function() {
  console.log(mainBowerFiles());
  return gulp
    .src(mainBowerFiles(), { base: bowerComponentsPath})
    .pipe(gulp.dest(vendorPath));
});

// Actualiza bower
gulp.task('bower:update', function() {
  return bower().pipe(gulp.dest(bowerComponentsPath));
});

// Borra la carpeta de los componentes de bower
gulp.task('bower:clean', function(done) {
  del([
    bowerComponentsPath + "/**"
  ], done);
});

// Borra la carpeta vendor
gulp.task('bower:clean:vendor', function(done) {
  del([
    vendorPath + "/**"
  ], done);
});
