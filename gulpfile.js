let appPaths = require('./src/config/gulp-config/paths.js')
	gulp = require('gulp'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync').create();


//SASS Compaling task
gulp.task('sass', function() {
	return gulp.src(appPaths.styles.sassSRC)
				.pipe(plumber())
				.pipe(sass({outputStyle: 'compressed'}))
				.pipe(gulp.dest(appPaths.styles.sassDEST))
				.pipe(browserSync.stream());
});


//Pug Compailing task
gulp.task('pug', function() {
	return gulp.src(appPaths.pugTemplates.pugSRC)
				.pipe(plumber())
				.pipe(pug())
				.pipe(gulp.dest(appPaths.pugTemplates.pugDEST))
				.pipe(browserSync.stream());
});


//Compress JS code
gulp.task('compress', function() {
	return gulp.src(appPaths.js.jsSRC)
				.pipe(plumber())
				//.pipe(uglify())
				.pipe(gulp.dest(appPaths.js.jsDEST))
				.pipe(browserSync.stream());
});

//Serve task with browsers sync and watchers
gulp.task('serve', function() {

	browserSync.init({server: appPaths.server.root});

	gulp.watch(appPaths.styles.sassSRC, ['sass']);
	gulp.watch(appPaths.pugTemplates.pugSRC, ['pug'])
	gulp.watch(appPaths.js.jsSRC, ['compress'])
	//gulp.watch('./production/public/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
