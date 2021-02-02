<template>
<Layout>
  <hero/>
  <who/>
  <what/>
  <testimonials/>
</Layout>
</template>

<script>
import Hero from '~/components/sections/heros/HomeHero.vue'
import Who from '~/components/sections/Who.vue'
import Testimonials from '~/components/sections/Testimonials.vue'
import What from '~/components/sections/What.vue'
import Contact from '~/components/sections/Contact.vue'
import Organizations from '~/components/sections/Organizations.vue'

export default {
  components: {
    Hero,
    Who, 
    What, 
    Testimonials,
    Contact,
    Organizations,
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
