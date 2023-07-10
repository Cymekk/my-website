<template>
	<section class="my-skills" id="skills">
		<h2 class="my-skills__title">My Stack</h2>

		<div class="my-skills__container">
			<div class="box">
				<i class="fa-brands fa-html5"></i>
				<p>HTML</p>
			</div>
			<div class="box">
				<i class="fa-brands fa-css3-alt"></i>
				<p>CSS</p>
			</div>
			<div class="box">
				<i class="fa-brands fa-sass"></i>
				<p>SASS/SCSS</p>
			</div>
			<div class="box">
				<i class="fa-brands fa-github"></i>
				<p>GIT</p>
			</div>
			<div class="box">
				<i class="fa-brands fa-js"></i>
				<p>JavaScript</p>
			</div>
			<div class="box">
				<i class="fa-brands fa-vuejs"></i>
				<p>Vue</p>
			</div>
			<div class="box">
				<i class="fa-solid fa-mobile-screen"></i>
				<p>Mobile First</p>
			</div>
			<div class="box">
				<i class="fa-solid fa-globe"></i>
				<p>SEO</p>
			</div>
			<div class="box">
				<img src="../assets/firebase.png" alt="firebase icon" />
				<p>Firebase</p>
			</div>
		</div>
	</section>
</template>
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
	const handleObserver = () => {
		const stack = document.querySelector('.my-skills')
		const currentSection = window.scrollY

		if (stack.offsetTop <= currentSection + window.innerHeight - 250) {
			stack.classList.add('active')
		} else {
			stack.classList.remove('active')
		}
	}

	document.addEventListener('scroll', handleObserver)
})
</script>
<style lang="scss">
.my-skills {
	padding: 4rem 2rem;
	background-color: #454545;

	&__title {
		opacity: 0;
		color: #fff;
		font-size: 2rem;
		text-align: center;
		transition: opacity 0.5s ease-in;
	}

	&__container {
		opacity: 0;
		max-width: 1200px;
		margin: 4rem auto 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		flex-wrap: wrap;
		gap: 2em;
		transition: opacity 0.5s ease-in;
		.box {
			width: 40%;
			padding: 2em;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			color: #fff;
			border: 2px solid #fff;
			border-radius: 10px;

			i {
				font-size: 7rem;
			}

			.fa-sass {
				font-size: 5.5rem;
			}

			p {
				margin-top: 0.5em;
				font-size: 1.2rem;
				font-weight: bold;
				text-align: center;
			}

			img {
				width: 80%;
			}
		}
	}
}

.active {
	.my-skills__title,
	.my-skills__container {
		opacity: 1;
	}
}

@media (min-width: 576px) {
	.my-skills {
		&__container {
			.box {
				img {
					width: 50%;
				}
			}
		}
	}
}

@media (min-width: 768px) {
	.my-skills {
		&__container {
			justify-content: center;
			gap: 2em;
			.box {
				width: 35%;

				img {
					width: 40%;
				}
			}
		}
	}
}
@media (min-width: 992px) {
	.my-skills {
		&__title {
			font-size: 2.2rem;
		}
		&__container {
			justify-content: center;
			gap: 2em;
			.box {
				width: 30%;

				img {
					width: 35%;
				}
			}
		}
	}
}
@media (min-width: 1200px) {
	.my-skills {
		&__title {
			font-size: 2.4rem;
		}
		&__container {
			justify-content: center;
			gap: 2em;
			.box {
				width: 25%;
			}
		}
	}
}
</style>
