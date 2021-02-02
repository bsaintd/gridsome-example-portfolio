<template>
<section :class="{p40}">
    <bn-h2>{{heading}}</bn-h2>
    <slot/>
</section>
</template>
<script>
export default {
    props: {
        heading: String,
        p40: Boolean
    }
}
</script>
<style lang="scss" scoped>
@media (min-width: $phone + 1px){
    section{
        padding: dvw(80) 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
@media (max-width: $phone){
    section{ 
        padding: mvw(50) mvw(20) mvw(65);
        &.p40{
            padding: mvw(50) mvw(40) mvw(65);
        }
        h2{ padding-bottom: mvw(50); }
    }
}
</style>