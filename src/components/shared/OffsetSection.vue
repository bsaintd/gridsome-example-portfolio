<template>
<section :class="{
    'offset-section': true,
    'touch-nav': touchNav,
    'no-padding': noPadding,
    }">
    <bn-content :column="column" :class="{
        beige,
        blue,
        'light-beige': lightBeige,
        'grid-centered': gridCentered,
        'no-padding': noPadding,
    }">
       <slot/>
    </bn-content>
</section>
</template>
<script>
export default {
   props:{
       lightBeige: Boolean,
       column: Boolean,
       gridCentered: Boolean,
       beige: Boolean,
       blue: Boolean,
       touchNav: Boolean,
       noPadding: Boolean
   }
}
</script>

<style lang="scss">
section.offset-section{
    .bn-content{
        &.grid-centered{
            display: grid;
            justify-content: center;
            align-content: center;
        }
        justify-content: flex-start;
        align-items: flex-start;
        &.blue{ background-color: $blue-10; 
        }
        &.beige{ background-color: $beige; }
        &.light-beige{ background-color: $white; }
    }
}
@media (min-width: $phone + 1px){
    section.offset-section{
        padding: 0 0 0 dvw(360);
        &.touch-nav{padding: 0 0 0 dvw(350);}
    }
    

}
@media (max-width: $phone){
   
    section.offset-section{
        padding: mvw(50) mvw(20) mvw(60);
        &.no-padding{padding: 0;}
    }

}
</style>