<template>
<div class="practice-area-item">
    <bn-h2 class="heading" center>{{content.heading}}</bn-h2>
    <slot/>
    <bn-p class="container" v-html="content.content"/>
</div>
</template>
<script>
export default {
    props: {
        content: Object
    }
}
</script>

<style lang="scss">
.practice-area-item{

  position: relative;

  .heading{
    clip-path: polygon(20px 0, calc(100% - 20px) 0, 100% 50%,  calc(100% - 20px) 100%, 20px 100%, 0 50%);
    background-color: $red;
    text-transform: uppercase;
    position: absolute;
    left: 50%;
    color: $yellow;
    transform: translate(-50%, -50%);
    width: max-content;
  }

  .container{
    h2, h3{ font-family: 'Open Sans', sans-serif; font-weight: 300;}
  }

@media (min-width: $phone + 1px){
  .heading{

    padding: $pxs $pl;
  }

  .container{

    width: dvw(790);
    margin: $pm 0 $pl $pl;
  
    h2{
      font-size: dvw(28);
      padding-bottom: $ps;
    }

    p{
      padding-bottom: $pxs;
    }
  }

}
@media (max-width: $phone){
  .heading{

    padding: mvw(20) mvw(30);
    font-size: mvw(32);
    width: unset;
  }

  .container{
    padding: mvw(40);
    h2{
        font-size: mvw(24);
        padding-bottom: mvw(35);
    }
    p{
        padding-bottom: mvw(20);
    }
  }
}
}
</style>