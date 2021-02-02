<template>
<div class="button-container">
    <button
        v-if="submit"
        type="submit" 
        :class="buttonClasses">
        {{label}}
    </button>
    <a v-if="!submit"
      :href="link"
      @click="goTo" 
      :class="buttonClasses">
        {{label}}
    </a>
</div>
</template>
<script>
export default {
    name: "BnButton",
    props: {
        label: String,
        link: String,
        hollow: Boolean,
        orange: Boolean,
        block: Boolean,
        blue: Boolean,
        white: Boolean,
        submit: Boolean,
    },
    computed: {
      buttonClasses(){
        return {
          'bn-button': true,
          'hollow': this.hollow,
          'orange': this.orange,
          'blue': this.blue,
          'white': this.white,
          'block': this.block,
        }
      },
      fullLink(){
        if(process.isClient)
          return `//${window.location.host}${this.link}`
        else
          return this.link
      },
     },
    methods: {
      goTo(){
        if (process.isClient) location.href = this.fullLink
      }
    }
}
</script>
<style lang="scss" scoped>
a, button{
    cursor: pointer;
    text-align: center;
    background-color: $red;
    color: $yellow;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: .2ch;
    &:hover{
      background-color: $blue-10;
    }

    &.hollow{
      color: $blue-20;
      background-color: transparent;
      border: 2px solid $blue-20;
      &:hover{
        border: 0;
        color: white;
        background-color: $blue-30;
        border: 2px solid  $blue-30;
      }
    }
    &.orange{
      background-color: $orange;
      &:hover{
        background-color: $blue-30;
      }
    }
    &.blue{
      background-color: $blue-40;
      &:hover{
        background-color: $orange;
      }
    }
    &.white{
      border-color:white;
      color: white;
      &:hover{
        border-color: $orange;
        background-color: $orange;
        color: rgba(0,0,0,1);
      }
    }
    &.block{
      display: block;
      width: 100%;
      padding-left: 0;
      padding-right: 0;
    }
    
}
@media (min-width: $phone + 1px){
  a, button{
    padding: dvw(16) dvw(44);
    font-size: dvw(16);
    min-width: dvw(287);
  }
}
@media (max-width: $phone){
  a, button{
    padding: mvw(20);
    width: 100%;
    font-size: mvw(16);
    text-align: center;
    display: block;
}
}

</style>