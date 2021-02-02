<template>
<offset-section>
    <div class="images">
        <!-- <img src="/assets/images/organizations/AFELA-logo@2x.png"/> -->
        <img src="/assets/images/organizations/Avvo_logo@2x.png"/>
        <!-- <img src="/assets/images/organizations/NAELA+logo@2x.png"/>
        <img src="/assets/images/organizations/WNE-logo@2x.png"/> -->
    </div>
</offset-section>
</template>
<style lang="scss" scoped>
.images{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        object-fit: contain;
    }
}
@media (min-width: $phone + 1px){
    .images{
        padding: $pl;
        flex-direction: row;
        img{
            width: dvw(215);
            height: dvw(80);
        }
    }
}
@media (max-width: $phone){
    .images{
        flex-direction: row;
        flex-wrap: wrap;
        img{
            margin: mvw(20);
            width: 100%;
            // height: mvw(100);
        }
    }
}

</style>