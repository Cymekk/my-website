<template>
	<nav class="mobile" :class="{ active: isVisible }">
		<div class="shadow"></div>
		<div class="mobile__links">
			<ul>
				<a href="#projects"><li @click="handleMobileNav">Projects</li> </a>
				<a href="#skills"><li @click="handleMobileNav">Stack</li></a>
				<a href="#contact"><li @click="handleMobileNav">Contact</li></a>
			</ul>
		</div>
	</nav>
</template>
<script>
export default {
	name: 'MobileNavComponent',

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
.mobile {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	transform: translateX(150%);
	z-index: 1;
	display: flex;
	flex-direction: row;
	transition: transform 0.5s ease-in-out;

	.shadow {
		width: 40%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.6);
	}

	&__links {
		width: 60%;
		height: 100%;
		background-color: #3f0d12;
		background-image: linear-gradient(315deg, #3f0d12 0%, #a71d31 74%);
		display: flex;
		align-items: center;

		ul {
			width: 100%;
			height: 30%;
			list-style: none;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;

			a {
				text-decoration: none;
			}

			li {
				padding: 1em;
				font-size: 1.2rem;
				color: #fff;
			}
		}
	}
}

.active {
	transform: translateX(0);
}
</style>
