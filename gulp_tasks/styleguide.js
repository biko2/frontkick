'use strict';

var gulp = require('gulp'),
    spawn = require('child_process').spawn,
    nn = require('node-notifier'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    $ = require('gulp-load-plugins')();

gulp.task('styleguide', function(done) {
    var hologram = spawn('hologram', [], { stdio: 'inherit' });

    hologram.on('close', function(code) {
        if (code > 0) {
          new nn().notify({
            title: "styleguide",
            message: "Error de compilación, revisa la consola"
          });
          return done('Error al generar la guia de estilos');
        }
        return done();
    });
});

gulp.task('styleguide:watch', function () {
  gulp.watch(["doc_assets/**/*", "scss/**/*"],
    ['styles', 'styleguide', reload]);
});
