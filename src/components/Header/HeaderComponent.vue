<template>
	<header class="header">
		<MobileNavComponent
			@show-mobile-nav="handleNav"
			v-model="isVisible"
			@wheel.prevent
			@touchmove.prevent
			@scroll.prevent
		/>
		<NavbarComponent @show-mobile-nav="handleNav" v-model="isVisible" />
		<div class="header__container">
			<div class="header__container--img">
				<img src="../../assets/dyplom.png" alt="" />
			</div>

			<div class="header__container--text">
				<h2>Hello, my name is <span>Marcin</span></h2>
				<p>
					I'm currently working as a Windows Server Administrator but I'm looking for new challanges in my carrer. Below
					you can find my portoflio and stack which I have. Enjoy and feel free to contact me.
				</p>
			</div>
		</div>
	</header>
</template>
<script setup>
import { ref } from 'vue'
import MobileNavComponent from '@/components/Header/MobileNavComponent.vue'
import NavbarComponent from '@/components/Header/NavbarComponent.vue'

let isVisible = ref(false)

function handleNav() {
	if (isVisible.value == false) {
		isVisible.value = true
	} else {
		isVisible.value = false
	}
}
</script>
<style lang="scss">
.header {
	position: relative;
	margin: 0 auto;
	height: 100svh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #ddd;
	padding: 2em;
	background-image: url('../../assets/coding-small.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	overflow: hidden;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100svh;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 0;
	}

	&__container {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
		z-index: 1;

		&--img {
			border-radius: 50px;
			overflow: hidden;
			width: 100%;

			img {
				width: 100%;
				display: block;
			}
		}

		&--text {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			width: 100%;
			color: #fff;
			font-size: 1.1rem;
			text-align: justify;

			h2 {
				margin-top: 1.5rem;
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
}

@media (min-width: 576px) {
	.header {
		&__container {
			&--img {
				width: 70%;
			}

			&--text {
				padding: 0;
				width: 70%;

				h2 {
					margin-top: 1em;
				}
			}
		}
	}
}

@media (min-width: 768px) {
	.header {
		padding: 2em;
		background-image: url('../../assets/coding-big.jpg');

		&__container {
			flex-direction: row;
			justify-content: space-between;
			height: 100svh;
			align-items: center;
			&--img {
				width: 55%;
			}

			&--text {
				width: 40%;
				padding: 0;

				h2 {
					margin-top: 1em;
				}
			}
		}
	}
}
@media (min-width: 992px) {
	.header {
		padding: 4em;
		flex-direction: row;
		justify-content: space-between;
		z-index: 2;
		&__container {
			&--img {
				width: 45%;
				overflow: hidden;
			}

			&--text {
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
}
</style>
