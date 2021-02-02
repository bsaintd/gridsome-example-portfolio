<template>
<section>
    <bn-content class="bn-container" column left>
        <bn-h2>{{content.heading}}</bn-h2>
        <what-item :testimonial="content.list[0]">
            <img src="/assets/images/what-we-do/elder-law-guardianship.jpg"/>
        </what-item>
        <what-item :testimonial="content.list[1]">
            <img src="/assets/images/Homepage_Practice_Areas_Estate_Planning_Pritchard.jpg"/>
        </what-item>
        <what-item :testimonial="content.list[2]">
            <img src="/assets/images/what-we-do/probate-and-trust.jpg"/>
        </what-item>
    </bn-content>
</section>
</template>

<static-query>
query {
  pageContent(path:"/content/home"){
    what{
      heading
      list{
        heading
        copy
        link
      }
    }
  }
}
</static-query>
<script>
import _ from 'lodash';
import WhatItem from './what/components/WhatItem.vue'
export default {
    components: { WhatItem },
    computed:{
        content() {
            return this.$static.pageContent.what;
        }
    },
}
</script>

<style lang="scss" scoped>
p{
    &.heading{
        color: $orange;
        margin-bottom: 0;
    }
    .name{
        color: $red;
        font-weight: 600;
    }
}

.image-container{
    background-color: $grey;
    display: grid;
    align-content: center;
    justify-content: center;
    .image{
        object-fit: contain;
    }
}

@media (min-width: $phone + 1px){
    section{
        padding-left: dvw(360);
        &>.bn-content{
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"  width="100%" height="100"><rect x="33%" y="0" width="67%" height="100%" style="fill:%23E7F0F4;fill-opacity:1;" /></svg>');
            align-items:flex-start;
            h2{
                padding-top: $pm;
                padding-left: dvw(20);
                padding-bottom: $pm;
            }
        }
        
        .bn-container{
            padding-top: dvw(115);
            padding-bottom: dvw(65);
        }
        img{
            width: dvw(690);
            height: dvw(390);
            object-fit: cover;
        }
        
    }
    
    .text{
        width: dvw(600);
        margin-left: dvw(50);
    }

}

@media (max-width: $phone){
    section{
        .bn-content{
            align-items: start;
        }
        padding: mvw(20) 0;
        .bn-container{
            padding: mvw(20) 0;
        }
        h2{
            padding-left: mvw(40);
            padding-bottom: mvw(25);
        }
    }
    p{  
        text-align: left;
    }
   
    img{
        width: mvw(394);
        height: mvw(250);
        object-fit: cover;
    }
    
}
</style>