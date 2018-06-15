const gulp = require('gulp')
const watch = require('gulp-watch')

gulp.task('default', function() {
    console.log('Hooray - you created a Gulp task.')
})

gulp.task('html', function() {
    console.log('Imagine something useful being done to your html here')
})

gulp.task('styles', function() {
    console.log('Imagine Sass or PostCSS tasks running here')
})

gulp.task('watch', function() {
    watch('./app/assets/index.html', function() {
        gulp.start('html')
    })

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles')
    })
})
