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

gulp.task('sass', async () => {
    const option = {
        outputStyle : "expanded",
        indentType : "tab",
        indentWidth : 1,
        precision: 3,
        sourceComments: false
    };
	await gulp.src([PATH.SRC.scss,PATH.SRC.sass,PATH.SRC.css])
    .pipe( cache.filter() )
    .pipe( plumber({ errorHandler: notify.onError("SCSS Compile error <%= error.message %>") }))
    .pipe( sass(option) )
    .pipe( cache.cache() )
    .pipe( gulp.dest(PATH.DIST.css))
})

gulp.task('cleanAssets', async () => {
    del.sync(PATH.DIST.assets+'/*');
})

gulp.task('assets' , async () => {
    await gulp.src(PATH.SRC.assets)
    .pipe(gulp.dest(PATH.DIST.assets))
    .pipe(reload.reload({ stream : true }));
})

gulp.task('js',async () => {
    await gulp.src(PATH.SRC.js)
    .pipe(babel())
    .pipe(minify())
    .pipe(gulp.dest(PATH.DIST.js))
    .pipe(reload.reload({ stream : true }));
})

gulp.task('bundle-js',async () => {
    //await del.sync(PATH.DIST.js+'/*.js')
    await gulp.src(PATH.SRC.js)
    .pipe(babel())
    .pipe(minify())
	.pipe(concat('bundle.js'))
    .pipe(gulp.dest(PATH.DIST.js))
    .pipe(reload.reload({ stream : true }));
})

gulp.task('lib',async () => {
    await gulp.src(PATH.SRC.lib)
    .pipe(concat('lib.js'))
    .pipe(gulp.dest(PATH.DIST.lib))
    .pipe(reload.reload({ stream : true }));
})

gulp.task('ejs', async () => {
    await gulp.src([PATH.SRC.ejs,PATH.SRC.ignoreInc])
    .pipe(plumber({ errorHandler: notify.onError("ejs Compile Error : <%= error.message %>") }) )
    .pipe(ejs())
    .pipe(rename({extname:'.html'}))
    .pipe(gulp.dest(PATH.DIST.html))
    .pipe(reload.reload({ stream : true }));
});


gulp.task('html', async () => {
    await gulp.src(PATH.SRC.html)
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

gulp.task('watch', () => {
    gulp.watch(PATH.SRC.js,  gulp.series('js'))
    gulp.watch(PATH.SRC.lib,  gulp.series('lib'))
	gulp.watch(PATH.SRC.css,  gulp.series('sass'))
    gulp.watch(PATH.SRC.ejs,  gulp.series('ejs'))
    gulp.watch(PATH.SRC.html,  gulp.series('html'))
    gulp.watch(PATH.SRC.assets,  gulp.series('cleanAssets','assets'))
});


gulp.task( 'default' , gulp.parallel('browserSync','watch'));