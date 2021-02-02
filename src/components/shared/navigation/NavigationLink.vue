<template>
  <a :href="fullLink" @click="goTo">
    <bn-h2 class="navigation-link" white sm hover>{{label}}</bn-h2>
  </a>
</template>

<script>
export default {
  props: {
    link: String,
    label: String,
  },
  computed: {
    fullLink(){
      if(process.isClient)
        return `//${window.location.host}${this.link}`
      else
        return this.link
    }
  },
  methods: {
    goTo(){
      if(process.isClient) location.href = this.fullLink
    }
  }
}
</script>
<style lang="scss">
h2.navigation-link{
    text-align: right;
}
</style>