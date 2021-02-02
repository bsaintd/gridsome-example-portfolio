<template>
    <offset-section class="practice-area" column light-beige no-padding>
        <item id="elder-law-item" :content="$static.pageContent.elderLaw">
            <img 
                class="desktop" 
                src="./practice-areas/Practice_Areas_Elder_Law@2x.jpg"/>
            <img 
                class="mobile" 
                src="./practice-areas/Practice_Areas_Elder_Law@2x.jpg"/>
        </item>
        <item id="estate-planning-item" :content="$static.pageContent.estatePlanning">
            <img 
                class="desktop" 
                src="./practice-areas/Practice_Areas_Estate_Incapacity_Planning@2x.jpg"/>
            <img 
                class="mobile" 
                src="./practice-areas/Practice_Areas_Estate_Incapacity_Planning@2x.jpg"/>
        </item>
        <item id="probate-item" :content="$static.pageContent.probate">
            <img 
                class="desktop" 
                src="./practice-areas/Practice_Areas_Probate_Trust_Admin@2x.jpg"/>
            <img 
                class="mobile" 
                src="./practice-areas/Practice_Areas_Probate_Trust_Admin@2x.jpg"/>
        </item>
    </offset-section>
</template>
<static-query>
query {
    pageContent(path: "/content/practice-areas"){
        elderLaw{
            heading
            content
        }
        estatePlanning{
            heading
            content
        }
        probate{
            heading
            content
        }
    }
}
</static-query>
<script>
import Item from '~/components/sections/practice-areas/PracticeAreaItem.vue'
export default {
  components: {
    Item,
  }
}
</script>
<style lang="scss" scoped>
@media (min-width: $phone + 1px){
  .practice-area{
      
    margin-bottom: dvw(115);
    img{width: 100%;}
      
  }
}
@media (max-width: $phone){
  .practice-area{
    img{
      width: 100%;
      height: 70vw;
      object-fit: cover;
    }
  }
}
</style>