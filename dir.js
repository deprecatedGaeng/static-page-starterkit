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
        html : `${dir.src}/views/**/*.html`,
        lib : `${dir.src}/lib/**/*.js`,
    },
    DIST : {
        js : `${dir.dist}/js`,
        css : `${dir.dist}/styles`,
        html : `${dir.dist}/views/`,
        lib : `${dir.dist}/lib/`,
    },
}