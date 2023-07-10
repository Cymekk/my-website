<template>
	<nav class="mobile" :class="{ active: props.modelValue }">
		<div class="shadow"></div>
		<div class="mobile__links" ref="targetRef">
			<ul>
				<a href="#projects" @click="handleMobileNav"><li>Projects</li> </a>
				<a href="#skills" @click="handleMobileNav"><li>Stack</li></a>
				<a href="#contact" @click="handleMobileNav"><li>Contact</li></a>
			</ul>
		</div>
	</nav>
	<button class="burger-btn" @click="handleMobileNav" ref="burgerRef">
		<div class="bars-box" :class="{ active: props.modelValue }">
			<div class="bar"></div>
		</div>
	</button>
</template>
<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
})

const emit = defineEmits(['update:modelValue'])
const handleMobileNav = () => {
	emit('update:modelValue', !props.modelValue)
}

const targetRef = ref(null)
const burgerRef = ref(null)

onClickOutside(
	targetRef,
	() => {
		emit('update:modelValue', false)
	},
	{
		ignore: [burgerRef],
	}
)
</script>
<style lang="scss">
.mobile {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	transform: translateX(150%);
	z-index: 5;
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
		background-color: #000000;
		background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
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
