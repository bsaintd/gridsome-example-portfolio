<template>
<offset-section class="about-page-bio-section" no-padding>
  <div class="copy">
    <div class="spacer desktop"/>
    <bn-h2 white v-html="$static.pageContent.name"/>
    <bn-p white v-html="$static.pageContent.bio"/>
  </div>
  <div class="images">
    <img class="b family" width="300" src="/assets/images/About_Family_by_Water_Desktop.jpg"/>
    <img class="a window" width="450" src="/assets/images/About_Sparkler.jpg"/>
    <img class="c jessica" width="300" src="/assets/images/About_Jessica_Headshot_Desktop.jpg"/>
  </div>
</offset-section>
</template>

<static-query>
query {
  pageContent(path:"/content/about"){
    name
    bio
  }
}
</static-query>

<script>
export default {
  computed: {
    content(){
      return this.$static.pageContent.who;
    }
  },
}
</script>

<style lang="scss">
.about-page-bio-section{
  h2{ span{ color:$orange; font-weight:300; font-style: italic; } }
  .copy{ background-color: $blue-10; }

@media (min-width: $phone + 1px){

  margin-bottom: dvw(110);
  margin-top: dvw(140);
  padding-top: dvw(140);

  .bn-content{
    align-items: start;
    justify-content: start;
  }

  .copy{
    position: relative;
      
    .spacer{
      float: right;
      height: dvw(800);
      width: dvw(400);
    }
    h2{
      margin-bottom: $pm;
    }
    width: dvw(1030);
    padding: $pl;
    p{ margin-bottom: $pxs; }
    .bn-button{
      margin-top: $pm;
      margin-bottom: $pl;
    }
  }
  .images{
    position: absolute;
    right: 0;
    width: dvw(600);
    .a{
      width: dvw(350);
      height: auto;
      position: absolute;
      margin-top: - $ps;
      margin-left: dvw(200);
    }
    .b, .c{
      position: absolute;
      width: dvw(400);
      height: auto;
      object-fit: cover;
    }
  
    .b{
      position: absolute;
      width: dvw(590);
        
      margin-top: dvw(300);
      margin-left: dvw(50);
    }
    .c{
      margin-top: dvw(186);
    }
  }

}

@media (max-width: $phone){

  padding-right: 0;
  padding-top: mvw(60);
  margin: mvw(110) 0 mvw(55) mvw(20);
  background-color: $blue-10;

  .bn-content{
    flex-direction: column-reverse;
  }
  
  .copy{
    padding: mvw(20) mvw(40) mvw(20);
    
    h2{
      margin-bottom: mvw(50);
    }
  
    padding: mvw(40);
    p{
      margin-bottom: mvw(20);
    }
    .bn-button{
      margin-top: mvw(50);
      margin-bottom: mvw(75);
    }

  }

  img{
    width: 100%;
  }
  h2.mobile{
    padding-bottom: mvw(30);
  }
  .images{
    position: relative;
    height: mvw(460);
    width: 100%;
    .family{
      position: absolute;
      width: mvw(330);
      height: auto;
      z-index: 0;
      top: mvw(160);
      left: mvw(40);
    }
    .window{
      position: absolute;
      width: mvw(250);
      height: auto;
      z-index: 1;
      top: - mvw(40);
      left: mvw(75);
    }
    .jessica{
      position: absolute;
      width: mvw(250);
      height: auto;
      z-index: 2;
      top: mvw(50);
      left: 0;
    }
    
  }

}

}
</style>