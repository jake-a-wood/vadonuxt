{{{{raw}}}}
<template>
	<section class="container">
		<img src="../assets/img/logo.png" alt="Nuxt.js Logo" />
		<h1 class="title">
			{{ error.statusCode }}
		</h1>
		<h2 class="info">
			{{ error.message }}
		</h2>
		<nuxt-link class="button" to="/" v-if="error.statusCode === 404">
			Homepage
		</nuxt-link>
	</section>
</template>
{{{{/raw}}}}

<script>
export default {
	props: ['error']
}
</script>

<style scoped>
</style>
