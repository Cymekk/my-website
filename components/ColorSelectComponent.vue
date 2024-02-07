<template>
	<div class="flex items-center">
		<Icon name="heroicons-solid:sun" size="1.5em" class="mx-[6px]" />
		<button
			class="w-[60px] h-[20px] rounded-full p-[5px] relative transition-bg duration-500 bg-gray-500 dark:bg-gray-300"
			@click="changeColorMode"
		>
			<div
				class="w-[10px] h-[10px] rounded-full absolute -translate-y-[5px] transition-transform-bg duration-500 bg-gray-400 translate-x-0 dark:bg-gray-700 dark:translate-x-[40px]"
			></div>
		</button>

		<Icon name="iconamoon:mode-dark-fill" size="1.5em" class="mx-[6px]" />
	</div>
</template>

<script setup>
const darkMode = ref(false)
const colorMode = useColorMode()

const changeColorMode = () => {
	if (colorMode.preference === 'dark') {
		colorMode.preference = 'light'
		darkMode.value = false
	} else {
		colorMode.preference = 'dark'
		darkMode.value = true
	}
}

onMounted(() => {
	if (colorMode.preference === 'dark') {
		darkMode.value = true
	} else {
		darkMode.value = false
	}
})
</script>

<style lang="scss" scoped></style>
