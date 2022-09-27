var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var version = require('gulp-version-number');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var less = require('gulp-less');

// Helper gulp commands (called by build)
gulp.task('html', function() {
    return gulp.src('src/index.html')
        .pipe(version({
            'value': '%MDS%',
            'append': {
                'key': 'v',
                'to': ['css', 'js']
            }
        }))
        .pipe(gulp.dest('www/'));
});


gulp.task('templates', function(){
    return gulp.src('src/templates/*.hbs')
        .pipe(handlebars())
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace: 'Handlebars.templates',
            noRedeclare: true, // Avoid duplicate declarations
        }))
        .pipe(concat('template.js'))
        .pipe(gulp.dest('./www/'));
});

 gulp.task('js-all', function() {
    return gulp.src([
        './src/models/*.js',
        './src/views/*.js',
        './src/routes/*.js',
    ]).pipe(concat('app.js'))
        .pipe(gulp.dest('./www/'));
});

gulp.task('js-libs', function() {
    return gulp.src([
        './src/libs/**/*',
    ])
        .pipe(gulp.dest('./www/libs'));
});

gulp.task('bootstrap-css', function(){
    return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(concat('bootstrap.min.css'))
        .pipe(gulp.dest('./www/'));
});

gulp.task('bootstrap-js', function(){
    return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(concat('bootstrap.min.js'))
        .pipe(gulp.dest('./www/libs'));
});

gulp.task('less-css', function(){
    return gulp.src('./src/less/*.less')
        .pipe(concat('main.less'))
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./www/'));
});



// 2 main gulp commands (build and server)
gulp.task('build', gulp.series(
    'js-all',
    'js-libs',
    'bootstrap-css',
    'less-css',
    'bootstrap-js',
    'html',
    'templates'
));


// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./www/"
        }
    });
});



//Default gulp
gulp.task('default', gulp.series('build', 'server'));