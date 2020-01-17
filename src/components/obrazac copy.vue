<template>
  <div class="forma container">
   <form @submit.prevent="obrazac">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="name">Ime</label>
      <input v-model="ime" type="name" class="form-control" placeholder="Ime" required>
    </div>
    <div class="form-group col-md-6">
      <label for="lastname">Prezime</label>
      <input v-model="prezime" type="lastname" class="form-control"  placeholder="Prezime" required>
    </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
    <label for="brtel">Broj telefona</label>
    <input v-model="brtel" type="text" class="form-control" id="brtel" placeholder="Br. tel" required>
  </div>
  <div class="form-group col-md-6">
    <label for="brtel2">Broj telefona #2</label>
    <input v-model="brtel2" type="text" class="form-control" id="brtel2" placeholder="Neobavezno">
  </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="City">Grad</label>
      <input v-model="grad" type="text" class="form-control" id="City" required>
    </div>
    <div class="form-group col-md-3">
      <label for="Address">Adresa</label>
    <input v-model="adresa" type="text" class="form-control" id="Address" required>
    </div>
    <div class="form-group col-md-3">
      <label for="inputZip">Zip</label>
      <input v-model="zip" type="text" class="form-control" id="inputZip" required>
    </div>
  </div>
  <button type="submit" class="btn btn-primary float-left">Spremi</button>
</form>
<router-link to="/prijavakvara" class="btn btn-primary float-right">Dalje</router-link>
  </div>
</template>
<script>
import store from '@/store.js'
export default {
  name: 'obrazac',
  data(){
    return store
  },
  methods:{
    obrazac(){
      db.collection("obrazac").add({
        ime:this.ime,
        prezime:this.prezime,
        adresa:this.adresa,
        grad:this.grad,
        zip:this.zip,
        brtel:this.brtel,
        brtel2:this.brtel2,
        email: this.userEmail,
        posted_at: Date.now()
    })
  }
}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
