'use strict';

var srcPath = "scss",
    fileExtension = ".scss",
	cssDestinationPath = "css",
    gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    nn = require('node-notifier'),
    $ = require('gulp-load-plugins')();

function errorHandler(error, error_type) {
	var notifier = new nn.NotificationCenter();
	notifier.notify({
		title: "¡¡ERROR!!",
		message: error.message
	});
	console.error("\n" + error.message);
	this.emit('end');
}

// ****************************************************
// Compila CSS
// ****************************************************
gulp.task('styles', function () {
  var cb = gulp
    .src([srcPath + "/*" + fileExtension, "!" + srcPath + "/_" + fileExtension ], { base: srcPath })
    .pipe($.plumber({ errorHandler: errorHandler }))
    .pipe($.sass({ precision: 10 }))
    .pipe($.autoprefixer('last 2 version', '> 1%', 'ie >= 8', 'Opera 12.1'))
    .pipe(gulp.dest(cssDestinationPath))
    // .pipe(reload({stream:true}))
    .pipe($.notify("Compilación CSS terminada"));
  return cb;
});

gulp.task('styles:watch', function() {
  gulp.watch([srcPath + "/**/*"], ['styles'], reload);
});
