// generated on 2017-11-21 using generator-ajsweb 1.4.14

const gulp = require('gulp');
const connect = require('gulp-connect');
const open = require('gulp-open');
const runSequence = require('run-sequence');
const karma = require('karma').Server;
const del = require('del');
const jshint = require("gulp-jshint");
const ajsweb = require("gulp-ajsweb");
const rename = require("gulp-rename");

let dev = true;
let minimal = false;
let dest = 'dist';
let bootstrap = true;
let sass = true;

gulp.task('clean', () => {
    return del(['build', 'dist', 'coverage', 'reports', '*.tgz', '*.zip', 'docs']);
});

gulp.task('compile', ['scripts', 'styles', 'jshint', 'fonts', 'images', 'icon', 'views'], () => {});

gulp.task('default', ['build'], () => {});

gulp.task('build', () => {
    return new Promise(resolve => {
        minimal = false;
        dest = 'build';
        runSequence(['clean'], ['compile'], resolve);
    });
});

gulp.task('dist', () => {
    return new Promise(resolve => {
        minimal = true;
        dest = 'dist';
        runSequence(['clean'], ['compile'], resolve);
    });
});

gulp.task('docs', () => {
    return new Promise(resolve => {
        minimal = true;
        dest = 'docs';
        runSequence(['clean'], ['compile'], ['js2docs'], resolve);
    });
});

gulp.task('scripts', () => {
    return ajsweb.buildScripts({
            dest: dest,
            minimal: minimal
        })
        .pipe(connect.reload());
});

gulp.task('styles', () => {
    return ajsweb.buildStyles({
            dest: dest,
            minimal: minimal,
            bootstrap: bootstrap,
            sass: sass
        })
        .pipe(connect.reload());
});

gulp.task('jshint', () => {
    return ajsweb.appScripts()
        .pipe(jshint())
        .pipe(jshint.reporter());
});

gulp.task('fonts', () => {
    return ajsweb.buildFonts({
            dest: dest,
            minimal: minimal
        })
        .pipe(connect.reload());
});

gulp.task('views', () => {
    return ajsweb.buildViews({
            dest: dest,
            minimal: minimal,
            bootstrap: bootstrap,
            sass: sass
        })
        .pipe(connect.reload());
});

gulp.task('images', () => {
    return ajsweb.buildImages({
            dest: dest,
            minimal: minimal
        })
        .pipe(connect.reload());
});

gulp.task('icon', () => {
    return ajsweb.buildIcon({
            dest: dest,
            minimal: minimal
        })
        .pipe(connect.reload());
});

gulp.task('js2docs', function() {
    return ajsweb.buildDocs({
        dest: dest
    });
});

gulp.task('karma-cnf', () => {
    return ajsweb.updateKarmaFile({
        configFile: 'karma.conf.js',
        dest: '.'
    });
});

gulp.task('karma-server', () => {
    return new karma({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }).start();
});

gulp.task('testHtml', () => {
    return ajsweb.buildIndexTest({
        dest: dest,
        minimal: minimal,
        bootstrap: bootstrap,
        sass: sass
    })
    .pipe(rename('index.html'))
    .pipe(gulp.dest(dest));
});

gulp.task('test', function() {
    return new Promise(resolve => {
        runSequence(['karma-cnf'], ['build'], ['testHtml'], ['karma-server'], resolve);
    });
});

gulp.task('connect', function() {
    return connect.server({
        port: 9100,
        root: [dest],
        livereload: true
    });
});

gulp.task('open', function(){
    return gulp.src(dest + '/index.html')
        .pipe(open({
            uri: 'localhost:9100',
            app: 'firefox'
        }
    )); 
});

gulp.task('watch', function() {
    gulp.watch(ajsweb.paths.appScripts, ['scripts']);
    gulp.watch(ajsweb.paths.appStyles, ['styles']);
    gulp.watch(ajsweb.paths.appViews, ['views']);
    gulp.watch(ajsweb.paths.appImages, ['images']);
    gulp.watch(ajsweb.paths.appFonts, ['fonts']);
    gulp.watch(ajsweb.paths.appIcon, ['icons']);
});

gulp.task('serve', function() {
    return new Promise(resolve => {
        runSequence(['build'], ['connect'], ['watch'], ['open'], resolve);
    });
});

gulp.task('serve:dist', function() {
    return new Promise(resolve => {
        runSequence(['dist'], ['connect'], ['open'], resolve);
    });
});

gulp.task('serve:test', function() {
    return new Promise(resolve => {
        runSequence(['test'], ['connect'], ['open'], resolve);
    });
});

gulp.task('serve:docs', function() {
    return new Promise(resolve => {
        runSequence(['docs'], ['connect'], ['open'], resolve);
    });
});

