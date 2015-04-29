module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';;\n;;'
            },
            all: {
                src: [
                    'app/assets/javascripts/vendor/jquery/dist/jquery.js',
                    'app/assets/javascripts/vendor/modernizr/modernizr.js',
                    'app/assets/javascripts/vendor/jquery-backstretch/jquery.backstretch.js',
                    'app/assets/javascripts/vendor/Snap.svg/dist/snap.svg.js',
                    'app/assets/javascripts/all.js'
                ],
                dest: 'public/javascripts/all.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'public/javascripts/all.min.js': ['public/javascripts/all.js']
                }
            }
        },
        stylus: {
            compile: {
                options: {
                    paths: ['app/assets/stylesheets'],
                    urlfunc: 'embedurl',
                    use: [],
                    import: [] //Import for every file
                },
                files: {
                    'public/stylesheets/all.css': 'app/assets/stylesheets/all.styl'
                }
            }
        },
        watch: {
            scripts: {
                files: ['app/assets/javascripts/*.js', 'app/assets/stylesheets/*.styl'],
                tasks: ['concat', 'uglify', 'stylus'],
                options: {
                    event: ['all'],
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        dest: 'public',
                        cwd: 'app/assets',
                        src: ['images/**', 'favicon.png']
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['concat', 'uglify', 'stylus', 'copy']);

    grunt.registerTask('js', ['concat', 'uglify']);
    grunt.registerTask('css', ['stylus']);
    grunt.registerTask('resources', ['copy']);

};