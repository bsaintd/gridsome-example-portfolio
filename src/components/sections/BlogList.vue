<template>
<offset-section class="list-of-blog-articles" column>
    <blog-item v-for="(blog, index) in blogs" :key="index" :blog="blog"/>
</offset-section>
</template>

<static-query>
query{
  allStoryblok{
    edges{
      node{
        slug
        full_slug
        name
        content
      }
    }
  }
}
</static-query>

<script>
import get from 'lodash/get'
export default {
  computed: {
    blogs(){
      
      const NULL_NODE = [{ node: { full_slug: ''}}]
      const edges = get(this, '$static.allStoryblok.edges', NULL_NODE)
      
      return edges
        .filter(edge => get(edge, 'node.full_slug', '').match(/blog\//))
        .map(edge=>edge.node);
    }
  }
}
</script>

<style lang="scss">
.list-of-blog-articles{
    @media (min-width: $phone + 1px){
        margin-bottom: dvw(90);
    }
}
</style>