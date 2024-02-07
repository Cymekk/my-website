<template>
	<div
		class="fixed inset-0 flex items-center justify-center bg-black/50 -translate-y-[100%] opacity-0 transition-transform-opacity duration-500"
		:class="{ 'translate-y-0 opacity-100': modelValue }"
	>
		<div
			class="body relative w-[80%] max-w-[400px] overflow-hidden bg-gray-200 dark:bg-gray-700 p-[16px] rounded-md z-50 shadow-[0_0px_5px_2px_rgba(156,163,175)] dark:shadow-[0_0px_5px_2px_rgba(107,114,128)]"
		>
			<p class="text-center text-[18px]">{{ $t('settings.title') }}</p>
			<div class="flags flex justify-center gap-[24px] mt-[6px]">
				<div class="item flex flex-col items-center cursor-pointer" @click="changeLanguageToPolish">
					<Icon
						name="circle-flags:pl"
						size="2.5em"
						:class="{ 'bg-gray-700 dark:bg-gray-500 rounded-md': locale === 'pl-PL' }"
					/>
					<span>{{ $t('settings.pl') }}</span>
				</div>
				<div class="item flex flex-col items-center cursor-pointer" @click="changeLanguageToEnglish">
					<Icon
						name="circle-flags:en"
						size="2.5em"
						:class="{ 'bg-gray-700 dark:bg-gray-500 rounded-md': locale === 'en-US' }"
					/>
					<span>{{ $t('settings.en') }}</span>
				</div>
			</div>

			<div class="color-picker flex flex-col items-center">
				<p class="text-center text-[18px] mt-[16px]">{{ $t('settings.chooseColor') }}</p>
				<ColorSelectComponent class="mt-[6px]" />
			</div>

			<button
				class="mx-auto block mt-[16px] border-[1px] border-gray-700 dark:border-gray-200 px-4 py-2 font-semibold rounded-md hover:bg-gray-700 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-700 transition-colors duration-300"
				@click="closePopup"
			>
				OK
			</button>

			<Icon
				name="material-symbols:close"
				size="1.5em"
				class="absolute top-[5px] right-[5px] cursor-pointer"
				@click="closePopup"
			/>
		</div>
	</div>
</template>

<script setup>
//props
const props = defineProps({
	modelValue: {
		type: Boolean,
	},
})

//emit
const emit = defineEmits(['update:modelValue'])

const closePopup = () => {
	emit('update:modelValue', false)
}

//stuffs related to change language
const { locale, setLocale } = useI18n()

const changeLanguageToPolish = () => {
	setLocale('pl-PL')
}

const changeLanguageToEnglish = () => {
	setLocale('en-US')
}
</script>

<style lang="scss" scoped></style>
