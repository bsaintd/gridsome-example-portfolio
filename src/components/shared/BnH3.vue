<template>
    <h3 :class="{ ..._props, 'bn-h3': true }"><slot/></h3>
</template>
<script>
export default {
    props: {
        white: Boolean,
        green: Boolean
    }
}
</script>
<style lang="scss" scoped>
h3.bn-h3{

  color: $red;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  text-transform: uppercase;
  &.white{ color: white; }
  &.green{ color: $blue-30; }

@media (min-width: $phone + 1px){
  font-size: dvw(26);
}

@media (max-width: $phone){
  font-size: mvw(30);
  text-align: center;
}

}
</style>