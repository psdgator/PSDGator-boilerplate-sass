module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/main.css' : 'scss/styles.scss'
				}
			}
		},
		cssmin: {
			dist: {
				files: {
					'css/main.min.css': 'css/main.css'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass','cssmin'],
                options: {
                    livereload: true,
                },
			},
            html: {
                files: ['**/*.html'],
                options: {
                    livereload: true,
                }
            }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}
