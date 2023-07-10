<template>
	<HeaderComponent />

	<MyProjectComponents />
	<MySkillsComponent />
	<ContactComponent />
</template>

<script setup>
// @ is an alias to /src

import HeaderComponent from '@/components/Header/HeaderComponent.vue'
import MyProjectComponents from '@/components/MyProjectComponents.vue'
import MySkillsComponent from '@/components/MySkillsComponent.vue'
import ContactComponent from '@/components/ContactComponent.vue'
</script>
