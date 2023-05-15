<template>
	<router-view />
	<button v-if="isVisible" class="scroll-to-top-btn" @click="scrollToTop"></button>
</template>

<script>
import { ref } from 'vue'

export default {
	setup() {
		let isVisible = ref(false)

		function scrollToTop() {
			window.scrollTo(0, 0)
		}

		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 400) {
				isVisible.value = true
			} else {
				isVisible.value = false
			}
		})

		return { isVisible, scrollToTop }
	},
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	scroll-behavior: smooth;
	scroll-padding-top: 50px;
}

body {
	position: relative;
	width: 100%;
	min-height: 100svh;
	background-image: url('./assets/coding-small.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	font-size: 62.5%;
	font-family: 'Roboto', sans-serif;

	&::after {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100svh;
		background-color: rgba(0, 0, 0, 0.65);
		z-index: -1;
	}

	.scroll-to-top-btn {
		position: fixed;
		right: 0;
		bottom: 25%;
		transform: translateY(-50%);
		width: 40px;
		height: 40px;
		background: none;
		border: none;
		outline: none;
		background-image: url('./assets/chevron-up.svg');
		background-repeat: no-repeat;
		background-position: center;
		cursor: pointer;
	}
}

.wrapper {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 2em;
}

@media (min-width: 576px) {
	body {
		.scroll-to-top-btn {
			right: 10px;
		}
	}
}

@media (min-width: 768px) {
	body {
		.scroll-to-top-btn {
			right: 50px;
		}
	}
}

@media (min-width: 992px) {
	body {
		background-image: url('./assets/coding-big.jpg');
		.scroll-to-top-btn {
			right: 50px;
		}
	}
}
</style>
