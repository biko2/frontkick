'use strict';

var gulp = require('gulp'),
    spawn = require('child_process').spawn,
    nn = require('node-notifier'),
    del = require('del'),
    $ = require('gulp-load-plugins')();

var srcPath = 'src';

// ****************************************************
// Compila la documentación de la hoja de estilos
// ****************************************************
gulp.task('doc', function(done) {
    var hologram = spawn('hologram', [], { stdio: 'inherit' });

    hologram.on('close', function(code) {
        if (code > 0) {
          new nn().notify({
            title: "Hologram",
            message: "Error de compilación, revisa la consola"
          });
          return done('Error al ejecutar hologram');
        }
        return done();
    });
});

gulp.task('doc:watch', function () {
  gulp.watch([srcPath + "/_doc_assets/**/*", srcPath + "/**/*.scss"], ['doc']);
});
