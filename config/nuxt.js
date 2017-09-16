'use strict'

const resolve = require('path').resolve

module.exports = {
	// Headers of the page
	head: {
		title: 'Adonuxt + Vuetify',
		meta: [
			{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Adonuxt + Vuetify project'
			}
		],
		link: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: 'favicon.ico'
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
			}
		]
	},

	// Global CSS
	plugins: ['~/plugins/vuetify.js'],
	css: ['~/assets/style/app.styl'],

	// Customize the progress-bar color
	loading: { color: '#744d82' },

	// Point to resources
	srcDir: resolve(__dirname, '..', 'resources'),

	build: {
		vendor: ['vuetify'],
		extractCSS: true,

		// Run ESLINT on save
		extend (config, ctx) {
			if (ctx.dev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	}
}
