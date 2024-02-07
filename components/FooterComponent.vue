<template>
	<footer class="footer dark:bg-gray-600 bg-gray-300 text-gray-800 dark:text-gray-200">
		<div
			class="container p-[16px] flex flex-col items-center space-y-[12px] md:flex-row md:justify-between md:space-y-0 max-w-[600px]"
		>
			<div class="phone flex items-center gap-[4px]">
				<Icon name="material-symbols:call" />
				<span>518 761 006</span>
			</div>
			<div class="date">
				<span> &copy {{ new Date(Date.now()).getFullYear() }} </span>
				<span class="ml-[5px]">MC</span>
			</div>

			<NuxtLink :to="localePath('policy')">
				<p class="underline">{{ $t('policy.title') }}</p>
			</NuxtLink>
		</div>
	</footer>
</template>

<script setup>
const localePath = useLocalePath()
</script>

<style lang="scss" scoped></style>
