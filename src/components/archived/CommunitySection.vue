<template>
<section>
<div class="brochure">
    <div class="content">
        <bn-h3>{{content.brochure.heading}}</bn-h3>
        <bn-button :label="content.brochure.btn.text" :link="content.brochure.btn.link"/>
    </div>
</div>
<div class="triangle">
    <div class="inner"></div>
</div>
<bn-content class="community" column>
    <bn-h2>{{content.community.heading}}</bn-h2>
    
</bn-content>
</section>
</template>

<script>
export default {
    props: {
        content: {
            brochure: {
                heading: String, 
                btn: {
                    text: String,
                    link: String
                }
            },
            community: { 
                heading: String
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.triangle{
    background-color: $white-10;
    height: 100%;
    width: dvw(150);
    .inner{
        width: 100%;
        height: 100%;
        background-color: white;
        clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
    }
}
h2{color: $blue-20;}

.community{
    background-color: $white-10;
    img{
        object-fit: inside;
    }
    .second-row{display:flex;}
}

@media (min-width: $phone + 1px){
    .brochure, .community{
        text-align: center;
        display: grid;
        justify-content: center;
        align-content: center;
    }
    section{
        display: flex;
        flex-direction: row;
        height: dvw(665);
    }
    h2, h3{margin-bottom: dvw(40);}

    .brochure{ flex: 1; 
        h3{width: dvw(580);}
    }
    .community{
        flex: 1.3;
        img{width: dvw(880);}
        
    }
}
@media (max-width: $phone ){
    .brochure{ 
        padding: mvw(55) mvw(25);
        h3{margin-bottom: mvw(50);}
    }
    .community{
        padding-top: mvw(50);
        h2{padding: 0 mvw(60);}
         
    }
    .triangle{display:none;}
    img{
        width: mvw(414 - 40);
    }
    
}
</style>