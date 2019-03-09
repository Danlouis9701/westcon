let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let autoprefixer = require('gulp-autoprefixer');

function minify() {
    return gulp.src('build-css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('css'));

}

async function uglifyjs() {
    return gulp.src('build-js/*.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('js'));

}

function watchme() {
    gulp.watch('build-css/*.css', minify);
    gulp.watch('build-js/*.js', uglifyjs);
}

exports.default = gulp.parallel(watchme, gulp.series(minify, uglifyjs));


