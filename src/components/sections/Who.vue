<template>
<offset-section blue>
    <div class="copy">
        <bn-h2 white>{{content.heading}}</bn-h2>
        <bn-p white v-for="(line, index) in content.copy" :key="index">{{line}}</bn-p>
        <bn-button blue class="mt-3" :label="content.btn.text" :link="content.btn.link"></bn-button>
    </div>
    <div class="images">
        <img class="a" width="450" src="./who/family-field-desktop.jpg"/>
        <img class="b desktop" width="300" src="./who/wedding.jpg"/>
        <img class="c" width="300" src="./who/girl-with-kids.jpg"/>
    </div>
</offset-section>
</template>

<static-query>
query {
  pageContent(path:"/content/home"){
    who{
      heading
      copy
      btn{
        link
        text
      }
    }
  }
}
</static-query>

<script>
export default {
    computed: {
        content(){
            return this.$static.pageContent.who;
        }
    },
}
</script>

<style lang="scss" scoped>

@media (min-width: $phone + 1px){
    section{padding-top: dvw(140);}
    .copy{
        width: dvw(600);
        padding: $pl;
        .bn-button{
            margin-top: $pm;
            margin-bottom: $pl;}
    }
    .images{
        .a{
            width: dvw(450);
            height: auto;
            position: absolute;
            margin-top: - $ps;
            margin-left: $pl;
        }
        .b, .c{
            position: absolute;
            width: dvw(300);
            height: auto;
        }
        .b{
            position: absolute;
            margin-top: dvw(395);
            margin-left: dvw(190);
        }
        .c{
            margin-top: dvw(186);
        }
       
    }
}
@media (max-width: $phone){
    section{
        padding-right: 0;
        padding-top: mvw(60);
        margin-bottom: mvw(160);
        .bn-content{
            flex-direction: column;
        }
    }
    .copy{
        padding: mvw(20) mvw(40) mvw(20);
    }

    img{
        width: 100%;
    }
    h2.mobile{
        padding-bottom: mvw(30);
    }
    .images{
        height: mvw(266);
        .a{
            width: mvw(300);
            height: auto;
            position: absolute;
            right: 0;
        }
        .c{
            position: absolute;
            width: mvw(200);
            height: auto;
            margin-top: mvw(175);
            margin-left: mvw(40);
        }
       
    }
}
</style>