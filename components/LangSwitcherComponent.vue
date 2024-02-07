<template>
	<div class="-translate-x-[150%] transition-transform duration-500 box flex items-center" v-if="locale !== 'pl-PL'">
		<Icon
			name="cif:pl"
			class="cursor-pointer"
			size="3em"
			@mouseover="showFlagInfo = true"
			@mouseleave="showFlagInfo = false"
			@click="changeLanguage"
		/>

		<p
			class="ml-[10px] hidden sm:block font-mono text-sm opacity-0 transition-opacity duration-300 text-gray-700 dark:text-gray-200"
			:class="{ 'opacity-100': showFlagInfo }"
		>
			Change language to Polish
		</p>
	</div>

	<div class="box -translate-x-[150%] transition-transform duration-500 flex items-center" v-else>
		<Icon
			name="cif:gb"
			class="cursor-pointer"
			size="3em"
			@mouseover="showFlagInfo = true"
			@mouseleave="showFlagInfo = false"
			@click="changeLanguage"
		/>
		<p
			class="ml-[10px] hidden sm:block font-mono text-sm opacity-0 transition-opacity duration-300 text-gray-700 dark:text-gray-200"
			:class="{ 'opacity-100': showFlagInfo }"
		>
			Zmień język na angielski
		</p>
	</div>
</template>

<script setup>
const { locales, locale, setLocale } = useI18n()

const changeLanguage = () => {
	if (locale.value === 'en-US') {
		setLocale('pl-PL')
		console.log(locale.value)
	} else {
		setLocale('en-US')
	}
}

onMounted(() => {
	const flags = document.querySelectorAll('.box')
	{
		flags.forEach(el => {
			el.style.transform = 'translateX(0)'
		})
	}
})

const showFlagInfo = ref(false)
</script>

<style lang="scss" scoped></style>
