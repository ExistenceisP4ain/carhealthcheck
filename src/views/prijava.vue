<template>
<div class="container">
  <img src="prijava.png" width="25%" height="20%" style="margin-top: 10px;">
  <div v-if="errorMessage" class="alert alert-danger">
            <strong>Ups!</strong>
            {{ errorMessage }}
          </div>
<div class="row justify-content-center">
<form @submit.prevent="login" style="margin-top:30px; border: 2px solid black; padding: 30px; border-radius: 25px; margin: 10px; background-color: gray;" class="formacss">
  <div class="form-group">
    <label for="exampleInputEmail1" style="font-family: Comic Sans MS; font-size: 18px; color: white; "><i class="far fa-envelope"></i> Email address</label>
    <input required v-model="email" type="email" class="form-control" style="border-radius: 20px;" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@email.com" >
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" style="font-family: Comic Sans MS; font-size: 18px; color: black;"  ><i class="fas fa-lock"></i> Password</label>
    <input required v-model="password" type="password" class="form-control" style="border-radius: 20px;" id="exampleInputPassword1" placeholder="***********" >
  </div>
  <div class="row">
    <div class="col-7">
  <button type="submit" class="btn btn-primary btn-login">Prijava</button>
</div>
<div class="col-5">
  <div class="row">
  <router-link to="/Registracija" class="nav-link btn-login1"><i class="fas fa-user-plus"></i> Registracija</router-link></div>
</div>
  </div>
</form>
</div></div>
</template>
<script>
import store from '@/store.js'
export default {
   data(){
    return{
      email:'',
      errorMessage: "",
      password:''
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function() {
          console.log("Logged in pal :) !");
          //this.$router.push({name: 'home'})
        }).catch(error => {
          console.error(error);
          this.errorMessage = error.message;
          //this.$router.push({name: 'home'})
        });
    }
  }
}
</script>

<style lang="css">
.formacss{
   background-size: cover;
   background-image: url("https://i.imgur.com/NPWbOx7.png");
   
}
.btn-login{
  border-radius: 20px;
  width: 200px;
  font-family: verdana;
}
.btn-login1{
  color: white;
}

</style>