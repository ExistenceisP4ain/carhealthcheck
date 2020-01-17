<template>
<div class="container">
 

<div class="row justify-content-center" style="margin: 20px;">
  
      <form @submit.prevent="signup" class="jumbotron">
        
      <h2 class="text-center mb-5">Registracija novog korisnika</h2>
       <div class="row">
    <div class="col">
      <div v-if="errorMessage" class="alert alert-danger">
            <strong>Ups!</strong>
            {{ errorMessage }}
          </div>
    </div>
  </div>
        <div class="form-group">
          <input v-model="email" type="email" class="form-control" id="emailField" style="border-radius: 10px; font-family: Courier;" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <input v-model="password" type="password" class="form-control" style="border-radius: 10px; font-family: Courier;" id="passwordField" placeholder="Password">
        </div>
        <div class="form-group">
          <input v-model="passwordAgain" type="password" class="form-control" style="border-radius: 10px; font-family: Courier;" id="confirmPasswordField" placeholder="Confirm password">
        </div>
        <div class="form-group">
            <label for="tipKorisnika">Tip korisnika</label>
            <select
              v-model="odabraniKorisnik"
              id="tipKorisnika"
              class="form-control form-control-lg" required>
              <option :key="k" v-for="k in tipKorisnika">{{k}}</option>
            </select>
          </div>
        <button type="submit" class="btn btn-primary mt-5">Registriraj</button>
      </form>
    </div>
  </div>

</template>
<style lang="css">

.btn-reg{
  border-radius: 10px; font-family: Courier;
}
</style>
<script>
import store from "../store";
export default {
  data(){
    return{
      email:'',
      password:'',
      passwordAgain:'',
      odabraniKorisnik:'',
      errorMessage: "",
      tipKorisnika:["Mehaničar"]
    };
  },
  methods:{
    signup(){
      if(this.password!==this.passwordAgain||this.passwordAgain!==this.password){
        alert("Lozinke se ne podudaraju!");
        console.log(error)
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // postavi podatke o korisniku
          // ovdje ide kod nakon POVRATKA UPITA za ragistraciju i to ako nije prošlo
          let id = this.email;
          // sada moramo spremiti te dodatne podatke
          // Add a new document in collection "cities"

          db.collection("korisnici")
            .doc(id)
            .set({
              tipKorisnika: this.odabraniKorisnik
            })
            .then(function() {
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
        })
        .catch(error => {
          // ovdje ide kod nakon POVRATKA UPITA za ragistraciju i to ako nije prošlo
          console.error(error);
          this.errorMessage = error.message;
        });

    }
  }
};
</script>