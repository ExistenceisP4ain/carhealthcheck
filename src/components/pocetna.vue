<template>
<div>
  <h1 >CarHealthApp</h1>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner container">
    <div class="carousel-item active">
      <img class="d-block w-100" src="1.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="2.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="3.jpeg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<!--Section: Contact v.1-->
<section class="section pb-5 jumbotron" style="margin-top:15px;">

  <!--Section heading-->
  <h2 class="section-heading h1 pt-4 text-center">Kontaktirajte nas</h2>
  <!--Section description-->
  <h5 class="section-description pb-4">Prijava kvara - ispunite jednostavnu formu s vašim podacima te opisom kvara u manje od 5 minuta!<br>
  Sačekajte odgovor mehaničara. U 99% slučajeva odgovor slijedi unutar 2 sata!<br>
  Provjerite odgovor mehaničara te status na stranici Status kvara, te prihvatite ili odbijte ponuđeni odgovor.</h5>

  <div class="row">

    <!--Grid column-->
    <div class="col-lg-5 mb-4">

      <!--Form with header-->
      <div class="card">

        <div class="card-body" style="text-align:left;">
          <!--Header-->
          <div class="form-header blue accent-1">
            <h3><i class="fas fa-envelope"></i>Pišite nam:</h3>
          </div>
          <br>

          <!--Body-->
          <div class="md-form">
            <i class="fas fa-user prefix grey-text"></i>
            <input type="text" id="form-name" class="form-control" v-model="ime" name="ime-prezime" required>
            <label for="form-name">Ime i prezime</label>
          </div>

          <div class="md-form">
            <i class="fas fa-envelope prefix grey-text"></i>
            <input type="text" id="form-email" class="form-control" name="email" v-model="email" required>
            <label for="form-email">Email</label>
          </div>
          <div class="md-form">
            <i class="fas fa-tag prefix grey-text"></i>
            <input type="text" id="form-Subject" class="form-control" name="naslov" v-model="naslov" required>
            <label for="form-Subject">Naslov</label>
          </div>
          <div class="md-form">
            <i class="fas fa-pencil-alt prefix grey-text"></i>
            <textarea id="form-text" class="form-control md-textarea" name="opis" rows="3" v-model="tekst"></textarea>
            <label for="form-text">Opis</label>
          </div>
          <div class="col-md-12">
          <fieldset class="rating">
    <input v-model="recenzija" type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="5"></label>
    <input v-model="recenzija" type="radio" id="star4half" name="rating" value="4.5" /><label class="half" for="star4half" title="4.5"></label>
    <input v-model="recenzija" type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="4"></label>
    <input v-model="recenzija" type="radio" id="star3half" name="rating" value="3.5" /><label class="half" for="star3half" title="3.5"></label>
    <input v-model="recenzija" type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="3"></label>
    <input v-model="recenzija" type="radio" id="star2half" name="rating" value="2.5" /><label class="half" for="star2half" title="2.5"></label>
    <input v-model="recenzija" type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="2"></label>
    <input v-model="recenzija" type="radio" id="star1half" name="rating" value="1.5" /><label class="half" for="star1half" title="1.5"></label>
    <input v-model="recenzija" type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="1"></label>
    <input v-model="recenzija" type="radio" id="starhalf" name="rating" value="0.5" /><label class="half" for="starhalf" title="0.5"></label>
</fieldset></div>
<div class="col-md-12 float-left">
     <div class="form-check">
    <input type="checkbox" class="form-check-input" required name="terms">
    <label class="form-check-label" data-toggle="modal" data-target="#pravilamodal">Prihvaćam <a href="#">uvjete i pravila korištenja</a></label>
  </div>
  <div class="modal fade" id="pravilamodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Terms and Conditions for CarHealthCheck</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

<h2>Introduction</h2> 
  
<p>These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, CarHealthCheck accessible at carhc.com.</p>

<p>These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions. These Terms and Conditions have been generated with the help of the <a href="https://www.termsandcondiitionssample.com">Terms And Conditions Template</a> and the <a href="https://www.privacypolicygenerator.org">Privacy Policy Generator</a>.</p>

<p>Minors or people below 18 years old are not allowed to use this Website.</p>

<h2>Intellectual Property Rights</h2>

<p>Other than the content you own, under these Terms, CarHealthCheck and/or its licensors own all the intellectual property rights and materials contained in this Website.</p>

<p>You are granted limited license only for purposes of viewing the material contained on this Website.</p>

<h2>Restrictions</h2>

<p>You are specifically restricted from all of the following:</p>

<ul>
    <li>publishing any Website material in any other media;</li>
    <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
    <li>publicly performing and/or showing any Website material;</li>
    <li>using this Website in any way that is or may be damaging to this Website;</li>
    <li>using this Website in any way that impacts user access to this Website;</li>
    <li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
    <li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
    <li>using this Website to engage in any advertising or marketing.</li>
</ul>

<p>Certain areas of this Website are restricted from being access by you and CarHealthCheck may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.</p>

<h2>Your Content</h2>

<p>In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant CarHealthCheck a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p>

<p>Your Content must be your own and must not be invading any third-party’s rights. CarHealthCheck reserves the right to remove any of Your Content from this Website at any time without notice.</p>

<h2>Your Privacy</h2>

<p>Please read Privacy Policy.</p>

<h2>No warranties</h2>

<p>This Website is provided "as is," with all faults, and CarHealthCheck express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p>

<h2>Limitation of liability</h2>

<p>In no event shall CarHealthCheck, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  CarHealthCheck, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>

<h2>Indemnification</h2>

<p>You hereby indemnify to the fullest extent CarHealthCheck from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p>

<h2>Severability</h2>

<p>If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p>

<h2>Variation of Terms</h2>

<p>CarHealthCheck is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</p>

<h2>Assignment</h2>

<p>The CarHealthCheck is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</p>

<h2>Entire Agreement</h2>
    
<p>These Terms constitute the entire agreement between CarHealthCheck and you in relation to your use of this Website, and supersede all prior agreements and understandings.</p>

<h2>Governing Law & Jurisdiction</h2>

<p>These Terms will be governed by and interpreted in accordance with the laws of the State of hr, and you submit to the non-exclusive jurisdiction of the state and federal courts located in hr for the resolution of any disputes.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  </div>
          <div class="text-center mt-4">
            <button class="btn btn-info my-2 my-sm-0 mr-2" name="send-mail" @click="pohrana()">Submit</button>
          </div>
        </div>
      </div>
      <!--Form with header-->
    </div>
    <!--Grid column-->
    <!--Grid column-->
    <div class="col-lg-7">
      <!--Google map-->
      <div id="map-container-google-11" class="z-depth-1-half map-container-6" style="height: 400px">
        <iframe src="https://maps.google.com/maps?q=pula&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
      <br>
      <!--Buttons-->
      <div class="row text-center">
        <div class="col-md-4">
          <a class="btn-floating blue accent-1"><i class="fas fa-map-marker-alt"></i></a>
          <p>Pula</p>
          <p>Hrvatska</p>
        </div>

        <div class="col-md-4">
          <a class="btn-floating blue accent-1"><i class="fas fa-phone"></i></a>
          <p>08000800</p>
          <p>Pon - Pet, 8:00-22:00</p>
        </div>

        <div class="col-md-4">
          <a class="btn-floating blue accent-1"><i class="fas fa-envelope"></i></a>
          <p>zeljka1405@gmail.com</p>
          <p>bozena.matak699@gmail.com</p>
        </div>
      </div>

    </div>
    <!--Grid column-->

  </div>

</section>
<!--Section: Contact v.1-->
</div>
</template>
<script>
import store from '@/store'
export default {
  name:'pocetna',
  data(){
    return store
  },
  mounted(){
    
  },
  methods:{
    pohrana(){
      // Add a new document with a generated id.
db.collection("pocetna").add({
    ime:this.ime,
    email:this.email,
    naslov:this.naslov,
    opis:this.tekst,
    recenzija:this.recenzija
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
    }
  }
  }
</script>
<style lang="scss">
@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);
fieldset, label { margin: 0; padding: 0; }


/****** Style Star Rating Widget *****/

.rating { 
  border: none;
  float: left;
}

.rating > input { display: none; } 
.rating > label:before { 
  margin: 5px;
  font-size: 1.25em;
  font-family: FontAwesome;
  display: inline-block;
  content: "\f005";
}

.rating > .half:before { 
  content: "\f089";
  position: absolute;
}

.rating > label { 
  color: #ddd; 
 float: right; 
}
.rating > input:checked ~ label, /* show gold star when clicked */
.rating:not(:checked) > label:hover, /* hover current star */
.rating:not(:checked) > label:hover ~ label { color: #FFD700;  } /* hover previous stars in list */

.rating > input:checked + label:hover, /* hover current star when changing rating */
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label, /* lighten current selection */
.rating > input:checked ~ label:hover ~ label { color: #FFED85;  } 

/*.glow {
  font-size: 80px;
  color: #fff;
  text-align: center;
  -webkit-animation: glow 3s ease-in-out infinite alternate;
  -moz-animation: glow 3s ease-in-out infinite alternate;
  animation: glow 3s ease-in-out infinite alternate;
}
@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00BFFF, 0 0 40px #00BFFF, 0 0 50px #00BFFF, 0 0 60px #00BFFF, 0 0 70px #00BFFF;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px 	#0000FF, 0 0 40px 	#0000FF, 0 0 50px 	#0000FF, 0 0 60px 	#0000FF, 0 0 70px 	#0000FF, 0 0 80px 	#0000FF;
  }
}*/
.map-container-6{
overflow:hidden;
padding-bottom:56.25%;
position:relative;
height:0;
}
.map-container-6 iframe{
left:0;
top:0;
height:100%;
width:100%;
position:absolute;
}
$easeInOutQuad: cubic-bezier(0.455, 0.030, 0.515, 0.955);
h1 {
  color:white;
  font-size:2em;
  text-align:center;
  animation: neonGlow 2s infinite alternate $easeInOutQuad;
}

@keyframes neonGlow {
  0% {
    text-shadow: 0 0 10px rgba(255,255,255,.8),
                 0 0 20px rgba(255,255,255,.8),
                 0 0 22px  rgba(255,255,255,.8),
                 0 0 40px  rgba(66,220,219,.8),
                 0 0 60px  rgba(66,220,219,.8),
                 0 0 80px  rgba(66,220,219,.5),
                 0 0 100px rgba(66,220,219,.5),
                 0 0 140px rgba(66,220,219,.5),
                 0 0 200px rgba(66,220,219,.5);
  }
  100% {
    text-shadow: 0 0 2px rgba(255,255,255,.8),
                 0 0 8px rgba(255,255,255,.8),
                 0 0 10px rgba(255,255,255,.8),
                 0 0 20px rgba(66,220,219,.8),
                 0 0 30px rgba(66,220,219,.8),
                 0 0 40px rgba(66,220,219,.8),
                 0 0 50px rgba(66,220,219,.5),
                 0 0 80px rgba(66,220,219,.5);
  }
}

</style>