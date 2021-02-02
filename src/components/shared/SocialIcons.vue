<template>
    <div :class="{'social-icons': true, vertical}">
        <a :href="$static.pageContent.social.insta">
            <img v-if="!blue" src="./social/insta.png"/>
            <img v-if="blue" src="./social/insta-blue.png"/>
        </a>
        <a :href="$static.pageContent.social.linkedin">
            <img v-if="!blue" src="./social/linkedin.png"/>
            <img v-if="blue" src="./social/linkedin-blue.png"/>
        </a>
        <a :href="$static.pageContent.social.facebook">
            <img v-if="!blue" src="./social/facebook.png"/>
            <img v-if="blue" src="./social/facebook-blue.png"/>
        </a>
    </div>
</template>
<static-query>
query {
  pageContent(path:"/content/global"){
    social{
        insta
        facebook
        linkedin
    }
  }
}
</static-query>
<script>
export default {
    props: {
        blue: Boolean,
        vertical: Boolean,
    },
}
</script>
<style lang="scss">
.social-icons{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img{  
      object-fit: contain;
  }

@media (min-width: $phone + 1px){
    
  width: dvw(150);
  &.vertical{
      flex-direction: column;
      width: unset;
      height: dvw(120);
  }
  img{
      height: dvw(26); width: dvw(26);
      object-fit: contain;
  }
    
}
@media (max-width: $phone){
    
  padding: 0 mvw(20);
  img{
      height: mvw(45);
      width: mvw(45);
  }
    
}
}

</style>