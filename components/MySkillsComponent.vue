<template>
	<section class="my-skills container p-[16px] max-w-[1200px]">
		<h2
			class="text-[28px] text-center underline underline-offset-3 translate-x-[100px] opacity-0 transition-transform-opacity duration-500 md:no-underline md:uppercase md:tracking-[2px] md:text-[36px] md:font-semibold lg:my-[32px]"
			id="stack"
		>
			{{ $t('stack') }}
		</h2>
		<div class="skills-container flex flex-wrap mt-[32px] justify-center gap-[16px] overflow-hidden py-[16px]">
			<div
				class="skill-card group relative border-2 border-gray-700 dark:border-gray-200 p-[10px] rounded-lg overflow-hidden"
			>
				<Icon name="icon-park-outline:html-five" size="6em" class="lg:text-[1.5em]" />
				<div
					class="description flex justify-center items-center absolute inset-0 bg-gray-700/80 dark:bg-gray-300/70 translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform-opacity duration-500"
				>
					<p class="text-gray-200 dark:text-gray-700 font-semibold text-[24px]">HTML</p>
				</div>
			</div>

			<div
				class="skill-card group relative border-2 border-gray-700 dark:border-gray-200 p-[10px] rounded-lg overflow-hidden"
			>
				<Icon name="ion:logo-css3" size="6em" class="lg:text-[1.5em]" />
				<div
					class="description flex justify-center items-center absolute inset-0 bg-gray-700/80 dark:bg-gray-300/70 translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform-opacity duration-500"
				>
					<p class="text-gray-200 dark:text-gray-700 font-semibold text-[24px]">CSS</p>
				</div>
			</div>
			<div
				class="skill-card group relative border-2 border-gray-700 dark:border-gray-200 p-[10px] rounded-lg overflow-hidden"
			>
				<Icon name="ion:logo-sass" size="6em" class="lg:text-[1.5em]" />
				<div
					class="description flex justify-center items-center absolute inset-0 bg-gray-700/80 dark:bg-gray-300/70 translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform-opacity duration-500"
				>
					<p class="text-gray-200 dark:text-gray-700 font-semibold text-[24px]">SASS</p>
				</div>
			</div>
			<div
				class="skill-card group relative border-2 border-gray-700 dark:border-gray-200 p-[10px] rounded-lg overflow-hidden"
			>
				<Icon name="teenyicons:tailwind-solid" size="6em" class="lg:text-[1.5em]" />
				<div
					class="description flex justify-center items-center absolute inset-0 bg-gray-700/80 dark:bg-gray-300/70 translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform-opacity duration-500"
				>
					<p class="text-gray-200 dark:text-gray-700 font-semibold text-[24px]">Tailwind</p>
				</div>
			</div>
			<div
				class="skill-card group relative border-2 border-gray-700 dark:border-gray-200 p-[10px] rounded-lg overflow-hidden"
			>
				<Icon name="mdi:language-javascript" size="6em" class="lg:text-[1.5em]" />
				<div
					class="description flex justify-center items-center absolute inset-0 bg-gray-700/80 dark:bg-gray-300/70 translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform-opacity duration-500"
				>
					<p class="text-gray-200 dark:text-gray-700 font-semibold text-[24px]">JavaScript</p>
				</div>
			</div>
			<div
				class="skill-card group relative border-2 border-gray-700 dark:border-gray-200 p-[10px] rounded-lg overflow-hidden"
			>
				<Icon name="ri:vuejs-fill" size="6em" class="lg:text-[1.5em]" />
				<div
					class="description flex justify-center items-center absolute inset-0 bg-gray-700/80 dark:bg-gray-300/70 translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform-opacity duration-500"
				>
					<p class="text-gray-200 dark:text-gray-700 font-semibold text-[24px]">VueJS</p>
				</div>
			</div>
			<div
				class="skill-card group relative border-2 border-gray-700 dark:border-gray-200 p-[10px] rounded-lg overflow-hidden"
			>
				<Icon name="ph:figma-logo-bold" size="6em" class="lg:text-[1.5em]" />
				<div
					class="description flex justify-center items-center absolute inset-0 bg-gray-700/80 dark:bg-gray-300/70 translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform-opacity duration-500"
				>
					<p class="text-gray-200 dark:text-gray-700 font-semibold text-[24px]">Figma</p>
				</div>
			</div>
			<div
				class="skill-card group relative border-2 border-gray-700 dark:border-gray-200 p-[10px] rounded-lg overflow-hidden"
			>
				<Icon name="ion:logo-firebase" size="6em" class="lg:text-[1.5em]" />
				<div
					class="description flex justify-center items-center absolute inset-0 bg-gray-700/80 dark:bg-gray-300/70 translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform-opacity duration-500"
				>
					<p class="text-gray-200 dark:text-gray-700 font-semibold text-[24px]">Firebase</p>
				</div>
			</div>
			<div
				class="skill-card group relative border-2 border-gray-700 dark:border-gray-200 p-[10px] rounded-lg overflow-hidden"
			>
				<Icon name="teenyicons:azure-solid" size="6em" class="lg:text-[1.5em]" />
				<div
					class="description flex justify-center items-center absolute inset-0 bg-gray-700/80 dark:bg-gray-300/70 translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform-opacity duration-500"
				>
					<p class="text-gray-200 dark:text-gray-700 font-semibold text-[24px]">Azure</p>
				</div>
			</div>
			<div
				class="skill-card group relative border-2 border-gray-700 dark:border-gray-200 p-[10px] rounded-lg overflow-hidden"
			>
				<Icon name="majesticons:ux-circle" size="6em" class="lg:text-[1.5em]" />
				<div
					class="description flex justify-center items-center absolute inset-0 bg-gray-700/80 dark:bg-gray-300/70 translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform-opacity duration-500"
				>
					<p class="text-gray-200 dark:text-gray-700 font-semibold text-[24px]">UI/UX</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
onMounted(() => {
	const mySkills = document.querySelector('.my-skills')
	const title = mySkills.querySelector('h2')
	const skillCards = mySkills.querySelectorAll('.skill-card')

	document.addEventListener('scroll', () => {
		if (title.offsetTop <= window.scrollY + window.innerHeight - 150) {
			title.style.opacity = '1'
			title.style.transform = 'translateX(0)'
		}

		if (window.innerWidth < 768) {
			skillCards.forEach(el => {
				if (el.offsetTop <= window.scrollY + window.innerHeight - 150) {
					el.classList.add('animation')
				}
			})
		} else {
			if (skillCards[0].offsetTop <= window.scrollY + window.innerHeight - 150) {
				skillCards.forEach((el, index) => {
					setTimeout(() => {
						el.classList.add('animation')
					}, (index + 1) * 200)
				})
			}
		}
	})
})
</script>

<style lang="scss" scoped>
.skill-card {
	@apply opacity-0;
}

.animation {
	animation: showCard 1s forwards;
}

@keyframes showCard {
	0% {
		opacity: 0;
		transform: scale(0.9);
	}

	50% {
		opacity: 0.5;
		transform: scale(1.1);
	}

	100% {
		opacity: 1;
		transform: scale(1);
	}
}
</style>
