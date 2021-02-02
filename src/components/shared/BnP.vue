<template>
<p :class="{ ..._props, 'bn-p': true }"><slot/></p>
</template>
<script>
export default {
    props: {
        white: Boolean,
        blue: Boolean,
        red: Boolean,
        small: Boolean,
        large: Boolean,
        yellow: Boolean,
        up: Boolean,
        center: Boolean,
        bold: Boolean,
    }
}
</script>
<style lang="scss">
p.bn-p{
  font-family: 'Open Sans', sans-serif;
  color: $grey;
  font-weight: 300;
  line-height: 1.5;
  &.white{color: $white-10;}
  &.blue{color: $blue-10;}
  &.red{color: $red;}
  &.yellow{color: $yellow;}
  &.up{text-transform: uppercase;}
  &.center{text-align: center;}
  &.bold{font-weight: 600;}

@media (min-width: $phone + 1px){
    
  font-size: dvw(20);
  &.small{font-size: dvw(14);}
  &.large{font-size: dvw(22);}
    

}
@media (max-width: $phone){
    
  font-size: mvw(18);
  &.small{font-size: mvw(12);}
  &.large{font-size: mvw(20);}
  text-align: left;
    
}
}
</style>