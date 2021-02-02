<template>
  <section>
    <div
      class="background desktop"
      :style="{backgroundImage: 'url(/assets/images/Homepage_Hero_Desktop.jpg)'}"
    />
    <div
      class="background mobile"
      :style="{backgroundImage: 'url(/assets/images/Homepage_Hero_Mobile.jpg)'}"
    />
    <div class="content">
      <img fit="contain" src="/assets/images/Logo.png" />
      <bn-h1 v-html="content.heading" />
      <bn-button class="cta" :link="content.btn.link" :label="content.btn.text" />
    </div>
  </section>
</template>
<static-query>
query {
  pageContent(path:"/content/home"){
  	hero{ 
      heading
      btn{
        text
        link
      }
    }
  }
}
</static-query>
<script>
export default {
  props: {
    background: String,
    logo: String,
  },
  computed: {
    content() {
      return this.$static.pageContent.hero;
    },
  },
};
</script>
<style lang='scss' scoped>
section {
  display: grid;
  justify-content: center;
  align-content: center;
  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    object-fit: cover;
    background-size: cover;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .cta {
      align-self: center;
    }
  }
}

@media (min-width: $phone + 1px) {
  section {
    height: dvw(900);
    .background {
      height: dvw(900);
    }
    .content {
      padding-top: dvw(100);
      width: dvw(500);
      img {
        width: dvw(420);
      }
      h1 {
        padding: $pm 0;
      }
    }
  }
}
@media (max-width: $phone) {
  section {
    align-content: start;
    height: mvw(665);
    justify-content: unset;
    align-content: unset;
    .background {
      height: mvw(665);
    }
    .content {
      display: grid;
      grid-template-rows: auto 1fr auto;
      height: mvw(665);
      padding: mvw(20) mvw(20) mvw(50);

      img {
        width: mvw(120);
        justify-self: center;
      }
      h1 {
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
