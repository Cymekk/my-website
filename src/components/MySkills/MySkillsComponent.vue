<template>
	<section class="my-skills" id="skills">
		<h2 class="my-skills__title">Stack</h2>

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
		</div>
	</section>
</template>
<script>
export default {}
</script>
<style lang="scss">
.my-skills {
	&__title {
		margin: 2em 0;
		color: #fff;
		font-size: 2rem;
		text-align: center;
	}

	&__container {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		flex-wrap: wrap;
		gap: 2em;
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
