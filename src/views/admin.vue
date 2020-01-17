<template>
  <div>
      <div class="row justify-content-center" style="margin: 20px;">
<table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Ime</th>
      <th scope="col">Prezime</th>
      <th scope="col">Id</th>
      <th scope="col">Grad</th>
      <th scope="col">Adresa</th>
      <th scope="col">Zip</th>
      <th scope="col">Slike</th>
      <th scope="col">Postavljeno</th>
      <th scope="col">Napomena:</th>
      <th scope="col">Status:</th>
    </tr>
  </thead>
  <tbody v-for="userDetails in korisnickipodaci" >
    <tr>
      <th scope="row">{{userDetails.ime}}</th>
      <td>{{userDetails.prezime}}</td>
      <td>{{userDetails.id}}</td>
      <td>{{userDetails.grad}}</td>
      <td>{{userDetails.adresa}}</td>
      <td>{{userDetails.zip}}</td>
      <td><button v-if="userDetails.url>='1'" @click="prikazSlike(userDetails);" type="button" class="btn btn-primary" data-toggle="modal" data-target="#picModal">Prikaži</button>
  <p v-else-if="userDetails.url!=='1'"><i class="fas fa-ban"></i></p></td><!--<img :src="userDetails.url">-->
      <td>{{ userDetails.posted_at | formatTime }}</td>
      <button @click="editComment(userDetails);" type="button" style="margin: 12px;" class="btn btn-primary" data-toggle="modal" data-target="#commentModal">
              Napomena
            </button>
      <td v-if="userDetails.status=='odobreno'"><span class="badge badge-success">Odobreno</span><!-- odobreno stupac-->
      </td>
      <!-- -->
      <td v-else-if="userDetails.status=='odbijeno'"><span class="badge badge-danger">Odbijeno</span></td>
      <td v-else-if="userDetails.status=='promjenatermina'"><span class="badge badge-warning">Ponuđen drugi termin</span></td>
      <td v-else-if="userDetails.status=='rijeseno'"><span class="badge badge-warning">rijeseno</span></td>
      <td v-else><span class="badge badge-info">Nerješeno</span></td>
      <!-- Modal -->
<div class="modal fade" id="picModal" tabindex="-1" role="dialog" aria-labelledby="picModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content" style="display:inline-block;">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <img class="modal-content" :src="url">
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Zatvori</button>
      </div>
    </div>
  </div>
</div>
    </tr>
  </tbody>
</table>
        <div class="card text-center col-sm-6 " style="margin-top:5px;" v-if="hasNoUserDetails">
          <div class="card-header">
            Nema korisnika
          </div>
          <div class="card-body">
            <p class="card-text">
              Nema podataka
            </p>
          </div>
        </div>
      </div>

    <div class="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="commentModalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="commentModalLongTitle">Unesi napomenu</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
            <h2>
              {{ime}} {{prezime}}<br>
              Email:
              {{email}}
              </h2>
              <h3>
              Auto: {{auto}}<br>
              Kilometri: {{number}}</h3>
              <br>
              Opis kvara od korisnika:
              <textarea placeholder="Opis kvara" rows="2" cols="50" v-model="tekst" disabled></textarea>
              Napomena od mehaničara:
              <textarea placeholder="comment" rows="5" cols="50" v-model="napomena" name="opis"></textarea>
<hr>

<div class="form-check">
  <input class="form-check-input" v-model="status" type="radio" name="stanje" id="stanjeradio" value="odobreno">
  <label class="form-check-label" for="stanjeradio">
    <span class="badge badge-success">Odobreno</span>
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" v-model="status" type="radio" name="stanje" id="stanjeradio2" value="odbijeno">
  <label class="form-check-label" for="stanjeradio2">
    <span class="badge badge-danger">Odbijeno</span>
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" v-model="status" type="radio" name="stanje" id="stanjeradio3" value="promjenatermina">
  <label class="form-check-label" for="stanjeradio3">
   <span class="badge badge-warning">Promjena termina</span>
  </label>
</div><hr>
<div class="row">
<div class="form-group col-md-4">
          <label for="Date">Datum</label>
          <input v-model="datum" type="date" class="form-control" name="datum">
      </div>
      <div class="form-group col-md-4">
          <label for="Date">Vrijeme</label>
          <input v-model="vrijeme" type="time" class="form-control" name="vrijeme">
      </div>
      <div class="form-group col-md-4">
      <label for="input">Radiona</label>
      <select v-model="radiona" id="inputState" class="form-control" required>
        <option selected disabled>Izaberi</option>
        <option>Pula</option>
        <option>Zagreb</option>
      </select>
    </div>
  </div>
  <!--<button v-model="status" type="button" data-toggle="tooltip" data-placement="top" title="Označiti ćete kvar kao riješen (!)" class="btn btn-success btn-lg btn-block">Označi kao riješeno</button>-->
          <hr><input class="form-check-input" v-model="status" type="radio" name="stanje" id="finishedfix" value="rijeseno">
  <label class="form-check-label btn btn-dark" for="finishedfix">Prijava riješena u potpunosti</label>

  </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button @click="saveComment()" type="submit" class="btn btn-primary" name="send-mail">Save</button>
          </div>
        </div>
      </div>      
    </div>
  </div>
</template>
<style lang="scss">
  @media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; }
	
	td { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
	}
	
	td:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: -40px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
/*td:nth-of-type(1):before { content: "IME"; }
	td:nth-of-type(2):before { content: "PREZIME"; }
	td:nth-of-type(3):before { content: "ID"; }
	td:nth-of-type(4):before { content: "grad"; }
	td:nth-of-type(5):before { content: "adresa"; }
	td:nth-of-type(6):before { content: "zip"; }
	td:nth-of-type(7):before { content: "slike"; }*/
}
</style>
<script>
import moment from 'moment'
import store from '@/store.js'
export default{
  data(){
    return store
  },
  computed: {
    hasNoUserDetails() {
      return this.korisnickipodaci.length == 0;
    }
  },
  mounted(){
    
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.myEmail=user.email;
        db.collection("korisnici")
          .doc(this.myEmail)
          .get()
          .then(doc => {
            if (doc.exists) {
              this.myUserType = doc.data().tipKorisnika;
            } else {
              console.log("Nema podataka");
            }
          });
      }
    });
    
  },
  filters: {
    formatTime: function(value) {
      return moment(value).format('MMMM Do YYYY, h:mm:ss a')
    }
  },
  methods: {
    editComment(userDetails) {
      $('#commentModal').modal('show');
      this.napomena = userDetails.comment || ''
      this.ime = userDetails.ime
      this.status = userDetails.status || ''
      this.aktivnikorisnik = userDetails.id 
      this.vrijeme=userDetails.vrijeme
      this.datum=userDetails.datum
      this.auto=userDetails.auto
      this.prezime=userDetails.prezime
      this.radiona=userDetails.radiona
      this.number=userDetails.number
      this.tekst=userDetails.tekst
      this.zip=userDetails.zip
      this.email=userDetails.email
    },
    prikazSlike(userDetails) {
     // $('#picModal').modal('show'); 
      this.url=userDetails.url
    },
    saveComment() {
      let id = this.aktivnikorisnik;
      if (!id) {
        alert('Fail');
        return;
      }
      db.collection("noviobrazac2")
        .doc(this.aktivnikorisnik)
        .update({
          comment: this.napomena,
          status: this.status,
          vrijeme:this.vrijeme,
          datum:this.datum,
          radiona:this.radiona,
        })
        .then(function() {
          $('#commentModal').modal('hide');
          console.log("Document successfully written!");
          
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    }
  }
};
</script>