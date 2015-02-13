module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),

        sass: {
            stage: {
                files: [{
                    expand: true,
                    cwd: 'src/bonnet/scss',
                    src: ['*.scss'],
                    dest: 'tmp/css',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            combine: {
                files: {
                    'tmp/stylemin.css': ['tmp/css/*.css','src/bonnet/lib/*.css']
                }
            }
        },
        autoprefixer: {
            stage: {
                files: {
                    'stage/assets/css/global.css':['tmp/stylemin.css']
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'stage/assets/js/script.min.js': ['src/bonnet/lib/*.js','src/bonnet/js/*.js']
                }
            }
        },

        connect: {
            dev: {
                options: {
                    port: 8000,
                    base: './stage'
                }
            }
        },

        /* assemble templating */
        assemble: {
            options: {
                helpers: './src/bonnet/helpers/**/*.js',
                layout: 'page.hbs',
                layoutdir: './src/bonnet/layouts/',
                partials: './src/bonnet/partials/**/*',
                assets: './stage/assets/',
                data: './stage/data/*.json'
            },
            pages: {
                cwd: './src/content/_pages/',
                dest: './stage/',
                expand: true,
                src: '**/*.hbs'
            }
        },
        watch: {
            css: {
                files: ['src/bonnet/scss/*.scss'],
                tasks: ['sass','cssmin','autoprefixer','assemble'],
                options: {
                    livereload: true
                }
            },
            scripts: {
                files: ['src/bonnet/js/*.js'],
                tasks: ['uglify'],
                option: {
                    livereload: true
                }
            },
            files: ['src/**/*.hbs'],
            tasks: 'assemble',
            options: {
                livereload: true
            }
        }
    });

  /* load every plugin in package.json */
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-watch');

  /* grunt tasks */
  grunt.registerTask('default', ['sass','cssmin','autoprefixer','uglify', 'assemble', 'connect', 'watch']);

};
