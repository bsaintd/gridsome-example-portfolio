<template>

<form id="contact-form-block" @submit.prevent="submitForm" ref="contact">
    <bn-h2 md>Contact us for your free consultation.</bn-h2>
    
    <input
      type="text"
      name="name"
      v-model="form.name"
      placeholder="First and Last Name"/>
    
    <input 
      type="email" 
      name="email"
      v-model="form.email"
      placeholder="Email"
      required/>
    
    <input 
      type="tel" 
      name="phone"
      v-model="form.phone"
      placeholder="Phone"
      />

    <textarea
      rows="1"
      auto-grow
      name="message"
      v-model="form.message"
      placeholder="How can we help?"
      >
    </textarea>

    <bn-button submit hollow label="Submit"/>
    <snackbar
      ref="snackbar"
      baseSize="200px"
      :colors="{open: 'grey'}"
      :holdTime="3000"
      position="bottom-center"
      />
</form>
  

</template>
<script>

import axios from 'axios';
import Snackbar from 'vuejs-snackbar';

export default {
  components: { Snackbar },
    data() {
        return {
            form: {
                name: "",
                email: "",
                message: "",
                phone: "",
            },
        }
    },
   methods: {
       submitForm(){
        const data = new FormData(this.$refs.contact);
           axios({
               url: "https://hooks.zapier.com/hooks/catch/5400431/o4hj3go/",
               method: "post",
               data,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded' 
                }})
           .then((response)=>{
               console.log(response.data);
               this.$refs.snackbar.open('Thanks! We will be in touch');
           })
           .catch((error)=>{
               console.error(error);
           });
       }
   }
}
</script>

<style lang="scss">
form#contact-form-block{
  
  input, textarea{
    width: 100%;
    color: $grey-10;
    display: block;
    border: none;
    background-color: $beige;
    border-bottom: 1px solid $grey-10;
    font-family: 'Open Sans', sans-serif;
    &:focus{
        outline: none;
    }
  }

@media (min-width: $phone + 1px){

  h2{ margin-bottom: $ps; }

  width: dvw(675);
  padding: $pl dvw(155) $pl $pl;

  input, textarea{
      font-size: dvw(18);
      padding: dvw(20) 0 dvw(17);
  }

  [name=message]{
    margin-top: $pm;
  }
  .button-container{
    margin-top: $pm;
  }
    
}
@media (max-width: $phone){
  
  width: 100%;
  padding: mvw(60) mvw(20);
  input, textarea{
      font-size: mvw(18);
      padding: mvw(20) 0 mvw(17);
  }
  [name=message]{
      margin-top: mvw(50);
  }
  .button-container{
      margin-top: mvw(50);
  }
}

}
</style>