<template>
	<div
		class="burger w-[30px] h-[30px] relative cursor-pointer overflow-x-hidden z-50 overflow-hidden translate-x-[100%] opacity-0 transition-transform-opacity duration-500"
		@click="emit('showMenu')"
	>
		<span
			class="bar transition-transform duration-700 translate-x-0"
			:class="{ 'top-1/2 translate-y-1/2 rotate-[135deg]': modelValue, 'top-0': !modelValue }"
		></span>
		<span
			class="bar top-1/2 -translate-y-1/2 transition-transform-opacity duration-700 translate-x-0"
			:class="{ 'opacity-0 translate-x-[50px]': modelValue, 'translate-x-0 opacity-100': !modelValue }"
		></span>
		<span
			class="bar transition-transform duration-700 translate-x-0"
			:class="{ 'top-1/2  translate-y-1/2 -rotate-[135deg]': modelValue, 'bottom-0': !modelValue }"
		></span>
	</div>
</template>

<script setup>
const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
})

const emit = defineEmits(['showMenu'])

onMounted(() => {
	const burgerBtn = document.querySelector('.burger')
	burgerBtn.style.opacity = '1'
	burgerBtn.style.transform = 'translateX(0)'
})
</script>

<style lang="scss" scoped>
.bar {
	height: 3px;
	width: 100%;
	position: absolute;
	@apply bg-gray-700 dark:bg-gray-300;
}
</style>
