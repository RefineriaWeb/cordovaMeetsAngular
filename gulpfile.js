// Require Gulp
var gulp = require('gulp'),
    buildConfig = require('./config/build.config'),
    concat = require('gulp-concat'),
    header = require ('gulp-header'),
    footer = require ('gulp-footer');


// Concat task
gulp.task('build', function(){
    gulp.src(buildConfig.pluginFiles)
    .pipe(concat('cordovameetsangular.js'))
    .pipe(header(buildConfig.closureStart))
    .pipe(footer(buildConfig.closureEnd))
    .pipe(gulp.dest(buildConfig.dist));
});

// Default task
gulp.task('default', ['build']);
