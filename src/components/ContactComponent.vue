<template>
	<section class="contact" id="contact">
		<h2 class="contact__title">Contact</h2>
		<div class="box first">
			<i class="fa-solid fa-phone"></i>
			<p>518 761 006</p>
		</div>
		<div class="box">
			<i class="fa-solid fa-at"></i>
			<p>cymerman944@gmail.com</p>
		</div>
		<div class="box">
			<i class="fa-brands fa-linkedin"></i>
			<p>https://www.linkedin.com/in/marcin-cymerman-7703b61b3/</p>
		</div>
	</section>
</template>
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
	const handleObserver = () => {
		const contact = document.querySelector('.contact')
		const currentSection = window.scrollY

		if (contact.offsetTop <= currentSection + window.innerHeight - 150) {
			contact.classList.add('active')
		} else {
			contact.classList.remove('active')
		}
	}

	document.addEventListener('scroll', handleObserver)
})
</script>
<style lang="scss">
.contact {
	padding: 4rem 0 4rem 0;
	background-color: #333;
	transition: opacity 0.5s ease-in;

	&__title {
		color: #fff;
		font-size: 2rem;
		text-align: center;
	}

	.box {
		display: flex;
		align-items: center;

		margin: 0 auto;
		padding: 1em;
		max-width: 1200px;

		color: #fff;
		i {
			font-size: 1.5rem;
		}

		p {
			font-size: 1rem;
			padding-left: 10px;
		}
	}

	.first {
		margin-top: 2rem;
	}
}

.active {
	opacity: 1;
}
</style>
