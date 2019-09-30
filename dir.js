const dir = {
    src : 'src',
    dist : 'dist',
    port : 1108
}

export const PATH = {
    DIR : dir,
    SRC : {
        js : `${dir.src}/js/**/*.js`,
        css : `${dir.src}/styles/**/*.scss`,
        html : `${dir.src}/**/*.html`,
        ejs : `${dir.src}/**/*.ejs`,
        ignoreInc : `!src/inc/*.ejs`,
        lib : `${dir.src}/lib/**/*.js`,
        assets : `${dir.src}/assets/**`
    },
    DIST : {
        js : `${dir.dist}/js`,
        css : `${dir.dist}/styles`,
        html : dir.dist,
        lib : `${dir.dist}/lib/`,
        assets : `${dir.dist}/assets`
    },
}