const gulp      = require('gulp');
const sass      = require('gulp-sass');
const ts        = require('gulp-typescript');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var nodemon     = require('gulp-nodemon');

const tsProject = ts.createProject('tsconfig.json');


gulp.task('scripts', function () {
    var tsResult = gulp.src("app/**/*.ts") // or tsProject.src()
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('build'));
});

gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass({
            errLogToConsole : true,
            sourceComments  : true,
            includePaths    : ['bower_components/foundation/scss']
        }).on('error', sass.logError))
        .pipe(gulp.dest('./build/public/css'));
});



gulp.task('browser-sync', ['nodemon'], function () {
    browserSync({
        proxy  : "localhost:3000",  // local node app address
        port   : 5000,  // use *different* port than above
        notify : true
    });
});

gulp.task('nodemon', function (cb) {
    let called = false;
    return nodemon({
        script : 'build/server.js',
        ignore : [
            'gulpfile.js',
            'node_modules/'
        ]
    }).on('start', function () {
        if (!called) {
            called = true;
            cb();
        }
    }).on('restart', function () {
        setTimeout(function () {
            reload({stream : false});
        }, 1000);
    });
});

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass', reload]);
    gulp.watch('./app/**/*.ts', ['scripts']);
    gulp.watch('build/templates/**/*.njk', reload);
});

gulp.task('default', ['browser-sync', 'watch']);
//gulp.task('default', ['browser-sync']);

//gulp.task('default', ['connect', 'watch', 'sass']);
//gulp.task('default', ['watch', 'sass']);