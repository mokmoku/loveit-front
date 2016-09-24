var gulp = require('gulp');
var webserver = require('gulp-webserver');
var typescript = require('gulp-typescript');

gulp.task('ts', function() {
    return gulp.src(['./*.ts'])
        .pipe(typescript())
        .js
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['ts'], function() {
    gulp.src('./')
        .pipe(webserver({
            host: 'localhost',
            port: 8000,
            livereload: true
        }));
    gulp.watch('./*.ts', ['ts']);
});
