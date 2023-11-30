const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
    return gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('Css'));
}

gulp.task('default', compileSass);

gulp.task('watch', function () {
    gulp.watch('sass/*.scss', compileSass);
});