'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");

function errorAlert(error) {
  notify.onError({title: "Gulp Error", message: "Check your terminal", sound: "Purr"})(error); //Error Notification
  console.log(error.toString());//Prints Error to Console
  this.emit("end"); //End function
}

/**
 * watch
 */
gulp.task('default', function () {
  gulp.watch(['./test/index.scss', './scss/**.scss'], ['scss']);
});

/**
 * SASS
 */
gulp.task('scss', function () {
  gulp.src('./test/index.scss')
    .pipe(plumber({errorHandler: errorAlert}))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./test'));
});