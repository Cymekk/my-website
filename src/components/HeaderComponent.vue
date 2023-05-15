<template>
	<header class="header">
		<div class="header__img">
			<img src="../assets/dyplom.png" alt="" />
		</div>

		<div class="header__text">
			<h2>Hello, my name is <span>Marcin</span></h2>
			<p>
				I'm currently working as a Windows Server Administrator but I'm looking for new challanges in my carrer. Below
				you can find my portoflio and stack which I have. Enjoy and feel free to contact me
			</p>
		</div>
	</header>
</template>
<script>
export default {
	name: 'HeaderComponent',
}
</script>
<style lang="scss">
.header {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	min-height: 100svh;
	display: flex;
	flex-direction: column;
	align-items: center;

	&__img {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;

		img {
			width: 100%;
			display: block;
		}
	}

	&__text {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		padding: 2em;
		height: 100%;
		width: 100%;
		color: #fff;
		font-size: 1.1rem;
		text-align: justify;

		h2 {
			font-size: 1.5rem;

			span {
				color: greenyellow;
			}
		}

		p {
			margin-top: 1em;
		}
	}
}

@media (min-width: 576px) {
	.header {
		&__img {
			width: 80%;
		}

		&__text {
			padding: 0;
			width: 80%;

			h2 {
				margin-top: 1em;
			}
		}
	}
}

@media (min-width: 768px) {
	.header {
		padding: 2em;
		flex-direction: row;
		justify-content: space-between;
		&__img {
			width: 55%;
		}

		&__text {
			width: 40%;
			padding: 0;

			h2 {
				margin-top: 1em;
			}
		}
	}
}
@media (min-width: 992px) {
	.header {
		height: 90svh;
		padding: 4em;
		flex-direction: row;
		justify-content: space-between;
		&__img {
			width: 50%;
		}

		&__text {
			width: 45%;
			padding: 0;
			justify-content: center;
			h2 {
				font-size: 1.8rem;
			}

			p {
				font-size: 1.2rem;
			}
		}
	}
}
@media (min-width: 992px) {
	.header {
		justify-content: space-evenly;
		&__img {
			width: 45%;
		}

		&__text {
			width: 45%;
			padding: 0;
			justify-content: center;
			h2 {
				font-size: 1.8rem;
			}

			p {
				font-size: 1.2rem;
			}
		}
	}
}
</style>
