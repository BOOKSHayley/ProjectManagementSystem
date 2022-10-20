var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var version = require('gulp-version-number');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var less = require('gulp-less');
var path = require('path');

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

gulp.task('partials', function() {
    // Assume all partials start with an underscore
    return gulp.src('./src/templates/partial/**/_*.hbs')
        .pipe(handlebars())
        .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
            imports: {
                processPartialName: function(fileName) {
                    return JSON.stringify(path.basename(fileName, '.js').substr(1));
                }
            }
        }))
        .pipe(concat('partials.js'))
        .pipe(gulp.dest('./www/'));
});

 gulp.task('js-all', function() {
    return gulp.src([
        './src/models/*.js',
        './src/views/*.js',
        './src/routes/*.js',
        './src/components/*.js',
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

gulp.task('img', function() {
    return gulp.src([
        './src/img/*',
    ])
        .pipe(gulp.dest('./www/img'));
});



// 2 main gulp commands (build and server)
gulp.task('build', gulp.series(
    'js-all',
    'js-libs',
    'bootstrap-css',
    'less-css',
    'img',
    'bootstrap-js',
    'html',
    'templates',
    'partials'
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