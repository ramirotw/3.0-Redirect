var gulp = require('gulp');

gulp.task('test', function () {
  var server = require('karma').server;
  
  server.start({
    configFile: __dirname + '/karma.config.js',
    singleRun: true
  });
});

gulp.task('serve', function() {
  return require('./server_start.js');
});
