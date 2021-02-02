<template>
  <h2 :class="{ ..._props }">
    <slot/>
  </h2>
</template>

<script>
export default {
  props: {
    white: Boolean,
    orange: Boolean,
    center: Boolean,
    sm: Boolean,
    md: Boolean,
    hover: Boolean,
  }
}
</script>

<style lang="scss">
h2{
  text-transform: none;
  color: $blue-10;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  
  &.white{
      color: $white;
  }
  &.orange{
      color: $orange;
  }
  &.center{
      text-align: center;
  }
  &.hover:hover{
      color: $yellow;
  }

@media (min-width: $phone + 1px){
    
  font-size: dvw(44);
  &.sm{font-size: dvw(26);}
  &.md{font-size: dvw(34);}
    
}
@media (max-width: $phone){
    
  font-size: mvw(38);
  &.sm{font-size: mvw(26);}
  &.md{font-size: mvw(34);}
    
}
}
</style>