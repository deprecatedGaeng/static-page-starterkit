const dir = {
    src : 'src',
    dist : 'dist',
    port : 1108
}

export const PATH = {
    DIR : dir,
    SRC : {
        index : `${dir.src}/index.ejs`,
        js : `${dir.src}/js/**/*.js`,
        css : `${dir.src}/styles/**/*.scss`,
        html : `${dir.src}/views/**/*.html`,
        ejs : `${dir.src}/views/**/*.ejs`,
        lib : `${dir.src}/lib/**/*.js`,
        assets : `${dir.src}/assets/**`
    },
    DIST : {
        index : dir.dist,
        js : `${dir.dist}/js`,
        css : `${dir.dist}/styles`,
        html : `${dir.dist}/views/`,
        lib : `${dir.dist}/lib/`,
        assets : `${dir.dist}/assets`
    },
}