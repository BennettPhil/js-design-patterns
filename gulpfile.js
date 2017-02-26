const gulp = require('gulp');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');

gulp.task('lint', () => {
  gulp.src(['**/*.js', '!node_modules/**', '!dist/**']).pipe(eslint()).pipe(eslint.format()).pipe(eslint.failAfterError());
});

gulp.task('babel', () => gulp.src(['**/*.js', '!node_modules/**', '!dist/**', 'gulpfile.js'])
  .pipe(babel({
    presets: ['es2015'],
  }))
  .pipe(gulp.dest('dist')));

gulp.task('default', ['lint', 'babel'], () => {
  gulp.watch(['**/*.js', '!node_modules/**', '!dist/**'], ['lint', 'babel']);
});
