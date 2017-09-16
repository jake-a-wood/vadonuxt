module.exports = {
	root: true,
	parser: 'babel-eslint',
	env: {
		browser: true,
		node: true
	},
	extends: 'standard',

	// required to lint *.vue files
	plugins: [
		'html' // Only lints the script tags in html
	],
	settings : {
		"html/indent": "0",
		"html/html-extensions": [".vue", ".html"]
	},

	// add your custom rules here
	rules: {
		// allow paren-less arrow functions
		'arrow-parens': 0,

		// allow async-await
		'generator-star-spacing': 0,

		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

		// do not allow console.logs etc...
		// 'no-console': 0,
		
		'no-mixed-spaces-and-tabs' : 2,
		'no-tabs' : 0,
		'indent' : ["error", "tab"]
	},
	globals: {
		'use': true
	}
}
