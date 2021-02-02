<template>
<div :class="{'blog-list-item': true, article}">
    <a :href="'/blog/'+blog.slug" class="heading">
        <bn-h2>{{blog.content.title}}</bn-h2>
    </a>
    <div class="date">{{blog.content.date_published | formatDate}}</div>
    <div class="category">Category: <span>{{blog.content.category}}</span></div>
    <div class="author">By {{blog.content.author}}</div>
    <bn-p v-if="!article" 
        class="description" 
        v-html="blog.content.description"/>
    <img v-if="article" class="article-image" :src="blog.content.image"/>
    <richtext
        v-if="article" 
        class="description" 
        :text="blog.content.content"/>
    <bn-button v-if="!article" class="read" hollow label="Read More" :link="'/blog/'+blog.slug"/>
</div>
</template>
<script>
export default {
    props: {
        blog: Object,
        article: Boolean
    }
}
</script>
<style lang="scss" scoped>
.blog-list-item{
    display: grid;
    .date, .category, .author{text-transform: uppercase;}
    .date, .category{border-right: 1px solid $black;}
    .heading{
        border-bottom: 1px solid $black;
        h2{font-weight:400;}
    }
    .date, .category, .author, .description{
      font-family: 'Open Sans', sans-serif;
      font-weight: 300;
    }
   
    .category{ span{ color: $orange; }}
    @media (min-width: $phone + 1px){
        width: dvw(790);
        border-bottom: 1px solid $black;
        margin-left: dvw(32);
        &.article{
           
            width: 100%;
            max-width: dvw(905);
            padding-right: dvw(84);
            border-bottom: none;
        }
        margin-top: dvw(80);
        padding: dvw(17) 0 dvw(32);
        grid-template-areas:
         "h h h"
         "d c a"
         "w w w"
         "r . .";
        &.article{
            grid-template-areas:
            "h h h"
            "d c a"
            "i i i"
            "w w w";
        }
         .article-image{grid-area: i;}
         .heading{grid-area:h;}
         .date{grid-area: d;}
         .category{grid-area:c;}
         .description{grid-area:w;}
         .read{grid-area: r;}
         .author{grid-area:a;}

         .article-image{
             width: 100%;
             height: dvw(423);
             object-fit: cover;
             margin: $pm 0;
         }

         .heading{
             padding-bottom: dvw(27);
             margin-bottom: dvw(24);
             h2{
                font-size: dvw(38);
             }
         }
         .date, .category{
             padding-right: dvw(20);
             margin-right: dvw(20);
        }
        .description{
            margin-top: dvw(25);
            margin-bottom: dvw(34);
        }
    }
    @media(max-width: $phone){
        width: 100%;
        
        padding: mvw(17) 0 mvw(32);
        .heading{
             padding-bottom: mvw(27);
             margin-bottom: mvw(24);
            
         }
         .description{
            margin-top: mvw(25);
            margin-bottom: mvw(34);
        }
        .date, .category{border-right: none;}
         .article-image{
             width: 100%;
            
             object-fit: cover;
             margin: mvw(35) 0 mvw(10);
         }
    }
}
</style>