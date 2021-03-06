var browserify   = require('browserify');
var watchify     = require('watchify');
var reactify     = require('reactify');
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var notify       = require('gulp-notify');
var source       = require('vinyl-source-stream');

var scriptsDir = './src';
var buildDir = './www/scripts';
var entries = [
  {
    'entry': 'main.js',
    'exit': 'main.js'
  },
]

var buildScript = function(entryPoint, exitPoint) {
  var bundler = watchify(browserify(scriptsDir + '/' + entryPoint, watchify.args));
  bundler.transform(reactify);

  bundler.on('update', rebundle);

  function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
      title: "Compile Error",
      message: "<%= error.message %>"
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
  }

  function rebundle() {
    return bundler.bundle()
      .on('error', handleErrors)
      .pipe(source(exitPoint))
      .pipe(gulp.dest(buildDir));
  }

  return rebundle();
};

gulp.task('default', function (){
  for (var i=0; i< entries.length; i++){
    buildScript(entries[i].entry, entries[i].exit);
  }
});
