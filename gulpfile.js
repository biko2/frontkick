'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    requireDir = require('require-dir')('./gulp_tasks');


gulp.task('watch', ['styles:watch', 'doc:watch']);


gulp.task('compile', function(done) {
  runSequence('styles', done);
});

// ****************************************************
// Tarea por defecto
// ****************************************************

gulp.task('default', function(done) {
  runSequence(['compile', 'watch'], done);
});
