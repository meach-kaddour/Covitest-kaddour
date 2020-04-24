var gulp = require('gulp');
gulp.task('transferer', function() {
    return gulp.src(['dev/*.html', 'dev/js/*.js'])
        .pipe(gulp.dest('dist'))
})