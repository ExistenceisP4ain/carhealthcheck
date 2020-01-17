<template>
    <div style="margin: 20px;">
        <table class="table table-dark">
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
    </tr>
  </thead>
  <tbody :key="a.id" v-for="a in oof">
    <tr>
      <th scope="row">{{a.ime}}</th>
      <td>{{a.prezime}}</td>
      <td>{{a.id}}</td>
      <td>{{a.grad}}</td>
      <td>{{a.adresa}}</td>
      <td>{{a.zip}}</td>
      <td><a v-if="a.url>='1'" :href="a.url">Prikaži</a>
  <p v-else-if="a.url!=='1'"><i class="fas fa-ban"></i></p></td>
      <td>{{ a.posted_at | formatTime }}</td>
    </tr>
  </tbody>
</table>
        </div>
</template>

<script>
import moment from 'moment'
import store from '@/store.js'
export default{
  data(){
    return {
      ime:'',
      prezime:'',
      id:'',
      grad:'',
      adresa:'',
      zip:'',
      posted_at:'',
      url1:'',
      oof:[]
    }
  },
  filters: {
    formatTime: function(value) {
      return moment(value).format('MMMM Do YYYY, h:mm:ss a')
    }
  },
  created(){
      db.collection('noviobrazac2').where("status", "==", "rijeseno")
      .onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
              const data = change.doc.data()
             this.oof.unshift(Object.assign({}, data, {
            id: change.doc.id
          }));            
          });
      })
  }
}
</script>
<!--
db.collection("noviobrazac2").orderBy("posted_at").onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
            if (change.type === "added") {
              const data = change.doc.data()
                this.korisnickipodaci.unshift(Object.assign({}, data, {
            id: change.doc.id
          }));
            }
            if (change.type === "modified") {
              this.cards=change.doc.data().comment
      } 
        });
    });

    db.collection('noviobrazac2').where("status", "==", "rijeseno")
      .onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
              const data = change.doc.data()
          });
      })
  }-->