<template>
	<section class="contact" id="contact">
		<h2 class="contact__title">Contact</h2>
		<div class="box">
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
<script>
export default {}
</script>
<style lang="scss">
.contact {
	&__title {
		margin: 2em;
		color: #fff;
		font-size: 2rem;
		text-align: center;
	}

	.box {
		display: flex;
		align-items: center;
		padding: 1em;

		color: #fff;
		i {
			font-size: 1.5rem;
		}

		p {
			font-size: 1rem;
			padding-left: 10px;
		}
	}
}
</style>
