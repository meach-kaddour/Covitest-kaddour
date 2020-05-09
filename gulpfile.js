var gulp = require('gulp');
gulp.task('transfererHTML', function() {
    return gulp.src(['dev/*.html', 'dev/image'])
        .pipe(gulp.dest('dist'))
});
gulp.task('transfererJS', function() {
    return gulp.src('dev/js/*.js')
        .pipe(gulp.dest('dist/js'))
});