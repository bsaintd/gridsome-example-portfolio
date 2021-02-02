<template>
    <grey-container :heading="content.heading">
        
    </grey-container>
</template>

<script>
import GreyContainer from '~/components/shared/GreyContainer.vue'

export default {
    props: { 
        content: { 
            heading: {type: String, default: ''},
        }
    },
    components: { GreyContainer },
}
</script>

<style lang="scss" scoped>
.second-row{
    display: flex;
    justify-content:space-between;
    img{
       object-fit: contain;
    }
}
@media (min-width: $phone + 1px){
    .logo-list{
        width: dvw(1660);
        margin-top: dvw(40);
    }
    .second-row{
        flex-direction:row;
        width: dvw(1660);
       img{
           height: dvw(150);
           width: dvw(1660 / 6);
        }
    }
}
@media (max-width: $phone){
    .logo-list{
        width: mvw(414 - 40);
    }
    .second-row{
        flex-direction:column;
        align-items: center;
        img{
           width: 66%;
        }
    }
}
</style>