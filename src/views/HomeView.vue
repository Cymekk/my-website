<template>
	<MobileNavComponent
		@show-mobile-nav="handleNav"
		:isVisible="isVisible"
		@wheel.prevent
		@touchmove.prevent
		@scroll.prevent
	/>
	<div class="wrapper">
		<NavbarComponent @show-mobile-nav="handleNav" :isVisible="isVisible" />
		<HeaderComponent />

		<MyProjectComponents />
		<MySkillsComponent />
		<ContactComponent />
	</div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import MobileNavComponent from '@/components/Nav/MobileNavComponent.vue'
import NavbarComponent from '@/components/Nav/NavbarComponent.vue'
import MyProjectComponents from '@/components/myProjects/MyProjectComponents.vue'
import MySkillsComponent from '@/components/MySkills/MySkillsComponent.vue'
import ContactComponent from '@/components/Contact/ContactComponent.vue'

import { ref } from 'vue'

export default {
	name: 'HomeView',
	components: {
		MobileNavComponent,
		NavbarComponent,
		MyProjectComponents,
		HeaderComponent,
		MySkillsComponent,
		ContactComponent,
	},

	setup() {
		let isVisible = ref(false)

		function handleNav() {
			if (isVisible.value == false) {
				isVisible.value = true
			} else {
				isVisible.value = false
			}
		}

		return { isVisible, handleNav }
	},
}
</script>
