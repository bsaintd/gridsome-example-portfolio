<template>
<h1 :class="{ ..._props, 'bn-h1': true }"><slot/></h1>
</template>
<script>
export default {
  props: {
    large: Boolean,
    white: Boolean,
    left: Boolean,
  },
}
</script>
<style lang="scss">
h1.bn-h1{
  color: $blue-10;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  line-height: .9;
  text-align: center;
  &.left{ text-align: left;}
  &.white{ color:white; }

@media (min-width: $phone + 1px){
  padding: $pm 0;
  font-size: dvw(50);
  &.large{ font-size: dvw(56); }
  letter-spacing: -.02ch;
}
@media (max-width: $phone){
  font-size: mvw(38);
  letter-spacing: -.02ch;
}

}
</style>