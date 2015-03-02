var gulp = require('gulp'),
    clean = require('gulp-clean'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', function () {
  return gulp.src(['css'], {read: false})
  .pipe(clean());
});

gulp.task('sass', function () {
  return sass('sass', {style: 'compact'})
  .pipe(autoprefixer())
  .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['clean'], function () {
  gulp.start('sass', 'watch');
});
