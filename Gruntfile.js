module.exports  = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    paths: ['less/'],
                    sourceMap: false
                },
                files: {
                    'css/theme.css': ['less/theme.less']
                },
            },
            production: {
                options: {
                    paths: ['less/'],
                    sourceMap: true,
                    sourceMapFilename: 'css/theme.min.map',
                    cleancss: true
                },
                files: {
                    'css/theme.min.css': ['less/theme.less']
                }
            }
        },
        watch: {
            less: {
                files: [
                    'less/**/*.less',
                    'less/**/*.css'
                ],
                tasks: ['less:development', 'less:production']
            }
        }
    });

    grunt.registerTask('default', 'watch');
    grunt.registerTask('run', ['less','watch']);
    grunt.registerTask('runonce', 'less');
};
