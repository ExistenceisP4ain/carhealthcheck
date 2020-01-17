<template>
  <div>
    <h1>{{myEmail}} {{myUserType}}</h1>
    <div class="container">
      <div class="row justify-content-center" >
        <div class="card text-center col-sm-6 " style="margin-top:5px;" v-for="userDetails in korisnickipodaci">
          <div class="card-header">
            {{userDetails.email}}
          </div>
          <div class="card-body">
            <p class="card-text">
              Adress:{{userDetails.adresa}}<br>
              City:{{userDetails.grad}}<br>
              Name:{{userDetails.ime}}<br>
              Surname:{{userDetails.prezime}}<br>
              Zip:{{userDetails.zip}}<br>
              Id:{{userDetails.id}}
            </p>
          </div>
          <div class="card-footer text-muted">
            {{ userDetails.posted_at | formatTime }}
          </div>
          
            <button @click="editComment(userDetails)" type="button" class="btn btn-primary" data-toggle="modal" data-target="#commentModal">
              Napomena
            </button>
          
        </div>
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
            <textarea placeholder="comment" v-model="napomena"></textarea>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button @click="saveComment()" type="submit" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>      
    </div>
  </div>
</template>
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
    // fetch user addresses
    db.collection("obrazac").where("posted_at", ">=", 1)
      .get()
      .then(querySnapshot => {
     
        querySnapshot.forEach(doc => {
          console.log(doc.id, " => ", doc.data());
          this.korisnickipodaci.push(Object.assign({}, doc.data(), {
            id: doc.id
          }));
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
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
      this.napomena = userDetails.comment || ''; 
      this.aktivnikorisnik = userDetails.id; 
    },
    saveComment() {
      let id = this.aktivnikorisnik;
      if (!id) {
        alert('Fail');
        return;
      }
      db.collection("obrazac")
        .doc(this.aktivnikorisnik)
        .update({
          comment: this.napomena
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