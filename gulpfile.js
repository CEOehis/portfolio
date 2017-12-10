const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');

gulp.task('server', function() {
  return connect.server({
    port: 9999,
    livereload: true
  });
});

gulp.task('reload', function () {
  return gulp.src('./index.html').pipe(connect.reload());
});


gulp.task('styles', function() {
	gulp.src('scss/**/*.scss')
					.pipe(sass().on('error', sass.logError))
					.pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
  gulp.watch(['./index.html', 'css/*.css', 'js/*.js', 'scss/**/*.scss'], ['reload', 'styles']);
});

gulp.task('default', ['server', 'watch', 'styles']);


