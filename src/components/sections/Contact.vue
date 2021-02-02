<template>
<offset-section id="contact-section" beige no-padding>
    <contact-form class="same-height"/>
    <practice-areas-aside class="same-height"/>
</offset-section>
</template>
<script>
import ContactForm from './contact/ContactForm.vue'
import PracticeAreasAside from './contact/PracticeAreasAside.vue'
export default {
   components: { ContactForm, PracticeAreasAside }
}
</script>
<style lang="scss" scoped>
@media (min-width: $phone + 1px){
   .same-height{
       height: dvw(600);
    }
}
@media (max-width: $phone){
   section{ padding: 0;}
}
</style>
