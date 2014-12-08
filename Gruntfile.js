module.exports = function (grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: ['less/*.less'],
                tasks: 'default'
            }
        },
        less: {
            options: {
                paths: ['less'],
                compress: false
            },
            files: {
                expand: true,
                flatten: false,
                cwd: 'less/',
                src: ['**/*.less', '!**/_*.less'],
                dest: 'dist/css/',
                ext: '.css'
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            app: {
                src: ['dist/css/*.css', '!dist/css/*.min.css']
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'dist/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/css/',
                ext: '.min.css'
            }
        }
    });
    grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin']);
    grunt.registerTask('go', ['default', 'simple-watch']);
};
