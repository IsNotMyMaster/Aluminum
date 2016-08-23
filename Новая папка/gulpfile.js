var gulp = require('gulp');
var gutil = require('gulp-util');
var ftp = require('gulp-ftp');
var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('mytask', function() {
    console.log('Hello');
});

gulp.task('deploy', function() {
  return gulp.src('dist/**')
    .pipe(ftp({
        host: 'aluminium-souz.ru',
        user: 'aluminium_ftp',
        pass: 'kmRBwCF8'
    }))
    .pipe(gutil.noop());
});