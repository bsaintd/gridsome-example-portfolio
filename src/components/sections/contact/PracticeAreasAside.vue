<template>
<div class="aside">
    <bn-h2 class="heading" md>{{$static.pageContent.areas.heading}}</bn-h2>
    <div class="list-of-practices">
      <a href="/practice-areas" @click="goTo('/practice-areas')">
        <bn-h2 orange sm
            v-for="(item, index) in $static.pageContent.areas.list"
            :key="index"
        >{{item.label}}</bn-h2>
      </a>
    </div>
    <social-icons blue vertical/>
    <div class="spacer"/>
</div>
</template>
<static-query>
query{
  pageContent(path: "/content/home"){
    areas{
      heading
      list{
        label
        link
      }
    }
  }
}
</static-query>
<script>
import SocialIcons from '~/components/shared/SocialIcons'
export default {
    components: {SocialIcons},
    methods: {
      goTo(link){
        if(process.isClient) location.href = link
      }
    }
}
</script>
<style lang="scss">
.aside{

  display: flex;
  flex-direction: column;
  padding: $pm;
  height: 100%;
  background-color: $white;
  flex: 1;
  
  .spacer{
      flex-grow: 1;
  }

@media (min-width: $phone + 1px){
  h2.heading{
    margin-bottom: $pm;
  }
  .list-of-practices{
    margin-bottom: $pm;
    h2{
        line-height: 1.3;
    }
  }
}

@media (max-width: $phone){
    
  padding: mvw(50) mvw(20);
  width: 100%;
  h2.heading{
      margin-bottom: mvw(50);
  }
  .list-of-practices{
      margin-bottom: mvw(50);
      h2{
          line-height: 1.3;
      }
  }

}

}
</style>