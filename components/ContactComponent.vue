<template>
	<section class="contact container max-w-[600px] p-[16px]">
		<h2
			class="text-[28px] text-center underline underline-offset-3 translate-x-[100px] opacity-0 transition-transform-opacity duration-500 md:no-underline md:uppercase md:tracking-[2px] md:text-[36px] md:font-semibold lg:my-[32px]"
			id="contact"
		>
			{{ $t('contact') }}
		</h2>

		<form class="contact-form items-center mt-[32px] space-y-[16px]" @submit.prevent="sendEmail">
			<div
				class="input-box w-full translate-x-[100px] opacity-0 transition-transform-opacity duration-500"
				:class="{ 'text-red-500': v$.email.$error }"
			>
				<label for="email" v-if="locale == 'pl-PL'" class="font-semibold">Adres email:</label>
				<label for="email" v-else class="font-semibold">Email address:</label>
				<input
					type="text"
					name="email"
					class="outline-none p-[5px] rounded-md bg-transparent border-[1px] border-gray-700 dark:border-gray-200"
					:class="{ 'border-red-500': v$.email.$error }"
					v-model="inputsDetails.email"
				/>
				<span class="input-error" v-if="v$.email.$error">{{ $t('contactForm.emailErr') }}</span>
			</div>

			<div
				class="input-box w-full translate-x-[100px] opacity-0 transition-transform-opacity duration-500"
				:class="{ 'text-red-500': v$.subject.$error }"
			>
				<label for="topic" v-if="locale == 'pl-PL'" class="font-semibold">Temat:</label>
				<label for="topic" v-else class="font-semibold">Topic:</label>
				<input
					type="text"
					name="topic"
					class="outline-none p-[5px] rounded-md bg-transparent border-[1px] border-gray-700 dark:border-gray-200"
					:class="{ 'border-red-500': v$.subject.$error }"
					v-model="inputsDetails.subject"
				/>
				<span class="input-error" v-if="v$.subject.$error">{{ $t('contactForm.topicErr') }}</span>
			</div>

			<div
				class="input-box w-full translate-x-[100px] opacity-0 transition-transform-opacity duration-500"
				:class="{ 'text-red-500': v$.message.$error }"
			>
				<label for="message" v-if="locale == 'pl-PL'" class="font-semibold">Wiadomość:</label>
				<label for="message" v-else class="font-semibold">Message:</label>
				<textarea
					type="text"
					name="message"
					class="resize-none p-[5px] outline-none rounded-md bg-transparent border-[1px] border-gray-700 dark:border-gray-200 overflow-hidden"
					@keypress="resizeTextarea"
					v-model="inputsDetails.message"
					:class="{ 'border-red-500': v$.message.$error }"
				></textarea>
				<span class="input-error" v-if="v$.message.$error">{{ $t('contactForm.messageErr') }}</span>
			</div>

			<input
				type="submit"
				:value="btnText"
				class="send-btn px-4 cursor-pointer py-2 font-semibold dark:border-gray-200 border-[1px] border-gray-700 rounded-md hover:bg-gray-700 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-700 transition-all duration-300 translate-x-[100px] opacity-0"
				@submit="sendEmail"
			/>
		</form>

		<span class="mt-[16px] block text-center"> {{ $t('contactForm.rulesInfo') }}</span>
		<div v-if="messageSend" class="message-send mt-[16px] border-green-500 border-2 rounded-md p-[16px]">
			<p class="text-center">{{ $t('contactForm.messageSend') }}</p>
		</div>
	</section>
</template>

<script setup>
const { locale } = useI18n()
import useValidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

const btnText = computed(() => {
	return locale.value === 'pl-PL' ? 'Wyślij' : 'Send'
})

let message
let startHeight

onMounted(() => {
	const contact = document.querySelector('.contact')
	const title = contact.querySelector('h2')
	const inputBox = contact.querySelectorAll('.input-box')
	const sendBtn = contact.querySelector('.send-btn')
	message = contact.querySelector('textarea')
	startHeight = message.scrollHeight

	document.addEventListener('scroll', () => {
		if (title.offsetTop <= window.scrollY + window.innerHeight - 150) {
			title.style.opacity = '1'
			title.style.transform = 'translateX(0)'
		}

		inputBox.forEach(el => {
			if (el.offsetTop <= window.scrollY + window.innerHeight - 150) {
				el.style.opacity = '1'
				el.style.transform = 'translateX(0)'
			}
		})

		if (sendBtn.offsetTop <= window.scrollY + window.innerHeight - 80) {
			sendBtn.style.opacity = '1'
			sendBtn.style.transform = 'translateX(0)'
		}
	})
})

const inputsDetails = reactive({
	email: '',
	subject: '',
	message: '',
})

const rules = computed(() => {
	return {
		email: {
			required,
			email,
		},
		subject: {
			required,
		},
		message: {
			required,
			minLength: minLength(30),
		},
	}
})

const messageSend = ref(false)

const v$ = useValidate(rules, inputsDetails)
const sendEmail = () => {
	v$.value.$validate()
	if (!v$.value.$error) {
		showMessageSendBox()
	}
}

const resizeTextarea = () => {
	message.style.height = `${message.scrollHeight}px`
}

const shrinkTextarea = () => {
	message.style.height = `${startHeight}px`
}

const showMessageSendBox = () => {
	messageSend.value = true
	setTimeout(() => {
		messageSend.value = false
	}, 3000)
}
</script>

<style lang="scss" scoped>
.contact-form,
.input-box {
	@apply flex flex-col;
}

.input-error {
	@apply text-center text-red-500  font-semibold;
}
</style>
