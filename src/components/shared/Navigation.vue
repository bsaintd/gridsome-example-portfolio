<template>
<header class="navigation-panel">
  <img class="logo" fit="contain" src="/assets/images/Logo_white.png"/>
  <bn-button
    class="cta desktop"
    block
    blue
    :label="$static.pageContent.action.label"
    link="#contact-form-block"/>

  <div v-if="isDesktop || showMenu" class="mobile links" v-scroll-lock="showMenu">
    <nav-link v-for="(item, index) in $static.pageContent.navigation"
      :key="index" :label="item.label" :link="item.link"/>
  </div>
  <social-icons class="desktop"/>
  <div class="copyright desktop">
    <bn-p yellow up center small bold>{{$static.pageContent.copyright}}</bn-p>
    <bn-p yellow up center bold>PHONE: {{$static.pageContent.phone}}</bn-p>
  </div>
  <menu-icon @click="showMenu = !showMenu" class="mobile"/>
</header>
</template>

<static-query>
query {
    pageContent(path: "/content/global"){
        copyright
        phone
        action{
            label
            link
        }
        navigation{
            label
            link
        }
    }
}
</static-query>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import SocialIcons from './SocialIcons.vue'
import NavLink from './navigation/NavigationLink.vue'
export default {
  components: {
    SocialIcons,
    MenuIcon, 
    NavLink
  },
  data(){
    return {
      showMenu: false
    }
  }
}
</script>

<style lang="scss">

header.navigation-panel{
  background-color: $blue-25;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .links{
      flex: 1;
      align-self: flex-end;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
  }

@media (min-width: $phone + 1px){
    
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  padding: 0 dvw(26);
  width: dvw(350);
  .logo{
      margin-top: $pm;
      width: dvw(160);
  }
  .cta{
      margin-top: $pm;
  }
  .copyright{
      margin-bottom: $pl;
  }
  .social-icons{
      margin-bottom: $pm;
  }
    
}
@media (max-width: $phone){
    
  position: relative;
  padding: mvw(12) mvw(20);
  flex-direction: row;
  justify-content: space-between;
  .links{
    padding: $mps;
    background-color: $blue-25;
    position: fixed;
    z-index: 4;
    left: 0;
    top: mvw(0);
    width: mvw(414);
    height: 100vh;
    a h2.navigation-link{ line-height: 2;}
  }
  .logo{
      width: mvw(57);
      height: mvw(46);
      object-fit: contain;
  }
  .menu-icon{
      color: white;
      font-size: mvw(48);
      position: absolute;
      z-index: 5;
      right: mvw(18);
      .material-design-icon > .material-design-icon__svg{
          bottom: unset;
      }
  }
    
}
}
</style>