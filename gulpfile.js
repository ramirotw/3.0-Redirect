var gulp = require('gulp');

gulp.task('test', function () {
  var server = require('karma').server;

  server.start({
    configFile: __dirname + '/karma.config.js',
    singleRun: true
  });
});

gulp.task('serve', function() {
  var argv = require('yargs').argv;
  var rename = require('gulp-rename');
  var merge = require('merge-stream');

  var destination = 'public';

  var envTask = gulp.src('bower_components/EnvConfigs/Redirect/' + argv.env + '.config.js')
      .pipe(rename('env.config.js'))
      .pipe(gulp.dest(destination));

  var srcTask = gulp.src(['index.html', 'redirect.js'])
      .pipe(gulp.dest(destination));

  var vendorTask = gulp.src([
    'bower_components/angular/angular.min.js',
    'bower_components/angular-animate/angular-animate.min.js',
    'bower_components/angular-aria/angular-aria.min.js',
    'bower_components/angular-material/angular-material.min.js',
    'bower_components/angular-material/angular-material.min.css'
  ]).pipe(gulp.dest(destination + '/vendor'));

  return merge(envTask, srcTask, vendorTask)
    .on('end', function () {
      require('./server_start.js');
    });
});
