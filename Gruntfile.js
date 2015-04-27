module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
    },
    jasmine: {
      src: "src/client/js/*.js",
      options: {
        specs: "specs/client/*Spec.js"
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks("grunt-contrib-jasmine");

  grunt.registerTask("test", ["jshint", "jasmine"]);
  grunt.registerTask("default", ["test"]);

};