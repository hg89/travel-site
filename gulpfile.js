const gulp = require('gulp')
const watch = require('gulp-watch')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssvars = require('postcss-simple-vars')
const nested = require('postcss-nested')
const cssimport = require('postcss-import')

gulp.task('default', function() {
    console.log('Hooray - you created a Gulp task.')
})

gulp.task('html', function() {
    console.log('Imagine something useful being done to your html here')
})

gulp.task('styles', function() {
    return gulp
        .src('./app/assets/styles/styles.css')
        .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'))
})

gulp.task('watch', function() {
    watch('./app/assets/index.html', function() {
        gulp.start('html')
    })

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles')
    })
})
