let gulp = require('gulp'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  browserSync = require('browser-sync'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  cssmin = require('gulp-cssmin'),
  del = require('del');

gulp.task('sass', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 8 versions']
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('script', function () {
  return gulp.src([
      'node_modules/slick-carousel/slick/slick.js',
      // 'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
      // 'node_modules/wow.js/dist/wow.min.js',
      // 'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
});

gulp.task('js', function () {
  return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('style', function () {
  return gulp.src([
      'node_modules/normalize.css/normalize.css',
      // 'node_modules/slick-carousel/slick/slick.css',
      // 'node_modules/jquery-form-styler/dist/jquery.formstyler.css',
      // 'node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css',
      // 'node_modules/animate.css/animate.css',
      // 'node_modules/magnific-popup/dist/magnific-popup.css',
    ])
    .pipe(concat('libs.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('app/css'))
});

gulp.task('html', function () {
  return gulp.src('app/*.html')
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
});

gulp.task('clean', async function () {
  del.sync('dist')
});

gulp.task('export', function () {
  let buildhtml = gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist'));
  let buildcss = gulp.src('app/css/**/*.css')
    .pipe(gulp.dest('dist/css'));
  let buildjs = gulp.src('app/js/**/*.js')
    .pipe(gulp.dest('dist/js'));
  let buildfonts = gulp.src('app/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'));
  let builimg = gulp.src('app/images/**/*.*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function () {
  gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'))
  gulp.watch('app/*.html', gulp.parallel('html'))
  gulp.watch('app/js/*.js', gulp.parallel('js'))
});

gulp.task('build', gulp.series('clean', 'export'));

gulp.task('default', gulp.parallel('sass', 'style', 'script', 'js', 'browser-sync', 'watch'))