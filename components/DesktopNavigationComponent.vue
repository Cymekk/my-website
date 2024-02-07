<template>
	<div class="links hidden lg:block">
		<ul class="flex text-[20px] overflow-hidden">
			<NuxtLink
				:to="{ path: route.path, hash: '#about-me' }"
				class="px-4 relative -translate-y-[100px] opacity-0 transition-transform-opacity duration-500"
			>
				<li>{{ $t('about-me') }}</li>
			</NuxtLink>

			<NuxtLink
				:to="{ path: route.path, hash: '#projects' }"
				class="px-4 relative -translate-y-[100px] opacity-0 transition-transform-opacity duration-500"
			>
				<li>{{ $t('projects') }}</li>
			</NuxtLink>

			<NuxtLink
				:to="{ path: route.path, hash: '#stack' }"
				class="px-4 relative -translate-y-[100px] opacity-0 transition-transform-opacity duration-500"
			>
				<li>{{ $t('stack') }}</li>
			</NuxtLink>
			<NuxtLink
				:to="{ path: route.path, hash: '#contact' }"
				class="px-4 relative -translate-y-[100px] opacity-0 transition-transform-opacity duration-500"
			>
				<li>{{ $t('contact') }}</li>
			</NuxtLink>

			<li
				class="overflow-hidden settings-icon -translate-y-[100px] opacity-0 transition-transform-opacity duration-500"
			>
				<Icon
					name="material-symbols-light:settings"
					class="block cursor-pointer hover:rotate-180 transition-transform duration-500"
					size="1.5em"
					@click="isSettingVisible = true"
				/>
			</li>
		</ul>
	</div>
	<SettingsComponent @wheel.prevent @touchmove.prevent @scroll.prevent v-model="isSettingVisible" class="z-50" />
</template>

<script setup>
const route = useRoute()

//variable which handle setting popup
const isSettingVisible = ref(false)

onMounted(() => {
	const allLinks = document.querySelector('.links').querySelectorAll('a')
	const settingsIcon = document.querySelector('.links').querySelector('.settings-icon')

	allLinks.forEach((el, index) => {
		setTimeout(() => {
			;(el.style.transform = 'translateX(0)'), (el.style.opacity = '1')
		}, (index + 1) * 200)
	})

	setTimeout(() => {
		settingsIcon.style.opacity = '1'
		settingsIcon.style.transform = 'translateX(0)'
	}, 1000)
})
</script>

<style lang="scss" scoped>
a::after {
	content: '';
	position: absolute;
	width: 0;
	height: 2px;
	bottom: 0;
	left: 0;
	transition: width 0.3s ease-in;
	@apply bg-gray-700 dark:bg-gray-200;
}

a:hover::after {
	width: 100%;
}
</style>
