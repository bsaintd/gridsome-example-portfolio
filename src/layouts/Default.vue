<template>
<div class="layout">
  <navigation/>
  <slot/>
  <contact/>
  <organizations/>
</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Contact from '~/components/sections/Contact.vue'
import Organizations from '~/components/sections/Organizations.vue'
import Navigation from '~/components/shared/Navigation'
export default {
  components: {
    Navigation,
    Contact,
    Organizations
  },
}
</script>

<style lang="scss">

html, body{
  overflow-x: hidden;
}
body {
  font-family: 'Open Sans', sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.content-container {
  width: 100%;
  .content-slot{
    width: 100%;
    grid-area: content;
  }
}

.nav__link {
  margin-left: 20px;
}
</style>
