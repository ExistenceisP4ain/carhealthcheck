<template>
<div>
    <h2>Vaše prijave</h2>
    <div  v-for="podaci in stanjepodaci">
    <div v-if="stanje==podaci.email">
        <div class="card text-center container" style="margin-bottom: 30px;">
  <div v-if="podaci.status=='odobreno'" class="card-header" style="background-color: green;">
    {{podaci.email}}
  </div>
  <div v-else-if="podaci.status=='odbijeno'" class="card-header" style="background-color: red;">
    {{podaci.email}}
  </div>
  <div v-else-if="podaci.status=='promjenatermina'" class="card-header" style="background-color: yellow;">
    {{podaci.email}}
  </div>
  <div v-else-if="podaci.status=='rijeseno'" class="card-header" style="background-color: lightblue;">
    {{podaci.email}}
  </div>
  <div v-else class="card-header">
    {{podaci.email}}
  </div>
  <div class="card-body ">
    <h5 class="card-title"></h5>
    
    <div v-if="podaci.status=='rijeseno'" class="row">
    <p class="card-text col-6 col-sm-6">
              Ime:{{podaci.ime}} <br> 
              Prezime:{{podaci.prezime}}<br>
              tel:{{podaci.brtel}} <br>
              tel2:{{podaci.brtel2}}<br>
              email:{{podaci.email}}<br>
              Grad: {{podaci.grad}}, {{podaci.zip}}<br>
              Adresa: {{podaci.adresa}}<br>
              
              Radiona:{{podaci.radiona}}<br>
              Vozilo:{{podaci.auto}}<br>
              Godište: {{podaci.year}}<br>
              Prijeđeni km:{{podaci.number}}<br>
              Željeni termin: {{podaci.datum}} - {{podaci.vrijeme}}<br>
              Opis kvara: {{podaci.tekst}}<br>
              </p>
              <div v-if="podaci.status=='rijeseno'" class="alert alert-info col-6 col-sm-6 content-justify-center" role="alert" style="display: inline-block" >
      <h3>Prijava je riješena !</h3><h4> Zahvaljujemo na Vašem povjerenju.</h4>
      <h5>Kako biste ocijenili vaše iskustvo?</h5><br>
      <label for="imereview" class="h5">Ime i prezime:</label>
      <input v-model="ime" type="email" class="form-control" required id="imereview" aria-describedby="imereveiew" :placeholder="podaci.ime+' '+podaci.prezime" >
      <br><h5>Ocjena: </h5>
      <form @submit.prevent="review">
      <div class="rate" style="margin-left: 170px; ">
   <fieldset class="rating">
    <input v-model="star" type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="5"></label>
    <input v-model="star" type="radio" id="star4half" name="rating" value="4.5" /><label class="half" for="star4half" title="4.5"></label>
    <input v-model="star" type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="4"></label>
    <input v-model="star" type="radio" id="star3half" name="rating" value="3.5" /><label class="half" for="star3half" title="3.5"></label>
    <input v-model="star" type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="3"></label>
    <input v-model="star" type="radio" id="star2half" name="rating" value="2.5" /><label class="half" for="star2half" title="2.5"></label>
    <input v-model="star" type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="2"></label>
    <input v-model="star" type="radio" id="star1half" name="rating" value="1.5" /><label class="half" for="star1half" title="1.5"></label>
    <input v-model="star" type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="1"></label>
    <input v-model="star" type="radio" id="starhalf" name="rating" value="0.5" /><label class="half" for="starhalf" title="0.5"></label>
</fieldset>
  </div>
      <textarea v-model="text" class="form-control rounded-0" id="exampleFormControlTextarea1" rows="4"></textarea>
      <br><button type="submit" class="btn btn-outline-primary">Pošalji</button> 
  </form>
    </div>
  </div>
  <div v-else-if="podaci.status=='promjenatermina'" class="row">
    <p class="card-text col-6 col-sm-6" style="border: 1px solid black;">
              Ime: {{podaci.ime}} <br> 
              Prezime: {{podaci.prezime}}<br>
              tel: {{podaci.brtel}} <br>
              tel2: {{podaci.brtel2}}<br>
              email:{{podaci.email}}<br>
              Grad: {{podaci.grad}}, {{podaci.zip}}<br>
              Adresa: {{podaci.adresa}}<br>
              Opis kvara: {{podaci.tekst}}<br>
              </p>
    <p class="card-text col-6 col-sm-6" style="border: 1px solid black; margin-bottom: 16px;">
              <span class="badge badge-warning">Zahtjev je izmjenjen</span><br>
              {{podaci.comment}}<br>
              Vozilo: {{podaci.auto}} -  {{podaci.year}} god.<br>
              Prijeđeni km: {{podaci.number}} km<br>
              Radiona: {{podaci.radiona}}<br>
              Termin: {{podaci.datum}} - {{podaci.vrijeme}}h<br>
<button @click="prihvacentermin" type="button" class="btn btn-outline-success">Prihvati</button>
<button @click="odbijentermin" type="button" class="btn btn-outline-danger">Odbij</button>
              </p>
  </div>
  <div v-else class="row">
    <p class="card-text col-6 col-sm-6">
              Ime:{{podaci.ime}} <br> 
              Prezime:{{podaci.prezime}}<br>
              tel:{{podaci.brtel}} <br>
              tel2:{{podaci.brtel2}}<br>
              email:{{podaci.email}}<br>
              Grad: {{podaci.grad}}, {{podaci.zip}}<br>
              Adresa: {{podaci.adresa}}<br>
              </p>
    <p class="card-text col-6 col-sm-6">
              Radiona:{{podaci.radiona}}<br>
              Vozilo:{{podaci.auto}}<br>
              Godište: {{podaci.year}}<br>
              Prijeđeni km:{{podaci.number}}<br>
              Željeni termin: {{podaci.datum}} - {{podaci.vrijeme}}<br>
              Opis kvara: {{podaci.tekst}}<br>
              </p>
  </div>
  </div><!-- card -->  
  <div class="card-footer text-muted">
    {{ podaci.posted_at | formatTime }}
    <span v-if="podaci.status=='odobreno'" class="badge badge-success">Odobreno</span>
    <span v-if="podaci.status=='odbijeno'" class="badge badge-danger">Odbijeno</span>
    <div v-if="podaci.comment>='1' && podaci.status!='promjenatermina'"><!-- ako je mehanicar odgovorio prikazat ce se njegov odgovor -->
      <hr>
    <p style="color: blue;">Odgovor Mehaničara: </p>
  <p>{{podaci.comment}}</p></div>
  </div>
  <img :src="podaci.url">
</div>
    
    </div>
    </div>
    <!-- Modal -->
<div class="modal fade" id="ratingmodal" tabindex="-1" role="dialog" aria-labelledby="ratingmodalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ratingmodalLabel">Recenzija zaprimljena !</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Hvala na recenziji :)
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
import store from '@/store.js'
import moment from 'moment'
export default {
    data(){
        return store
    },
    methods:{
    review(){
      db.collection("recenzije2").add({
        email:this.userEmail,
        ime:this.ime,
        star:this.star,
        text:this.text,
        posted_at: Date.now()
    }).then(function() {
            $('#ratingmodal').modal('show');
          console.log("Recenzija zaprimljena!");
        })
        .catch(function(error) {
          console.error("Desila se greska: ", error);
        });
  },
  prihvacentermin() {
    this.aktivnikorisnik = userDetails.id;
     /* let id = this.aktivnikorisnik;
      if (!id) {
        alert('Fail');
        return;
      }*/
      db.collection("noviobrazac2")
        .doc(this.aktivnikorisnik)
        .update({
          prihvacennovitermin: '1'
        })
        .then(function() {
          console.log("Uspjesno prihvacen termin !");
        })
        .catch(function(error) {
          console.error("Oopsie: ", error);
        });
    }
},
    mounted(){
        firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.stanje=user.email;
        console.log(this.stanje)
      }
    });

     db.collection("noviobrazac2").orderBy("posted_at").onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
            if (change.type === "added") {
              const data = change.doc.data()
              if (data.email==this.stanje) {
                this.stanjepodaci.unshift(change.doc.data())
              }
            }
        });
    });
    },
    filters: {
    formatTime: function(value) {
      return moment(value).format('MMMM Do YYYY, h:mm:ss a')
    }
  }
}
</script>
<style scoped>

</style>