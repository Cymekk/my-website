<template>
	<NuxtPage />
	<ClientOnly>
		<CookiesComponent />
	</ClientOnly>
</template>

<script setup>
useSeoMeta({
	title: 'Marcin Cymerman - Frontend Developer',
	ogTitle: 'Marcin Cymerman - Frontend Developer',
	description:
		'Przeglądaj moje najnowsze projekty! Zapraszam Cię do odkrycia moich umiejętności i kreatywności poprzez zbiór projektów, które stworzyłem. Dzięki nim możesz poznać moje doświadczenie i potencjał, idealne do pokazania rekruterom. Sprawdź teraz i daj się zainspirować!.',
	ogDescription:
		'Przeglądaj moje najnowsze projekty! Zapraszam Cię do odkrycia moich umiejętności i kreatywności poprzez zbiór projektów, które stworzyłem. Dzięki nim możesz poznać moje doświadczenie i potencjał, idealne do pokazania rekruterom. Sprawdź teraz i daj się zainspirować!.',
	ogImage: '/logo-light.svg',
	twitterCard: 'summary_small_card',
	lang: 'PL',
	ogUrl: 'localhost:3000',
	twitterTitle: 'Marcin Cymerman - Frontend Developer',
	twitterDescription:
		'Przeglądaj moje najnowsze projekty! Zapraszam Cię do odkrycia moich umiejętności i kreatywności poprzez zbiór projektów, które stworzyłem. Dzięki nim możesz poznać moje doświadczenie i potencjał, idealne do pokazania rekruterom. Sprawdź teraz i daj się zainspirować!',
	twitterImage: '/logo-light.svg',
})

const colorMode = useColorMode()

console.log(colorMode.preference)

useHead({
	link: [
		{
			rel: 'icon',
			type: 'image/png',
			href: 'logo.png',
		},
	],
})
</script>

<style>
*,
*::after,
*::before {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: 'Roboto', sans-serif;
}

body {
	overflow-x: hidden;
}
</style>
