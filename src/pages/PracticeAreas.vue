<template>
<Layout>
  <hero/>
  <areas/>
</Layout>
</template>
<script>
import Areas from '~/components/sections/PracticeAreas.vue'
import Hero from '~/components/sections/heros/PracticeAreasHero.vue'
export default {
  components: {
    Hero,
    Areas
  },
  metaInfo: {
    title: 'What we do'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
