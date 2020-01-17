<template>
  <div class="forma container jumbotron" style="padding: 10px; margin-top: 10px;" >
   <form @submit.prevent="obrazac1">
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="input">Odabir radione</label>
      <select v-model="odabirgrada" id="inputState" class="form-control" required>
        <option selected disabled>Izaberi</option>
        <option>Pula</option>
        <option>Zagreb</option>
      </select>
    </div>
    <div class="form-group col-md-4">
      <label for="input">Marka auta</label>
      <select v-model="auto" id="inputState" class="form-control" required>
        <option selected disabled>Izaberi</option>
        <option>Toyota</option>
        <option>Hyundai</option>
        <option>Citroen</option>
        <option>Peugeot</option>
        <option>BMW</option>
        <option>Opel</option>
      </select>
    </div>
    <div class="form-group col-md-4">
          <label for="Date">Kilometraža</label>
          <input v-model="number" type="number" class="form-control" name="quantity" min="1" >
      </div>
  </div>
  <div class="form-row">
      <div class="form-group col-md-6">
          <label for="Date">Željeni datum</label>
          <input v-model="datum" type="date" class="form-control" name="day">
      </div>
      <div class="form-group col-md-6">
          <label for="Date">Željeno vrijeme</label>
          <input v-model="vrijeme" type="time" class="form-control" name="usr_time">
      </div>
  </div>
  <div class="form-group">
    <label for="kvar">Upišite kvar auta</label>
    <textarea v-model="tekst" class="form-control" rows="5" id="comment"></textarea>
  </div><div class="form-check">
    <input type="checkbox" class="form-check-input" id="terms">
    <label class="form-check-label" for="terms" required>Prihvaćam <a href="" data-toggle="modal" data-target="#termsmodal">pravila i odredbe</a> korištenja CHC aplikacije</label>
  </div><br>
  <button type="submit" class="btn btn-primary">Prihvati</button>
</form>
<!-- Modal -->
<div class="modal fade" id="termsmodal" tabindex="-1" role="dialog" aria-labelledby="termsmodalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="termsmodalLongTitle">Pravila i uvjeti korištenja CHC APP</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        YES
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>
<script>
import obrazac from './obrazac.vue'
import store from '@/store.js'
export default {
   components: {
    obrazac
  },
  data(){
    return store
  },
  methods:{
    obrazac1(){
      db.collection("prijavakvara").add({
        number:this.number,
        datum:this.datum,
        vrijeme:this.vrijeme,
        tekst:this.tekst,
        email: this.userEmail,
        grad:this.odabirgrada,
        auto:this.auto,
        posted_at: Date.now()
    })
  }
}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
