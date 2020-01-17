<template>
  <div class="container">
    <form @submit.prevent="obrazac">
      <div class="card row">
        <h4>Osobni podaci</h4>
  <div class="card-body">
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="name">Ime</label>
      <input v-model="ime" type="name" class="form-control" placeholder="Ime" required>
    </div>
    <div class="form-group col-md-4">
      <label for="lastname">Prezime</label>
      <input v-model="prezime" type="lastname" class="form-control"  placeholder="Prezime" required>
    </div>
    <div class="form-group col-md-4">
      <label for="lastname">Email</label>
      <input v-model="email" class="form-control" type="email" placeholder="Email" required>
    </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
    <label for="brtel">Broj telefona</label>
    <input v-model="brtel" type="text" class="form-control"  id="brtel" placeholder="Br. tel" required>
  </div>
  <div class="form-group col-md-6">
    <label for="brtel2">Broj telefona #2</label>
    <input v-model="brtel2" type="text" class="form-control" id="brtel2" placeholder="Neobavezno">
  </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="City">Grad</label>
      <input v-model="grad" type="text" class="form-control"  id="City" required>
    </div>
    <div class="form-group col-md-3">
      <label for="Address">Adresa</label>
    <input v-model="adresa" type="text" class="form-control"  id="Address" required>
    </div>
    <div class="form-group col-md-3">
      <label for="inputZip">Zip</label>
      <input v-model="zip" type="text" class="form-control"  id="inputZip" required>
    </div>
  </div>
</div>
  <hr>
  <h4>Podaci o vozilu</h4>
<div class="row" style="margin-left: 1px;">
  <div class="card-body col-6">
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="input">Odabir radione</label>
      <select v-model="radiona" id="inputState" class="form-control" required>
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
          <label for="year">Godište vozila</label>
          <input v-model="year" type="year" class="form-control" min="1" >
      </div>
  </div>
  <div class="form-row">
      <div class="form-group col-md-6">
          <label for="Date">Željeni datum</label>
          <input v-model="datum" type="date" class="form-control">
      </div>
      <div class="form-group col-md-6">
          <label for="Date">Željeno vrijeme</label>
          <input v-model="vrijeme" type="time" class="form-control" >
      </div>

      <div class="form-group col-md-12 ">
          <label for="Date">Kilometraža</label>
          <input v-model="number" type="number" class="form-control" min="1" >
      </div>
  </div>
 
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="terms">
    <label class="form-check-label" for="terms" required>Prihvaćam <a href="" data-toggle="modal" data-target="#termsmodal">pravila i odredbe</a> korištenja CHC aplikacije</label>
  </div>
</div>

<div class="col-6" style="margin-top: 30px;">
  <h5>Opis kvara</h5>
  <textarea v-model="tekst" id="comment" rows="7"  cols="40">
</textarea>
  </div>

</div>

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
<div class="row">
  <div class="col-6 col-sm-3">
    <h4 style="padding-top: 50px;">Upload slike: </h4></div>
    <div class="col-6 col-sm-3">
          <croppa :width="400" :height="400" v-model="imageData"></croppa></div></div>
</div><!-- card -->
<div>
  <p>{{uploadValue.toFixed()+'%'}}
        <progress class="progress-bar progress-bar-striped progress-bar-animated" style="width:100%" id="progress" :value="uploadValue" max="100" ></progress></p>
    </div>
<button type="submit" class="btn btn-primary float-right" style="margin: 10px;"  name="send-mail" >Posalji</button>
</form>
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
    this.imageData.generateBlob(blobData => {
        if (blobData != null) {
          // ako koristimo "/" u nazivu slike, Storage fino napravi direktorij.
          // Konkretno u ovom primjeru imat ćemo direktorij nazvan po mailu korisnika.
          // Slika će biti nazvana po trenutnom vremenu kako bi imali jedinstveni naziv slike.
          let imageName = this.userEmail + "/" + Date.now() + ".png";
     const storageRef=firebase.storage().ref(imageName).put(blobData)
          
            storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      })
      
            storageRef.then(result => {
              result.ref.getDownloadURL()
                .then(url => {
                  db.collection("noviobrazac2")
                    .add({
                      email: this.userEmail,
                      posted_at: Date.now(),
                      url: url,
                      ime:this.ime,
                      prezime:this.prezime,
                      adresa:this.adresa,
                      grad:this.grad,
                      zip:this.zip,
                      brtel:this.brtel,
                      brtel2:this.brtel2,
                      number:this.number,
                      year:this.year,
                      datum:this.datum,
                      vrijeme:this.vrijeme,
                      tekst:this.tekst,
                      radiona:this.radiona,
                      auto:this.auto,
                      status:"nerješeno"
                    })
                    .then(docRef => {
                      console.log("Document written with ID: ", docRef.id);
                      alert("Uspiješno");
                      this.$router.push({name: 'home'}).catch(err => console.log(err))
                      this.imageData = null;
                      this.ime='',
                      this.prezime='',
                      this.adresa='',
                      this.grad='',
                      this.zip='',
                      this.brtel='',
                      this.brtel2='',
                      this.number='',
                      this.year='',
                      this.datum='',
                      this.vrijeme='',
                      this.tekst='',
                      this.radiona='',
                      this.auto='',
                      this.email='',
                      this.uploadValue=0
                    })
                    .catch(e => {
                      console.error("Error adding document: ", error);
                    });
                })
                .catch(e=> {
                  console.error(e)
                })
            })
            .catch(e => {
              console.error(e)
            })
        }
      }); // da... zatvaranje zagrada nakon ovoga noćna je mora!
  }  
},
mounted(){
  
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
