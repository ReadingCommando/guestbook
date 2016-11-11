var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('develop', function() {
	var stream = nodemon({
		script: 'app.js',
		ext: "js json ejs",
		ignore: [".git", "node_modules/**/node_modules"],
		watch: ['**/*.js', 'views/**/*.ejs'],
	});

	stream
	    .on('restart', function() {
	    	console.log('restarted!');
	    })
	    .on('crash', function() {
	    	console.error('Application has crashed!\n');
	    	stream.emit('restart', 10);
	    });
});