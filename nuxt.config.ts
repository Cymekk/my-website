import { localeCodes } from '#build/i18n.options.mjs'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'nuxt-icon', '@nuxtjs/color-mode', '@nuxtjs/google-fonts'],
	colorMode: {
		preference: 'dark', // default value of $colorMode.preference
		fallback: 'dark', // fallback value if not system preference found
		classPrefix: '',
		classSuffix: '',
	},
	i18n: {
		lazy: true,
		langDir: 'locales',
		locales: [
			{
				code: 'en-US',
				iso: 'en-US',
				name: 'English(US)',
				file: 'en-US.json',
			},
			{
				code: 'pl-PL',
				iso: 'pl-PL',
				name: 'Polish',
				file: 'pl-PL.json',
			},
		],
		defaultLocale: 'pl-PL',
	},
	googleFonts: {
		families: {
			Roboto: [400, 700],
		},
	},
})
