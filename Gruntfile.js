module.exports = function(grunt) {

  // Grunt Configurations
  grunt.initConfig({
    // Pass in options to plugins, reference to files etc
    concat: {
      js: { // js job
        src:  ['js/*.js'],
        dest: 'build/scripts.js'
      },
      css: { // css job
        src:  ['css/*.css'],
        dest: 'build/style.css'
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Register tasks
  grunt.registerTask('concat-js',  ['concat:js']);
  grunt.registerTask('concat-css', ['concat:css']);

  grunt.registerTask('run', function() {
    console.log('I am running');
  });

  grunt.registerTask('sleep', function() {
    console.log('I am sleeping');
  })

  // How to fire both tasks above to run at once

  grunt.registerTask('all', ['sleep', 'run', 'concat-js', 'concat-css']);

};
