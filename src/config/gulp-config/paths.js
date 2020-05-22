module.exports = {
	server: {
		root: './production/public',
	},

	styles: {
		sassSRC: './src/sass/**/*.sass', //*.+(sass|scss)
		sassDEST: './production/public/assets/css',
	},

	pugTemplates: {
		pugSRC: './src/pug/**/*.pug',
		pugDEST: './production/public'
	},

	js: {
		jsSRC: './src/js/main.js',
		jsDEST: './production/public/assets/js'
	}
}