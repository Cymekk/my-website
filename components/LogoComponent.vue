<template>
	<div class="logo -translate-x-[100px] opacity-0 transition-transform-opacity duration-500">
		<NuxtLink :to="localePath('index')">
			<img src="/logo-dark.svg" alt="logo - dark mode" v-if="colorMode.preference === 'dark'" />
			<img src="/logo-light.svg" alt="logo - light mode" v-else />
		</NuxtLink>
	</div>
</template>

<script setup>
const colorMode = useColorMode()
const localePath = useLocalePath()
</script>

<style lang="scss" scoped></style>
