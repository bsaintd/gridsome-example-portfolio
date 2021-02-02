<template>
<section>
    <div class="features">
        <img src="/assets/images/testimonials-image@2x.png"/>
        <bn-h2 center>Testimonials</bn-h2>
        <ClientOnly>
            <carousel :perPage="1" >
                <slide v-for="(item, index) in testimonials" :key="index">
                    <bn-content class="text" column>
                        <bn-p center>{{ item.Quote }}</bn-p>
                        <bn-p center style="font-style: italic;">
                            -{{ item.Name }}
                        </bn-p>
                    </bn-content>
                </slide>
            </carousel>
        </ClientOnly>
    </div>
    <img class="highlight desktop" src="/assets/images/Homepage_Testimonials_Family-on-Sidewalk_Desktop.jpg" />
</section>
</template>


<static-query>
query {
  pageContent(path:"/content/home"){
    testimonials{
      heading
      list{
        name
        copy
      }
    }
  }
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
import GreyContainer from '~/components/shared/GreyContainer.vue'
import get from 'lodash/get'

export default {
    computed: {
      content(){
          return this.$static.pageContent.testimonials
      },
      testimonials(){
        const NULL_NODE = [{ node: { full_slug: ''}}]
        let edges = get(this, '$static.allStoryblok.edges', NULL_NODE)
        edges = edges.filter(edge => get(edge, 'node.full_slug', '')
          .match(/testimonials/))
          .map(edge=>edge.node)
        const slides = get(edges, '[0].content.Slides', [])
        
        return slides
      },
    },
    components: {
        Carousel: () =>
            import ('vue-carousel')
            .then(m => m.Carousel)
            .catch(),
        Slide: () =>
            import ('vue-carousel')
            .then(m => m.Slide)
            .catch(),
        GreyContainer,
    },
}
</script>

<style lang="scss" scoped>

.features{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.feature{
    
    p{
        &.heading{
            margin-bottom: 0;
        }
    }
    
}

@media (min-width: $phone + 1px){
    section{
        border-top: 1px solid $black;
        border-bottom: 1px solid $black;
    }
    section{
        padding: $pl 0 $pm;
        margin: $pl 0 $pl dvw(440);
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .features{
        width: dvw(520);
        img{
            width: dvw(48);
            height: auto;
        }
    }
    .highlight{
        width: dvw(490);
        height: dvw(330);
        object-fit: cover;
        margin-left: $pl;
    }

    .cta{
        margin: dvw(120) 0 dvw(40);
    }
}
@media (max-width: $phone){
    section{
        margin-left: mvw(20);
        margin-right: mvw(20);
    }
    .features{
        padding-top: mvw(40);
        
    }
    .feature{
        padding-bottom: mvw(20);
    }
}
</style>