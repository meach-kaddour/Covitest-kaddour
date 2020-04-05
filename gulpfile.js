var gulp = require('gulp');

// transfert task

gulp.task('run', function() {
    return gulp.src(['dev/image', 'dev/js'])

    .pipe(gulp.dest('dist'));

});