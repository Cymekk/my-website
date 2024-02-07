<template>
	<section class="my-projects container max-w-[1200px] p-[16px] pt-[32px]">
		<h2
			class="text-[28px] lg:text-[32px] text-center underline underline-offset-3 translate-x-[100px] opacity-0 transition-transform-opacity duration-500 md:no-underline md:uppercase md:tracking-[2px] md:text-[36px] md:font-semibold lg:my-[32px]"
			id="projects"
		>
			{{ $t('projects') }}
		</h2>
		<!-- NoteApp -->
		<div
			class="project-box border-[1px] border-gray-700 dark:border-gray-200 rounded-md mt-[32px] p-[16px] translate-x-[100px] opacity-0 transition-transform-opacity duration-500 md:border-0"
		>
			<h3 class="text-center text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
				{{ $t('firstProject.projectTitle') }}
			</h3>
			<div class="project-details md:flex md:items-center md:justify-between">
				<div class="text md:w-1/2 lg:text-[18px]">
					<p class="first my-[16px]">
						{{ $t('firstProject.projectFirstParagraph') }}
					</p>
					<p class="second">{{ $t('firstProject.projectSecondParagraph') }}</p>
					<ul>
						<li>
							<span class="font-semibold" v-if="locale === 'en-US'">username:</span>
							<span class="font-semibold" v-else>login:</span> test@test.com
						</li>
						<li>
							<span class="font-semibold" v-if="locale === 'en-US'">password:</span>
							<span class="font-semibold" v-else>hasło:</span>
							test123
						</li>
					</ul>
					<p class="third my-[16px]">{{ $t('firstProject.projectStack') }}</p>
				</div>

				<div
					class="galerry relative w-[300px] h-[150px] lg:w-[400px] lg:h-[170px] mx-auto md:mx-0 rounded-md overflow-hidden"
				>
					<button
						class="bg-gray-200 dark:bg-gray-700 rounded-full absolute z-10 top-1/2 -translate-y-1/2 left-0 p-[5px]"
						@click="decreaseNoteAppGalleryIndex"
					>
						<Icon name="material-symbols:keyboard-double-arrow-left" size="1.5em" />
					</button>
					<button
						class="bg-gray-200 dark:bg-gray-700 rounded-full absolute z-10 top-1/2 -translate-y-1/2 right-0 p-[5px]"
						@click="increaseNoteAppGalleryIndex"
					>
						<Icon name="material-symbols:keyboard-double-arrow-right" size="1.5em" />
					</button>

					<div class="img-box absolute inset-0" v-for="(img, index) in NoteAppImages" :key="index">
						<ClientOnly>
							<Transition mode="out-in">
								<img :src="img" class="h-full w-full" v-if="currentNoteAppImg == index + 1" />
							</Transition>
						</ClientOnly>
					</div>
				</div>
			</div>

			<div class="buttons flex justify-center space-x-[12px] mt-[16px] md:mt-0">
				<NuxtLink to="https://github.com/Cymekk/NoteApp" target="_blank">
					<button
						class="py-2 px-4 rounded-md border-gray-700 dark:border-gray-200 border-[1px] flex items-center hover:bg-gray-700 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-700 transition-colors duration-500"
					>
						<Icon name="grommet-icons:github" size="1.5em" />
						<span class="ml-[6px]">Github</span>
					</button>
				</NuxtLink>

				<NuxtLink to="https://noteapp-d9faf.web.app/#/auth" target="_blank">
					<button
						class="py-2 px-4 rounded-md border-gray-700 dark:border-gray-200 border-[1px] flex items-center hover:bg-gray-700 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-700 transition-colors duration-500"
					>
						<Icon name="material-symbols-light:live-tv-outline-rounded" size="1.5em" />
						<span class="ml-[6px]">Live</span>
					</button>
				</NuxtLink>
			</div>
		</div>

		<!-- Calories Calculator -->
		<div
			class="project-box border-[1px] md:border-0 border-gray-700 dark:border-gray-200 rounded-md mt-[32px] p-[16px] translate-x-[100px] md:-translate-x-[100px] opacity-0 transition-transform-opacity duration-500"
		>
			<h3 class="text-center text-[20px] lg:text-[28px] font-semibold md:text-[24px]">
				{{ $t('secondProject.projectTitle') }}
			</h3>

			<div class="project-details md:flex md:items-center md:justify-between lg:mt-[32px]">
				<div class="text md:w-1/2 md:order-2 lg:text-[18px]">
					<p class="first my-[16px]">
						{{ $t('secondProject.projectFirstParagraph') }}
					</p>
					<p class="second">{{ $t('secondProject.projectSecondParagraph') }}</p>
					<ul>
						<li>
							<span class="font-semibold" v-if="locale === 'en-US'">username:</span>
							<span class="font-semibold" v-else>login:</span> test@test.com
						</li>
						<li>
							<span class="font-semibold" v-if="locale === 'en-US'">password:</span>
							<span class="font-semibold" v-else>hasło:</span>
							test123
						</li>
					</ul>
					<p class="third my-[16px]">{{ $t('secondProject.projectStack') }}</p>
				</div>

				<div
					class="galerry relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] mx-auto md:mx-0 rounded-md overflow-hidden"
				>
					<button
						class="bg-gray-200 dark:bg-gray-700 rounded-full absolute z-10 top-1/2 -translate-y-1/2 left-0 p-[5px]"
						@click="decreaseCaloriesCalcGalleryIndex"
					>
						<Icon name="material-symbols:keyboard-double-arrow-left" size="1.5em" />
					</button>
					<button
						class="bg-gray-200 dark:bg-gray-700 rounded-full absolute z-10 top-1/2 -translate-y-1/2 right-0 p-[5px]"
						@click="increaseCaloriesCalcGalleryIndex"
					>
						<Icon name="material-symbols:keyboard-double-arrow-right" size="1.5em" />
					</button>

					<div class="img-box absolute inset-0" v-for="(img, index) in CaloriesCalculatorApp" :key="index">
						<ClientOnly>
							<Transition mode="out-in">
								<img :src="img" class="h-full w-full" v-if="currentCaloriesCalculatorImg == index + 1" />
							</Transition>
						</ClientOnly>
					</div>
				</div>
			</div>

			<div class="buttons flex justify-center space-x-[12px] mt-[16px]">
				<NuxtLink to="https://github.com/Cymekk/KalkulatoKalorii" target="_blank">
					<button
						class="py-2 px-4 rounded-md border-gray-700 dark:border-gray-200 border-[1px] flex items-center hover:bg-gray-700 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-700 transition-colors duration-500"
					>
						<Icon name="grommet-icons:github" size="1.5em" />
						<span class="ml-[6px]">Github</span>
					</button>
				</NuxtLink>

				<NuxtLink to="https://kalkulatorkalorii-7b44e.web.app/" target="_blank">
					<button
						class="py-2 px-4 rounded-md border-gray-700 dark:border-gray-200 border-[1px] flex items-center hover:bg-gray-700 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-700 transition-colors duration-500"
					>
						<Icon name="material-symbols-light:live-tv-outline-rounded" size="1.5em" />
						<span class="ml-[6px]">Live</span>
					</button>
				</NuxtLink>
			</div>
		</div>

		<!-- Running Diary -->
		<div
			class="project-box border-[1px] md:border-0 border-gray-700 dark:border-gray-200 rounded-md mt-[32px] p-[16px] translate-x-[100px] opacity-0 transition-transform-opacity duration-500"
		>
			<h3 class="text-center text-[20px] lg:text-[28px] font-semibold md:text-[24px]">
				{{ $t('thirdProject.projectTitle') }}
			</h3>

			<div class="project-details md:flex md:items-center md:justify-between">
				<div class="text md:w-1/2 lg:text-[18px]">
					<p class="first my-[16px]">
						{{ $t('thirdProject.projectFirstParagraph') }}
					</p>
					<p class="second">{{ $t('thirdProject.projectSecondParagraph') }}</p>
					<ul>
						<li>
							<span class="font-semibold" v-if="locale === 'en-US'">username:</span>
							<span class="font-semibold" v-else>login:</span> test@test.com
						</li>
						<li>
							<span class="font-semibold" v-if="locale === 'en-US'">password:</span>
							<span class="font-semibold" v-else>hasło:</span>
							test123
						</li>
					</ul>
					<p class="third my-[16px]">{{ $t('thirdProject.projectStack') }}</p>
				</div>

				<div
					class="galerry relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] lg:mt-[32px] mx-auto md:mx-0 rounded-md overflow-hidden"
				>
					<button
						class="bg-gray-200 dark:bg-gray-700 rounded-full absolute z-10 top-1/2 -translate-y-1/2 left-0 p-[5px]"
						@click="decreaseRunningDiaryGalleryIndex"
					>
						<Icon name="material-symbols:keyboard-double-arrow-left" size="1.5em" />
					</button>
					<button
						class="bg-gray-200 dark:bg-gray-700 rounded-full absolute z-10 top-1/2 -translate-y-1/2 right-0 p-[5px]"
						@click="increaseRunningDiaryGalleryIndex"
					>
						<Icon name="material-symbols:keyboard-double-arrow-right" size="1.5em" />
					</button>

					<div class="img-box absolute inset-0" v-for="(img, index) in RunningDiaryApp" :key="index">
						<ClientOnly>
							<Transition mode="out-in">
								<img :src="img" class="h-full w-full" v-if="currentRunningDiaryImg == index + 1" />
							</Transition>
						</ClientOnly>
					</div>
				</div>
			</div>

			<div class="buttons flex justify-center space-x-[12px] mt-[16px]">
				<NuxtLink to="https://github.com/Cymekk/Running-Diary" target="_blank">
					<button
						class="py-2 px-4 rounded-md border-gray-700 dark:border-gray-200 border-[1px] flex items-center hover:bg-gray-700 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-700 transition-colors duration-500"
					>
						<Icon name="grommet-icons:github" size="1.5em" />
						<span class="ml-[6px]">Github</span>
					</button>
				</NuxtLink>

				<NuxtLink to="https://running-diary-38ae0.web.app/" target="_blank">
					<button
						class="py-2 px-4 rounded-md border-gray-700 dark:border-gray-200 border-[1px] flex items-center hover:bg-gray-700 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-700 transition-colors duration-500"
					>
						<Icon name="material-symbols-light:live-tv-outline-rounded" size="1.5em" />
						<span class="ml-[6px]">Live</span>
					</button>
				</NuxtLink>
			</div>
		</div>
	</section>
</template>

<script setup>
const { locale } = useI18n()

onMounted(() => {
	const myProjects = document.querySelector('.my-projects')
	const title = myProjects.querySelector('h2')
	const projectBox = myProjects.querySelectorAll('.project-box')

	document.addEventListener('scroll', () => {
		if (title.offsetTop <= window.scrollY + window.innerHeight - 150) {
			title.style.opacity = '1'
			title.style.transform = 'translateX(0)'
		}

		projectBox.forEach(el => {
			if (el.offsetTop <= window.scrollY + window.innerHeight - 150) {
				el.style.opacity = '1'
				el.style.transform = 'translateX(0)'
			}
		})
	})
})

//stuffs related to noteApp Gallery
const NoteAppImages = [
	'./NoteAppImages/1.jpg',
	'./NoteAppImages/2.jpg',
	'./NoteAppImages/3.jpg',
	'./NoteAppImages/4.jpg',
	'./NoteAppImages/5.jpg',
]
const currentNoteAppImg = ref(1)
const decreaseNoteAppGalleryIndex = () => {
	if (currentNoteAppImg.value === 1) {
		currentNoteAppImg.value = NoteAppImages.length
	} else {
		currentNoteAppImg.value--
	}
}

const increaseNoteAppGalleryIndex = () => {
	if (currentNoteAppImg.value === NoteAppImages.length) {
		currentNoteAppImg.value = 1
	} else {
		currentNoteAppImg.value++
	}
}

//stuffs related to calories calculator
const CaloriesCalculatorApp = [
	'./CaloriesCalculator/1.jpg',
	'./CaloriesCalculator/2.jpg',
	'./CaloriesCalculator/3.jpg',
	'./CaloriesCalculator/4.jpg',
	'./CaloriesCalculator/5.jpg',
	'./CaloriesCalculator/6.jpg',
	'./CaloriesCalculator/7.jpg',
	'./CaloriesCalculator/8.jpg',
	'./CaloriesCalculator/9.jpg',
	'./CaloriesCalculator/10.jpg',
]

const currentCaloriesCalculatorImg = ref(1)
const decreaseCaloriesCalcGalleryIndex = () => {
	if (currentCaloriesCalculatorImg.value === 1) {
		currentCaloriesCalculatorImg.value = CaloriesCalculatorApp.length
	} else {
		currentCaloriesCalculatorImg.value--
	}
}

const increaseCaloriesCalcGalleryIndex = () => {
	if (currentCaloriesCalculatorImg.value === CaloriesCalculatorApp.length) {
		currentCaloriesCalculatorImg.value = 1
	} else {
		currentCaloriesCalculatorImg.value++
	}
}

//stuffs related to Running Diary
const RunningDiaryApp = [
	'./RunningDiary/1.jpg',
	'./RunningDiary/2.jpg',
	'./RunningDiary/3.jpg',
	'./RunningDiary/4.jpg',
	'./RunningDiary/5.jpg',
	'./RunningDiary/6.jpg',
	'./RunningDiary/7.jpg',
	'./RunningDiary/8.jpg',
	'./RunningDiary/9.jpg',
	'./RunningDiary/10.jpg',
	'./RunningDiary/11.jpg',
	'./RunningDiary/12.jpg',
	'./RunningDiary/13.jpg',
]

const currentRunningDiaryImg = ref(1)

const decreaseRunningDiaryGalleryIndex = () => {
	if (currentRunningDiaryImg.value === 1) {
		currentRunningDiaryImg.value = RunningDiaryApp.length
	} else {
		currentRunningDiaryImg.value--
	}
}

const increaseRunningDiaryGalleryIndex = () => {
	if (currentRunningDiaryImg.value === RunningDiaryApp.length) {
		currentRunningDiaryImg.value = 1
	} else {
		currentRunningDiaryImg.value++
	}
}
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.7s ease;
}

.v-enter-from {
	opacity: 0;
}
.v-enter-to {
	opacity: 1;
}

.v-leave-to {
	opacity: 0;
}
.v-leave-from {
	opacity: 1;
}
</style>
