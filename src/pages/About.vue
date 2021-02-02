<template>
<Layout>
  <hero/>
  <about/>
</Layout>
</template>
<script>

import Hero from '~/components/sections/heros/AboutHero.vue'
import About from '~/components/sections/AboutSection.vue'
export default {
  components: {
    Hero,
    About
  },
  metaInfo: {
    title: 'Who we are'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
