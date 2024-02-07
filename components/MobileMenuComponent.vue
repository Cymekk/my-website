<template>
	<div
		class="links fixed inset-0 bg-gray-200 dark:bg-gray-700 dark:text-gray-300 flex flex-col items-center justify-center transition-opacity-transform duration-500 dark:bg-[url('../mobile-links-bg-dark.svg')] bg-[url('../mobile-links-bg-light.svg')] bg-center bg-no-repeat bg-cover"
		:class="{ 'translate-x-[100%] opacity-0': !modelValue, 'translate-x-0 opacity-100': modelValue }"
	>
		<ul class="text-[24px] font-semibold text-center flex flex-col space-y-[24px] uppercase" id="links">
			<NuxtLink
				:to="{ path: route.path, hash: '#about-me' }"
				@click="emit('update:modelValue', false)"
				class="translate-x-[100px] opacity-0 transition-transform-opacity duration-500"
			>
				<li>{{ $t('about-me') }}</li>
			</NuxtLink>

			<NuxtLink
				:to="{ path: route.path, hash: '#projects' }"
				@click="emit('update:modelValue', false)"
				class="translate-x-[100px] opacity-0 transition-transform-opacity duration-500"
			>
				<li>{{ $t('projects') }}</li>
			</NuxtLink>

			<NuxtLink
				:to="{ path: route.path, hash: '#stack' }"
				@click="emit('update:modelValue', false)"
				class="translate-x-[100px] opacity-0 transition-transform-opacity duration-500"
			>
				<li>{{ $t('stack') }}</li>
			</NuxtLink>
			<NuxtLink
				:to="{ path: route.path, hash: '#contact' }"
				@click="emit('update:modelValue', false)"
				class="translate-x-[100px] opacity-0 transition-transform-opacity duration-500"
			>
				<li>{{ $t('contact') }}</li>
			</NuxtLink>
		</ul>

		<Icon
			name="material-symbols-light:settings"
			class="block cursor-pointer hover:rotate-180 transition-transform duration-500 absolute top-[30px] left-[8px]"
			size="2em"
			@click="isSettingVisible = true"
		/>
		<SettingsComponent @wheel.prevent @touchmove.prevent @scroll.prevent v-model="isSettingVisible" />
	</div>
</template>

<script setup>
const route = useRoute()
let allLinks

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
})

const emit = defineEmits(['update:modelValue'])

//variable which handle setting popup
const isSettingVisible = ref(false)

onMounted(() => {
	allLinks = document.querySelector('#links').querySelectorAll('a')
})

const propsValue = computed(() => {
	return props.modelValue
})

watch(propsValue, newVal => {
	if (newVal) {
		allLinks.forEach((el, index) => {
			setTimeout(() => {
				el.style.transform = 'translateX(0)'
				el.style.opacity = '1'
			}, (index + 1) * 200)
		})
	} else {
		allLinks.forEach(el => {
			el.style.transform = 'translateX(100px)'
			el.style.opacity = '0'
		})
	}
})
</script>

<style lang="scss" scoped></style>
