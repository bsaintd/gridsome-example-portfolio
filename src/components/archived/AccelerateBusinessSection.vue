<template>
<section>
    <bn-content column>
        <bn-h2 white>{{content.heading}}</bn-h2>
        <bn-button orange :label="content.btn.text" :link="content.btn.link"/>
    </bn-content>
</section>
</template>
<script>
export default {
    props: {
        content: {
            heading: String, 
            btn: {
                text: String,
                link: String
            }
        }
    }
}
</script>

<style lang="scss" scoped>
section{
    background-color: $blue-10;
    display: grid;
    align-content: center;
    justify-content: center;
    padding: dvw(80) dvw(80) dvw(100);
    
}
@media (min-width: $phone + 1px){
    h2{
        margin-bottom: dvw(50);
    }
}
@media (max-width: $phone){
    section{
        padding: mvw(40) mvw(40) mvw(60);
        h2{margin-bottom: mvw(50);}
    }
}
</style>