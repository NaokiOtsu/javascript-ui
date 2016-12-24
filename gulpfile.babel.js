import gulp from 'gulp';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';

const PATHS = {
  allSrcJs: './src/**/*.js',
  gulpfile: 'gulpfile.babel.js',
  dest: 'public'
};

gulp.task('build', ['lint'], () =>
  gulp.src(PATHS.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(PATHS.dest))
);

gulp.task('lint', () =>
  gulp.src([
    PATHS.allSrcJs,
    PATHS.gulpfile
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

gulp.task('watch', () => {
  gulp.watch(PATHS.allSrcJs, ['build']);
});

gulp.task('default', ['watch', 'build']);