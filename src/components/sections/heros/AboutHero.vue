<template>
<offset-section touch-nav grid-centered class="about-hero-section" no-padding>
    <img fit="cover" class="background desktop" src="/assets/images/About_Hero_Desktop.jpg"/>
    <img fit="cover" class="background mobile" src="/assets/images/About_Hero_Mobile.jpg"/>
    <div class="content">
        <bn-h1 large white v-html="content.heading"/>
        <bn-p center white>{{content.description}}</bn-p>
    </div>
</offset-section>
</template>
<static-query>
query {
  pageContent(path:"/content/about"){
  	heading
    description
  }
}
</static-query>
<script>
export default {
    computed: {
        content(){
            return this.$static.pageContent;
        }
    }
}
</script>
<style lang='scss'>
.about-hero-section{
    
    .background{
        width: 100%;
        position: absolute;
        z-index: -1;
        object-fit: cover;
    }
    .bn-content{
        display: grid;
        align-items: center;
        justify-content: center;
    }
    .content{
        display: flex;
        flex-direction:column;
        align-items: center;
        .cta{
            align-self: center;
        }
    }
}

@media (min-width: $phone + 1px){
    .about-hero-section{
        .bn-content{ height: 56vw; }
        .background{ height: 56vw; width: dvw(1232);}
        .content{
            
            margin-left: dvw(180);
            margin-top: - dvw(150);
            width: dvw(500);
            img{
                width: dvw(420);
            }
            h1{
                padding: 0 0;
                
            }
        } 
    }
}
@media (max-width: $phone){
    .about-hero-section{
        height: mvw(560);
        align-content: start;
        
        justify-content: unset;
        align-content: unset;
       .background{
           height: mvw(366);
       }
        .content{
            display: grid;
            grid-template-rows: auto 1fr auto;
            
            padding: mvw(20) mvw(40);
            
            img{
                width: mvw(120);
                justify-self: center;

            }
            h1{
                justify-self: center;
                align-self: start;
                padding: $pm 0;
                flex: 1;
                width: mvw(300);
                padding: mvw(120) 0 mvw(200);
            }
            p{color: $red;}
        }
        
    }
   
}

</style>