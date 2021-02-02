<template>
<offset-section touch-nav class="blog-hero-section" no-padding>
    <img fit="cover" class="background desktop" src="/assets/images/Blog_Hero_Desktop@2x.jpg"/>
    <img fit="cover" class="background mobile" src="/assets/images/Blog_Hero_Mobile.jpg"/>
    <div class="content">
        <bn-h1 large left>Blog.</bn-h1>
        <bn-p red>Discover the latest news surrounding all things legal, or check out some of our firm’s achievements and press releases.</bn-p>
    </div>
</offset-section>
</template>
<static-query>
query {
  pageContent(path:"/content/about"){
  	heading
    description
  }
}
</static-query>
<script>
export default {
    computed: {
        content(){
            return this.$static.pageContent;
        }
    }
}
</script>
<style lang='scss'>
.blog-hero-section{
    
  .background{
    width: 100%;
    position: absolute;
    z-index: -1;
    object-fit: cover;
  }
  .bn-content{
    display: grid;
    align-items: start;
    justify-content: start;
  }
  .content{
    padding: dvw(144) 0 dvw(144) dvw(144);
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
  }


@media (min-width: $phone + 1px){
  
  .bn-content{ height: 56vw; }
  .background{ height: 56vw; width: dvw(1232); }

  .content{
    width: dvw(144 + 470);
    img{
        width: dvw(420);
    }
    h1{
        padding: 0 0;
    }
  } 
  
}
@media (max-width: $phone){
    
  height: mvw(560);
  align-content: start;
  
  justify-content: unset;
  align-content: unset;
  .background{
    height: mvw(560);
  }
  .content{
    display: grid;
    grid-template-rows: auto 1fr auto;
    
    padding: mvw(20) mvw(40);
    
    img{
        width: mvw(120);
        justify-self: center;
    }
    h1{
        justify-self: start;
        align-self: start;
        padding: $pm 0;
        flex: 1;
       
        padding: mvw(40) 0 0;
    }
    .bn-p{
      width: mvw(200);
    }
      
  }
}
}
</style>