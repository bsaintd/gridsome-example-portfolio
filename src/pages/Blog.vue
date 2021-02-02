<template>
<Layout>
  <hero/>
  <list/>
</Layout>
</template>
<script>

import Hero from '~/components/sections/heros/BlogHero.vue'
import List from '~/components/sections/BlogList.vue'
export default {
  components: {
    Hero,
    List
  },
  metaInfo: {
    title: 'Blog'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
