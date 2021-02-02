module.exports = function (api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allStoryblok {
        edges {
          node {
            id
            full_slug
            slug
            name
            content
          }
        }
      }
    }`)

    data.allStoryblok.edges.forEach(({ node }) => {
      const blogMatch = node.full_slug.match(/blog\/(.+)/)
      if(blogMatch){
        const path = blogMatch[1]
        createPage({
          path: `/blog/${path}`,
          component: './src/templates/Blog.vue',
          context: {
            id: node.id,
            storyblok: node
          }
        })
      }
    })
  })
}