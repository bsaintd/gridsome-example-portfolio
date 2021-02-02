<template>
<Layout>
  <offset-section column>
      <blog-item article :blog="$context.storyblok"/>
  </offset-section>
</Layout>
</template>
<script>
export default {
  metaInfo() {
    return {
      title: this.$context.storyblok.name,
    }
  },
  metaInfo: {
    title: 'Article'
  }
}
</script>