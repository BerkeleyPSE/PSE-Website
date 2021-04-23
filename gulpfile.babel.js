let production = true;
let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let htmlmin = require('gulp-htmlmin');
let sass = require('gulp-sass');
let minify = require('gulp-minify');
let cleanCSS = require('gulp-clean-css');
let imagemin = require('gulp-imagemin');
let plumber = require('gulp-plumber');

sass.compiler = require('node-sass');

function serve(cb) {
    if (!production) {
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
        gulp.watch('src/assets/*', assets);
    } else {
        build(cb);
    }
    cb();
}

function html() {
    if (!production) {
        return gulp.src('./src/*.html')
            .pipe(plumber())
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(gulp.dest('./build/'))
            .pipe(browserSync.stream());
    }

    return gulp.src('./src/*.html')
        .pipe(plumber())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./build/'));
}

function css() {
    if (!production) {
        return gulp.src('./src/css/*.scss')
            .pipe(plumber())
            .pipe(sass().on('error', sass.logError))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest('./build/css/'))
            .pipe(browserSync.stream());
    }

    return gulp.src('./src/css/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./build/css/'));
}

function js() {
    if (!production) {
        return gulp.src('./src/js/*.js')
            .pipe(plumber())
            .pipe(minify())
            .pipe(gulp.dest('./build/js'))
            .pipe(browserSync.stream());
    }

    return gulp.src('./src/js/*.js')
        .pipe(plumber())
        .pipe(minify())
        .pipe(gulp.dest('./build/js'));
}

function build(cb) {
    gulp.parallel(html, css, js, assets)();
    cb();
}

function assets() {
    if (!production) {
        return gulp.src('./src/assets/*')
              .pipe(plumber())
              .pipe(gulp.dest('./build/assets/'));
    }

  return gulp.src('./src/assets/*')
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest('./build/assets/'));
}

//exports.build = build;
exports.default = serve;
exports.html = html
