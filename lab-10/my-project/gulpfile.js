const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
    return gulp.src('src/style/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
    gulp.watch('path/to/your/scss/**/*.scss', gulp.series('sass'));
});

