
let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let htmlmin = require('gulp-htmlmin');
let sass = require('gulp-sass');
let minify = require('gulp-minify');
let cleanCSS = require('gulp-clean-css');

sass.compiler = require('node-sass');

function serve(cb) {
    gulp.series(build, function() {
        browserSync.init({
            server: {
                baseDir: "./build"
            }
        })
    })();

    gulp.watch('src/*.html', html);
    gulp.watch('src/css/*', css);
    gulp.watch('src/js/*', js);
    cb();
}

function html() {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./build/'))
        .pipe(browserSync.stream());
}

function css() {
    return gulp.src('./src/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./build/css/'))
        .pipe(browserSync.stream());
}

function js() {
    return gulp.src('./src/js/*.js')
        .pipe(minify())
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}

function build(cb) {
    gulp.parallel(html, css, js)();
    cb();
}

//exports.build = build;
exports.default = serve;
