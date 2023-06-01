<template>
	<navbar class="nav">
		<ul>
			<a href="#projects"><li>Projects</li></a>
			<a href="#skills"><li>Stack</li></a>
			<a href="#contact"><li>Contact</li></a>
		</ul>
	</navbar>
	<button class="burger-btn" @click="handleMobileNav">
		<div class="bars-box" :class="{ active: isVisible }">
			<div class="bar"></div>
		</div>
	</button>
</template>
<script>
export default {
	name: 'NavbarComponent',
	props: {
		isVisible: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['show-mobile-nav'],

	setup(props, { emit }) {
		function handleMobileNav() {
			emit('show-mobile-nav')
		}

		return {
			handleMobileNav,
		}
	},
}
</script>
<style lang="scss">
.nav {
	height: 10svh;
	display: none;
	flex-direction: row-reverse;
	align-items: center;
	color: #fff;

	ul {
		list-style: none;
		display: flex;

		a {
			text-decoration: none;
			color: #fff;
		}

		li {
			position: relative;
			font-size: 1.2rem;
			margin: 0.5em;
			padding: 0.5em;
			border-radius: 5px;

			&::after,
			&::before {
				content: '';
				position: absolute;
				width: 0;
				bottom: 0;
				border-bottom: 2px solid #fff;
				transition: width 0.3s ease-in;
			}

			&::after {
				left: 50%;
			}

			&::before {
				right: 50%;
			}

			&:hover::after,
			&:hover::before {
				width: 50%;
			}
		}
	}
}

.burger-btn {
	position: absolute;
	top: 20px;
	right: 20px;
	width: 50px;
	height: 50px;
	background: none;
	border: none;
	padding: 5px;
	outline: none;
	z-index: 2;

	.bars-box {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		height: 100%;
		transition: transform 0.5s ease-in;

		.bar {
			width: 100%;
			height: 3px;
			left: 0;
			background-color: #fff;
			transition: background-color 0.5s ease-in;

			&::after,
			&::before {
				content: '';
				width: 100%;
				height: 3px;
				position: absolute;
				background-color: #fff;
				left: 0;
				transform-origin: center;
				transition: transform 0.5s ease-in;
			}

			&::after {
				transform: translateY(15px);
			}

			&::before {
				transform: translateY(-15px);
			}
		}
	}
	.active {
		.bar {
			background-color: transparent;

			&::before {
				transform: rotate(45deg) translate(0, 0);
			}
			&::after {
				transform: rotate(-45deg) translate(0, 0);
			}
		}
	}
}

@media (min-width: 992px) {
	.nav {
		display: flex;
	}

	.burger-btn {
		display: none;
	}
}
</style>
