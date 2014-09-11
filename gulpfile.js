// Require Gulp
var gulp = require('gulp');

// Require all needed modules
var concat = require('gulp-concat');


// Concat task
gulp.task('unify', function(){
    gulp.src('./src/**/*.js')
    .pipe(concat('cordovameetsangular.js'))
    .pipe(gulp.dest('./dist/'));
});

// Default task
gulp.task('default', function() {
    console.log('default function');
});
