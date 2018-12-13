const sass = require('node-sass');

module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			main: {
				src: 'js/<%= pkg.name %>.js',
				dest: 'js/<%= pkg.name %>.min.js',
			},
		},
		sass: {
			dev: {
				options: {
					implementation: sass,
					outputStyle: 'expanded',
					sourceMap: true,
					sourceMapEmbed: true,
				},

				files: {
					'css/styles.css': 'sass/styles.scss',
				},
			},
			dist: {
				options: {
					implementation: sass,
					outputStyle: 'compressed',
					sourceMap: true,
				},

				files: {
					'css/<%= pkg.name %>.min.css': 'sass/<%= pkg.name %>.scss',
				},
			},
		},
		banner:
			'/*!\n' +
			' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
			' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
			' * Licensed under <%= pkg.license %>\n' +
			' */\n',
		usebanner: {
			dist: {
				options: {
					position: 'top',
					banner: '<%= banner %>',
				},
				files: {
					src: ['css/<%= pkg.name %>.min.css', 'js/<%= pkg.name %>.min.js'],
				},
			},
		},
		watch: {
			sass: {
				files: ['sass/**/*.scss'],
				tasks: ['sass:dev'],
				options: {
					spawn: false,
				},
			},
			js: {
				files: ['js/*.js'],
				tasks: ['uglify'],
				options: {
					spawn: false,
				},
			},
		},
	});

	grunt.registerTask('jekyll-server', 'Serve the site through Jekyll', function() {
		var exec = require('child_process').exec;

		var proc = exec('bundle exec jekyll serve --host 0.0.0.0');
		proc.stdout.on('data', function(data) {
			console.log(data);
		});
		proc.stderr.on('data', function(data) {
			console.log(data);
		});
		proc.on('close', function(code) {
			console.log('jekyll closing code: ' + code);
		});
	});

	// Load the plugins.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('build', ['uglify', 'sass:dist', 'usebanner']);
	grunt.registerTask('default', ['build']);
	grunt.registerTask('serve', ['jekyll-server', 'sass:dev', 'watch']);
};
