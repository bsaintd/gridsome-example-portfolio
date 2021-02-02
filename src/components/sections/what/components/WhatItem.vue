<template>

    <bn-content class="practice-area-item">
        <div class="image-container">
            <slot/>
            <div class="cover">
               <bn-button hollow white class="desktop" label="Explore More" :link="testimonial.link"/>
            </div>
        </div>
        <div class="text">
            <bn-h3>
                {{testimonial.heading}}
            </bn-h3>
            <bn-p>{{testimonial.copy}}</bn-p>
        </div>
    </bn-content>

</template>

<script>
export default {
    props: {
        testimonial: Object,
    }
}
</script>

<style lang="scss" scoped>
.cover{
    position: absolute;
    display: grid;
    align-content: center;
    justify-content: center;
    top: 0;
    background-color: rgba(0,0,0,.5);
}
.image-container{
    position: relative;
}
@media (min-width: $phone + 1px){
    .cover{
        width: dvw(690);
        height: dvw(390);
    }
    .practice-area-item{
        margin-bottom: $pxs;
        .text{
            width: dvw(385);
            padding-left: $pl;
        }
    }
}
@media (max-width: $phone){
    h3.bn-h3{
        color: white;
        position: absolute;
        z-index: 2;
        left: 50vw;
        margin-top: - mvw(140);
        transform: translate(-50%, -50%);
    }
    .text{
        background-color: $white;
        margin-left: mvw(20);
        padding: mvw(20) mvw(40) mvw(50) mvw(20);
    }
    .cover{
        width: mvw(394);
        height: mvw(250);
    }
}
</style>