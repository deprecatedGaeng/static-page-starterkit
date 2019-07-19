import gulp from 'gulp';
import {PATH} from './dir';
import del from 'del' ; 
import minify from 'gulp-uglify';
import sass from 'gulp-sass';
import Cache from 'gulp-file-cache';
import connect from 'gulp-connect';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import strip from 'gulp-strip-debug';
import minifyHTML from 'gulp-minify-html';
import browserSync from 'browser-sync';
import 'babel-polyfill'

const cache = new Cache();
const reload = browserSync.create();

const handleError = function(err) {
    console.log(err);
    this.emit('end');
}
const clean = () => {
    return new Promise( resolve => {
        del.sync( PATH.DIR.DIST);
        resolve() ; 
    }) ;
}

gulp.task('sass', () => {
    const option = {
        outputStyle : "expanded",
        indentType : "tab",
        indentWidth : 1,
        precision: 3,
        sourceComments: false
    };
	return new Promise( resolve => {
		gulp.src(PATH.SRC.css)
        .pipe( cache.filter() )
        .pipe( sass(option) ).on('error', handleError)
        .pipe( cache.cache() ) 
        .pipe( gulp.dest(PATH.DIST.css))
		resolve();
	})
})

gulp.task('watch', () => {
    gulp.watch(PATH.SRC.js,  gulp.series('js'))
    gulp.watch(PATH.SRC.lib,  gulp.series('lib'))
	gulp.watch(PATH.SRC.css,  gulp.series('sass'))
    gulp.watch(PATH.SRC.html,  gulp.series('html'))
});

gulp.task('js',async () => {
    await gulp.src(PATH.SRC.js)
    .pipe(babel())
    .pipe(minify())
	//.pipe(strip())
	.pipe(concat('index.js'))
    .pipe(gulp.dest(PATH.DIST.js))
    .pipe(reload.reload({ stream : true }));
})

gulp.task('lib',async () => {
    await gulp.src(PATH.SRC.lib)
	.pipe(concat('lib.js'))
    .pipe(gulp.dest(PATH.DIST.lib))
    .pipe(reload.reload({ stream : true }));
})


gulp.task('html', async () => {
    await gulp.src(PATH.SRC.html)
    .pipe(gulp.dest(PATH.DIST.html))
    .pipe(reload.reload({ stream : true }));
});

gulp.task('browserSync', () =>{
    return reload.init({
        startPath : 'views',
        port : PATH.DIR.port,
        watch: true,
        server: { baseDir: 'dist/' }
    });
});

gulp.task( 'default' , gulp.parallel('browserSync','watch'));