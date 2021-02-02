<template>
<div :class="{
    'bn-content': true, 
    column, 
    left,
    p40, 
    p20,
    'no-padding': noPadding,
    }">
    <slot/>
</div>
</template>
<script>
export default {
    props: {
        column: Boolean,
        left: Boolean,
        p20: Boolean,
        p40: Boolean,
        noPadding: Boolean,
    }
}
</script>
<style lang="scss" scoped>
.bn-content{
    display: flex;
    justify-content: center;
    align-items: center;
    &.left{
        justify-content: unset;
    }
    &.column{padding: 0;}
}
@media (min-width: $phone + 1px){
    .bn-content{
        flex-direction: row;
        &.column{flex-direction: column;}
    }
}
@media (max-width: $phone){
    .bn-content{
        flex-direction: column;
        &.p20{padding: mvw(20);}
        &.p40{padding: mvw(40);}
    }
}
</style>