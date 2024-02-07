<template>
	<header class="h-[100svh] bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 overflow-hidden">
		<nav class="flex container max-w-[1200px] h-[10svh] justify-between items-center p-[12px] overflow-x-hidden">
			<LogoComponent />
			<BurgerBtnComponent
				v-model="isMobileMenuVisible"
				@show-Menu="isMobileMenuVisible = !isMobileMenuVisible"
				class="lg:hidden"
			/>
			<DesktopNavigationComponent />
		</nav>
		<div
			class="container max-w-[1200px] h-[90svh] p-[16px] flex flex-col justify-center md:flex-row md:items-center md:justify-between md:gap-[32px]"
		>
			<div class="details">
				<h1 class="text-[32px] md:text-[36px] font-semibold lg:text-[40px] xl:text-[46px]">
					<span class="span">M</span>
					<span class="span">a</span>
					<span class="span">r</span>
					<span class="span">c</span>
					<span class="span">i</span>
					<span class="span mr-[6px]">n</span>
					<span class="span">C</span>
					<span class="span">y</span>
					<span class="span">m</span>
					<span class="span">e</span>
					<span class="span">r</span>
					<span class="span">m</span>
					<span class="span">a</span>
					<span class="span">n</span>
				</h1>

				<h2 class="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px]">
					<span class="span">F</span>
					<span class="span">r</span>
					<span class="span">o</span>
					<span class="span">n</span>
					<span class="span">t</span>
					<span class="span">e</span>
					<span class="span">n</span>
					<span class="span mr-[6px]">d</span>
					<span class="span">D</span>
					<span class="span">e</span>
					<span class="span">v</span>
					<span class="span">e</span>
					<span class="span">l</span>
					<span class="span">o</span>
					<span class="span">p</span>
					<span class="span">e</span>
					<span class="span">r</span>
				</h2>

				<NuxtLink :to="{ path: route.path, hash: '#contact' }">
					<button
						class="opacity-0 mt-[16px] relative rounded-md border-2 p-[5px] px-[10px] border-gray-700 dark:border-gray-200 font-semibold hover:bg-gray-700 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-700 transition-opacity-colors duration-500 md:text-[22px]"
					>
						<p>{{ $t('contact-me-btn') }}</p>
					</button></NuxtLink
				>
				<div class="buttons mt-[8px]">
					<NuxtLink to="https://github.com/Cymekk" target="_blank">
						<button
							class="opacity-0 rounded-md border-2 p-[5px] border-gray-700 dark:border-gray-200 mr-[8px] hover:bg-gray-700 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-700 transition-opacity-colors duration-500"
						>
							<Icon name="grommet-icons:github" size="1.5em" class="md:text-[1.3em]" />
						</button>
					</NuxtLink>

					<NuxtLink to="https://www.linkedin.com/in/marcin-cymerman-7703b61b3/" target="_blank">
						<button
							class="opacity-0 rounded-md border-2 p-[5px] border-gray-700 dark:border-gray-200 hover:bg-gray-700 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-700 transition-opacity-colors duration-500"
						>
							<Icon name="uil:linkedin-alt" size="1.5em" class="md:text-[1.3em]" />
						</button>
					</NuxtLink>
				</div>
			</div>

			<div
				class="profile-img mt-[50px] w-[300px] h-[300px] overflow-hidden bg-gray-400 dark:bg-gray-500 mx-auto rounded-full shadow-[0_0px_15px_8px_rgba(156,163,175)] dark:shadow-[0_0px_15px_8px_rgba(107,114,128)] opacity-0 translate-x-[100%] transition-transform-opacity duration-700 md:mx-0 md:w-[370px] md:h-[370px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]"
			>
				<img src="../public/img/dyplom.png" alt="" />
			</div>
		</div>
		<MobileMenuComponent v-model="isMobileMenuVisible" @wheel.prevent @touchmove.prevent @scroll.prevent />
	</header>
</template>

<script setup>
const route = useRoute()
const colorMode = useColorMode()
const isMobileMenuVisible = ref(false)
let allSpans

onMounted(() => {
	allSpans = document.querySelector('.details').querySelectorAll('span')
	const logo = document.querySelector('.logo')

	allSpans.forEach((el, index) => {
		setTimeout(() => {
			el.style.opacity = '1'
		}, (index + 1) * 50)
	})
	;(logo.style.opacity = '1'), (logo.style.transform = 'translateX(0)')

	const allSpansLength = allSpans.length
	const allBtns = document.querySelector('.details').querySelectorAll('button')

	allBtns.forEach((el, index) => {
		setTimeout(() => {
			el.style.opacity = '1'
		}, (index + 1) * 300 + allSpansLength * 50)
	})

	const profileImg = document.querySelector('.profile-img')

	setTimeout(() => {
		profileImg.style.opacity = '1'
		profileImg.style.transform = 'translateX(0)'
	}, 2000)
})

</script>

<style lang="scss" scoped>
.span {
	@apply opacity-0 transition-opacity duration-500;
}
</style>
