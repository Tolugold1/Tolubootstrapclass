'use strict';

module.exports = function(grunt){
  // Time how long tasks takes, can help when optimizing build time.
  require('time-grunt')(grunt);
  // jit, automatically load required grunt tasks
  require('jit-grunt')(grunt);

  //Defines the configuration for all the tasks
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/style.css': 'css/style.scss'
        }
      }
    },
    watch: {
      files: 'css/*.scss',
      tasks: ['sass']
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'css/*.css',
            '*.html',
            'js/*.js'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          }
        }
      }
    }
  });

  grunt.registerTask('css', ['sass']);
  grunt.registerTask('default', ['browserSync', 'watch']);
};