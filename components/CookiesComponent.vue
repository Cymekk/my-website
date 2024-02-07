<template>
	<div
		class="cookies-box fixed bottom-0 mb-[16px] max-w-[600px] left-1/2 -translate-x-1/2 bg-gray-700 dark:bg-gray-200 text-gray-200 dark:text-gray-700 p-[16px] rounded-md translate-y-[100px] opacity-0 transition-opacity duration-500"
		:class="{ hidden: cookiesAccepted }"
	>
		<div class="text flex items-center gap-[16px]">
			<Icon name="fluent:cookies-48-regular" class="text-[3em]" size="2em" />
			<p>
				{{ $t('cookiesText') }}
				<NuxtLink :to="localePath('policy')">
					<span class="font-semibold">{{ policyText }}</span>
				</NuxtLink>
			</p>
		</div>

		<button
			class="border-[1px] dark:border-gray-700 border-gray-200 px-4 py-2 mx-auto block rounded-md hover:bg-gray-200 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-200 transition-colors duration-300"
			@click="acceptCookies"
		>
			Ok
		</button>
	</div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const cookiesAccepted = ref(false)

const acceptCookies = () => {
	cookiesAccepted.value = true
	localStorage.setItem('cookiesAccepted', true)
}

onMounted(() => {
	const cookiesBox = document.querySelector('.cookies-box')
	cookiesBox.style.opacity = '1'
	cookiesBox.style.transform = 'translate(-50%, 0)'

	const cookiesAcceptedFromStorage = localStorage.getItem('cookiesAccepted')
	if (cookiesAcceptedFromStorage) {
		cookiesAccepted.value = true
	}
})

const policyText = computed(() => {
	return locale.value === 'pl-PL' ? 'Polityka Prywatności' : 'Private Policy'
})
</script>

<style lang="scss" scoped></style>
