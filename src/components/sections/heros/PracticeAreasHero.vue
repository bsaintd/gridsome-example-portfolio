<template>
<offset-section grid-centered>
    <div class="content">
        <bn-h1 large v-html="content.heading"/>
        <bn-p center red large>{{content.description}}</bn-p>
    </div>
</offset-section>
</template>
<static-query>
query {
  pageContent(path:"/content/practice-areas"){
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
<style lang='scss' scoped>
section{
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
    section{
        .content{
            padding-top: dvw(75);
            padding-bottom: dvw(112);
            width: dvw(570);
            img{
                width: dvw(420);
            }
            h1{
                padding: $pm 0;
            }
        } 
    }
}
@media (max-width: $phone){
    section{
        align-content: start;
        
        justify-content: unset;
        align-content: unset;
       
        .content{
            display: grid;
            grid-template-rows: auto 1fr auto;
            
            padding: mvw(20) mvw(20);
            
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
            }
        }
        
    }
   
}

</style>