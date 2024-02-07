<template>
	<section class="about-me max-w-[1200px] container p-[16px] pt-[32px]">
		<h2
			class="text-[28px] text-center underline underline-offset-3 translate-x-[100px] opacity-0 transition-transform-opacity duration-500 md:no-underline md:uppercase md:tracking-[2px] md:text-[36px] md:font-semibold lg:my-[32px]"
			id="about-me"
		>
			{{ $t('about-me') }}
		</h2>

		<div class="details flex flex-col md:flex-row md:items-center md:justify-between md:gap-[24px]">
			<div class="text md:w-[40%] md:order-2 lg:w-1/2 xl:text-[20px]">
				<p class="text mt-[32px] translate-x-[100px] opacity-0 transition-transform-opacity duration-500">
					{{ $t('about-me-first-paragraph') }}
				</p>
				<p class="text mt-[16px] translate-x-[100px] opacity-0 transition-transform-opacity duration-500">
					{{ $t('about-me-second-paragraph') }}
				</p>
				<p class="text mt-[16px] translate-x-[100px] opacity-0 transition-transform-opacity duration-500">
					{{ $t('about-me-third-paragraph') }}
				</p>
			</div>

			<div
				class="profile-img my-[50px] w-[300px] h-[300px] overflow-hidden bg-gray-400 dark:bg-gray-500 mx-auto rounded-full shadow-[0_0px_15px_14px_rgba(156,163,175)] dark:shadow-[0_0px_15px_14px_rgba(107,114,128)] translate-x-[100px] opacity-0 transition-transform-opacity duration-500 md:order-1 md:mx-[24px] md:my-0 md:w-[350px] md:h-[350px] lg:w-[370px] lg:h-[370px] lg:my-[24px] md:-translate-x-[100px] xl:w-[450px] xl:h-[450px]"
			>
				<img src="/img/about-me.png" alt="" />
			</div>
		</div>
	</section>
</template>

<script setup>
onMounted(() => {
	const aboutMe = document.querySelector('.about-me')
	const title = aboutMe.querySelector('h2')
	const allParagraphs = aboutMe.querySelectorAll('p')
	const profileImg = aboutMe.querySelector('.profile-img')

	document.addEventListener('scroll', () => {
		if (title.offsetTop <= window.scrollY + window.innerHeight - 150) {
			title.style.opacity = '1'
			title.style.transform = 'translateX(0)'
		}

		allParagraphs.forEach(el => {
			if (el.offsetTop <= window.scrollY + window.innerHeight - 150) {
				el.style.opacity = '1'
				el.style.transform = 'translateX(0)'
			}
		})

		if (profileImg.offsetTop <= window.scrollY + window.innerHeight - 150) {
			profileImg.style.opacity = '1'
			profileImg.style.transform = 'translateX(0)'
		}
	})
})
</script>

<style lang="scss" scoped></style>
