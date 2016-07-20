
module.exports = function(grunt) {

  // Grunt Project Configurations
  grunt.initConfig({
    // Pass options to grunt configuration
    pkg: grunt.file.readJSON('package.json'), // PGK plugin
    concat: { // Concat Plugin
      options: { // Name of the Concat task
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      js: { // Name of Js job/task
        src:  ['js/*.js'],
        dest: 'build/scripts.js',
      },
      css: { // Name of Css job/task
        // -> does not care bout the order src:  ['css/*.css'],
        src:  ['css/reset.css', 'css//bootstrap.css', 'css/style.css'],
        dest: 'build/style.css',
      },
    },
    log: {
      foo: [1, 2, 3],
      bar: 'hellow world',
      baz: false,
    },
    sass: {
      build: {
        files: [{
          src: 'css/sass/styles.scss',
          dest: 'css/style.css',
        },],
      },
    },
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');

  // Register tasks

  // Removed: Use this if you want to use only of the task
  grunt.registerTask('concat-js',  ['concat:js']);
  grunt.registerTask('concat-css', ['concat:css']);
  grunt.registerTask('build-css', ['sass:build']);


  grunt.registerTask('run', function() {
    console.log('I am running');
  });

  grunt.registerTask('sleep', function() {
    console.log('I am sleeping');
  })

  grunt.registerMultiTask('log', 'Log stuff.', function() {
    grunt.log.writeln(this.target + ': ' + this.data);
  })

  // Custome tasks
  grunt.registerTask('default', 'My "default" task description.', function() {
    grunt.log.writeln('Currently running the "default" task.');
  });

  // Running other task inside a task
  grunt.registerTask('foo', 'my "foo" task.', function() {
    // Enqueue "bar" and "baz" tasks, to run after "foo" finishes, in-order.
    grunt.task.run(['log:bar', 'log:baz']);
  });

  // Tasks can be asychronous
  grunt.registerTask('asyncfoo', 'My "asyncfoo" task', function() {
    // Force task into async mode and grab a handle to the "done" function
    var done = this.async();

    // Run some synce stuff.
    grunt.log.writeln('Processing task...');

    // And some async stuff
    setTimeout(function() {
      grunt.log.writeln('All done');
      done();
    }, 1000);
  });

  // How to fire both tasks above to run at once

  grunt.registerTask('all', ['sleep', 'run', 'concat', 'log']);

};
