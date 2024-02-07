<template>
	<section class="policy min-h-[100svh] bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
		<nav class="container max-w-[1200px] px-[16px] flex justify-between items-center">
			<LogoComponent />
			<Icon
				name="material-symbols-light:settings"
				size="1.5em"
				class="settings-icon cursor-pointer hover:rotate-180 transition-transform-opacity translate-x-[100px] opacity-0 duration-500"
				@click="isSettingsVisible = true"
			/>
		</nav>

		<div class="policy-details container max-w-[1200px] px-[16px]">
			<p class="my-[32px] font-semibold">{{ $t('policy.greetings') }}</p>

			<span> {{ $t('policy.text') }}</span>

			<ul>
				<li class="font-semibold my-[32px]">{{ $t('policy.firstPoint.title') }}</li>
				<li>{{ $t('policy.firstPoint.details') }}</li>
			</ul>

			<ul>
				<li class="font-semibold my-[32px]">{{ $t('policy.secondPoint.title') }}</li>
				<li>
					{{ $t('policy.secondPoint.details') }}
				</li>
			</ul>
			<ul>
				<li class="font-semibold my-[32px]">{{ $t('policy.thirdPoint.title') }}</li>
				<li>
					{{ $t('policy.thirdPoint.details') }}
				</li>
			</ul>
			<ul>
				<li class="font-semibold my-[32px]">{{ $t('policy.fourthPoint.title') }}</li>
				<li class="pb-[32px]">
					{{ $t('policy.fourthPoint.details') }} <span class="font-semibold">cymerman944@gmail.com</span>
				</li>
			</ul>
		</div>

		<SettingsComponent v-model="isSettingsVisible" />
	</section>
</template>

<script setup>
const colorMode = useColorMode()
const { locale } = useI18n()

console.log(locale.value)

onMounted(() => {
	const logo = document.querySelector('.logo')
	logo.style.opacity = '1'
	logo.style.transform = 'translateX(0)'

	const settingsIcon = document.querySelector('.settings-icon')
	settingsIcon.style.opacity = '1'
	settingsIcon.style.transform = 'translateX(0)'
})

const isSettingsVisible = ref(false)
</script>

<style lang="scss" scoped></style>
