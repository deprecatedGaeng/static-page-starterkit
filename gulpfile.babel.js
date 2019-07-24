import gulp from 'gulp';
import {PATH} from './dir';
import del from 'del' ; 
import minify from 'gulp-uglify';
import sass from 'gulp-sass';
import Cache from 'gulp-file-cache';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import browserSync from 'browser-sync';
import ejs from 'gulp-ejs';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import 'babel-polyfill'

const cache = new Cache();
const reload = browserSync.create();

gulp.task('clean', async () => {
    del.sync( PATH.DIR.DIST);
})

gulp.task('sass', async () => {
    const option = {
        outputStyle : "expanded",
        indentType : "tab",
        indentWidth : 1,
        precision: 3,
        sourceComments: false
    };
	await gulp.src(PATH.SRC.css)
    .pipe( cache.filter() )
    .pipe( plumber({ errorHandler: notify.onError("SCSS Compile error <%= error.message %>") }))
    .pipe( sass(option) )
    .pipe( cache.cache() ) 
    .pipe( gulp.dest(PATH.DIST.css))
})

gulp.task('watch', () => {
    gulp.watch(PATH.SRC.index,  gulp.series('index'))
    gulp.watch(PATH.SRC.js,  gulp.series('js'))
    gulp.watch(PATH.SRC.lib,  gulp.series('lib'))
	gulp.watch(PATH.SRC.css,  gulp.series('sass'))
    gulp.watch(PATH.SRC.ejs,  gulp.series('ejs'))
    gulp.watch(PATH.SRC.assets,  gulp.series('assets'))
});

gulp.task('assets' , async () => {
    await gulp.src(PATH.SRC.assets)
    .pipe(gulp.dest(PATH.DIST.assets))
    .pipe(reload.reload({ stream : true }));
})

gulp.task('js',async () => {
    await gulp.src(PATH.SRC.js)
    .pipe(babel())
    .pipe(minify())
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


gulp.task('index', async () => {
    await gulp.src(PATH.SRC.index)
    .pipe(plumber({ errorHandler: notify.onError("ejs Compile Error : <%= error.message %>")}))
    .pipe(ejs())
    .pipe(rename({extname:'.html'}))
    .pipe(gulp.dest(PATH.DIST.index))
    .pipe(reload.reload({ stream : true }));
});

gulp.task('ejs', async () => {
    await gulp.src(PATH.SRC.ejs)
    .pipe(plumber({ errorHandler: notify.onError("ejs Compile Error : <%= error.message %>") }) )
    .pipe(ejs())
    .pipe(rename({extname:'.html'}))
    .pipe(gulp.dest(PATH.DIST.html))
    .pipe(reload.reload({ stream : true }));
});

gulp.task('browserSync', async () =>{
    return await reload.init({
        startPath : '/index.html',
        port : PATH.DIR.port,
        watch: true,
        server: { baseDir: 'dist/' }
    });
});

gulp.task( 'default' , gulp.parallel('browserSync','watch'));