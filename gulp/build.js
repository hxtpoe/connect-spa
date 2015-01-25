'use strict';

var gulp = require('gulp');

var ts = require('gulp-typescript');
var eventStream = require('event-stream');

var tsProject = ts.createProject({
  declarationFiles: true,
  noExternalResolve: false,
  sortOutput: true
});

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

function handleError(err) {
    console.error(err.toString());
    this.emit('end');
}

gulp.task('styles', ['wiredep'], function () {
    return gulp.src('src/{app,components}/**/*.scss')
        .pipe($.rubySass({style: 'expanded'}))
        .on('error', handleError)
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('.tmp'))
        .pipe($.size());
});

gulp.task('scripts', function() {
    var tsResult = gulp.src('src/{app,components}/**/*.ts')
        .pipe(ts(tsProject));

    return eventStream.merge( // Merge the two output streams, so this task is finished when the IO of both operations are done.
        tsResult.dts.pipe(gulp.dest('.tmp/definitions')),
        tsResult.js.pipe(gulp.dest('.tmp/js'))
    );
});

gulp.task('scripts:app', function () {
  return compileAppScripts();
});

function compileAppScripts() {
  var tsProject = $.typescript.createProject({
    declarationFiles: true,
    noExternalResolve: false,
    sortOutput: true
  });
  var opt = {
    tsProject: tsProject,
    inPath: 'src/app/index.ts',
    outDefPath: '.tmp/definitions/app',
    outJsPath: '.tmp/app',
    outJsFile: 'index.js'
  }
  return compileTS(opt);
}

function compileTS(opt) {
  var tsResult = gulp.src(opt.inPath)
    .pipe($.sourcemaps.init()) // sourcemaps will be generated
    .pipe($.typescript(opt.tsProject, undefined, $.typescript.reporter.fullReporter(true)));

  return eventStream.merge( // this task is finished when the IO of both operations are done
    tsResult.dts.pipe(gulp.dest(opt.outDefPath)),
    tsResult.js
      .pipe($.concatSourcemap(opt.outJsFile))
      .pipe($.sourcemaps.write()) // sourcemaps are added to the .js file
      .pipe(gulp.dest(opt.outJsPath))
  );
}

gulp.task('partials', function () {
    return gulp.src('src/{app,components}/**/*.html')
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe($.ngHtml2js({
            moduleName: 'connect'
        }))
        .pipe(gulp.dest('.tmp'))
        .pipe($.size());
});

gulp.task('html', ['styles', 'scripts', 'partials'], function () {
    var htmlFilter = $.filter('*.html');
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');
    var assets;

    return gulp.src('src/*.html')
        .pipe($.inject(gulp.src('.tmp/{app,components}/**/*.js'), {
            read: false,
            starttag: '<!-- inject:partials -->',
            addRootSlash: false,
            addPrefix: '../'
        }))
        .pipe(assets = $.useref.assets())
        .pipe($.rev())
        .pipe(jsFilter)
        .pipe($.ngAnnotate())
        .pipe($.uglify({preserveComments: $.uglifySaveLicense}))
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(htmlFilter)
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(htmlFilter.restore())
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});

gulp.task('images', function () {
    return gulp.src('src/assets/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/assets/images'))
        .pipe($.size());
});

gulp.task('fonts', function () {
    return gulp.src($.mainBowerFiles())
        .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
        .pipe($.flatten())
        .pipe(gulp.dest('dist/fonts'))
        .pipe($.size());
});

gulp.task('misc', function () {
    return gulp.src('src/**/*.ico')
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});

gulp.task('serve', ['scripts:app'], function () {
  runSequence('connect', function () {
    require('opn')('http://localhost:9000');
  });
});

gulp.task('clean', function (done) {
    $.del(['.tmp', 'dist'], done);
});

gulp.task('build', ['html', 'images', 'fonts', 'misc']);

gulp.task('watch', ['scripts', 'styles'], function () {
  gulp.watch('src/{app,components}/**/*.scss', ['styles']);
  gulp.watch('src/{app,components}/login/**/*.ts', ['scripts']);
  gulp.watch('src/assets/images/**/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
});


