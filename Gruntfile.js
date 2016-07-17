module.exports = function(grunt) {

  // Configuration
  grunt.initConfig({
    // Pass in options to plugins, reference to files etc
  });

  // Load plugins

  //grunt.loadNpmTask('');

  // Register tasks
  grunt.registerTask('run', function() {
    console.log('I am running');
  });

  grunt.registerTask('sleep', function() {
    console.log('I am sleeping');
  })

  // How to fire both tasks above to run at once

  grunt.registerTask('all', ['sleep', 'run']);

};
