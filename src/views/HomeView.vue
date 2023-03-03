<script>


import { RouterLink } from "vue-router"
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where
} from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-firestore.js'
import {
  getStorage,
  ref,
  getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-storage.js'

import { getAuth } from 'https://www.gstatic.com/firebasejs/9.17.0/firebase-auth.js'

// Import emetteur de main.js
import { emitter } from '../main'
import Planet from "../components/Planet.vue"
import Header from "../components/header.vue"




export default {
    name:"App",
    components: { RouterLink, Planet, Header },
  data() {
    return {
        nom:null, // Pour la création d'un nouveau pays
                listeLogicielDesignSynchro:[], // Liste des pays synchronisée - collection pays de Firebase

      menuOuvert: false,
      listeLogicielDevSynchro:[], // Liste des pays synchronisée - collection pays de Firebase

      user:{              // User connecté
        email:null,
        password:null
      },
      userInfo:null,      // Informations complémentaires user connecté
      name:"Vidéo",       // Titre de l'application ou nom du user
      isAdmin:false       // Si l'utilisateur est ou non administrateur
    }
  },
  mounted(){
  
    // Vérifier si un user connecté existe déjà
    // Au lancement de l'application
    this.getUserConnect();



    // Ecoute de l'évènement de connexion
    emitter.on('connectUser', e => {
      // Récupération du user
      this.user = e.user;
//      console.log('App => Reception user connecté', this.user);
      // Recherche infos complémentaires du user
      this.getUserInfo(this.user);      
    })        
    
    // Ecoute de l'évènement de deconnexion
    emitter.on('deConnectUser', e => {
      // Récupération user 
      this.user = e.user;
//      console.log('App => Reception user deconnecté', this.user);
      // Réinitialisation infos complémentaires user
      this.userInfo   = null;
      this.name       = 'Vidéo';
      this.isAdmin    = false;
    })
  },
  methods:{
    // Obtenir les informations du user connecté
    async getUserConnect(){
      await getAuth().onAuthStateChanged(function(user) { 
        if(user) {
            // Récupération du user connecté
            this.user = user;
            // Recherche de ses infos complémentaires
            this.getUserInfo(this.user);   
        } 
      }.bind(this));
      // Noter le bind(this), cas des zones isolées
      // lors de 2 strucutres imbiquées, Vue perd la visibilité
      // des données
      // On les ré injecte par le mot-clef this
    },

    async getUserInfo(user){
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
          this.userInfo = snapshot.docs.map(doc => (
            {id:doc.id, ...doc.data()}
          ));
//          console.log("userInfo", this.userInfo);                
          // userInfo étant un tableau, onn récupère
          // ses informations dans la 1° cellule du tableau : 0
          this.name = this.userInfo[0].login;
          this.isAdmin=this.userInfo[0].admin;
          // Recherche de l'image du user sur le Storage
          const storage = getStorage();
          // Référence du fichier avec son nom
          const spaceRef = ref(storage, 'users/'+this.userInfo[0].avatar);
          getDownloadURL(spaceRef)
            .then((url) => {
              this.avatar = url;
            })
            .catch((error) =>{
              console.log('erreur downloadUrl', error);
            })
        });
      },
    

 
        
    } 
}
</script>

<template>
    <div>
      <div class="bg-[url('/public/images/Fond.png')]">
        <Header />
        <div class="pt-5 px-5 grid grid-cols-1 lg:grid-cols-2 gap-20 relative ">
            <div>
      <h1 class="text-white text-center font-bold text-3xl">       
     FRENCH DESIGNER</h1>
     <h1 class="text-white text-center font-bold text-3xl"> AUDIO-VISUAL DIGITAL</h1>
     <h1 class="text-white text-center font-bold text-3xl"> PRODUCTS LOGOS </h1>
    <div class="p-2 border-1 border-solid border-white w-full bg-white">
      </div>
      <br />
        <h3 class=" text-white text-center pb-4 text-2xl font-bold font-kaushan">WELCOME TO MY UNIVERSE</h3>
    <p class="pb-4 text-lg font-light text-white text-center font-kaushan">MOTION DESIGN</p>
    <p class="pb-4 text-lg font-light text-white text-center font-kaushan">3D Artist</p>
    </div>
<div class="h-80 ">
<Planet />
</div>
</div>
  </div>
  <div class="p-2">
      </div>
      <div class="container bg-red-500">
      <span class="txt t1 text-white">- WEBDESIGNER - 3D ARTIST - WEBDESIGNER - DEVELOPPEUR</span>
      <span class="txt t2 text-white">- WEBDESIGNER - 3D ARTIST - WEBDESIGNER - DEVELOPPEUR</span>
    </div>
    <div class="p-2">
      </div>
        <div class=" pt-5 px-5 grid grid-cols-1 lg:grid-cols-2 gap-20 relative ">
            <div>
      <h1 class="bg-white text-black text-center font-bold text-3xl">       
    MY PROJECTS</h1>
      <br />
        <p class=" text-black text-center pb-4 text-2xl font-bold font-kaushan">Come and discover my various projects that I had the opportunity to carry out during my first two years of BUT MMI. </p>

      </div>
<div class="bg-black grid grid-cols-1 md:grid-cols-2">
<img src="/public/images/Nasa.png" alt="">
<img src="/public/images/Nasa.png" alt="">
<img src="/public/images/Nasa.png" alt="">
<img src="/public/images/Nasa.png" alt="">
<img src="/public/images/Nasa.png" alt="">
<img src="/public/images/Nasa.png" alt="">
<img src="/public/images/Nasa.png" alt="">
</div>
</div>
    </div>
</template>

<style>



.container {
  overflow: hidden;
  display: flex;
  /* Fonctionne avec toutes les tailles */

  transform: translateY(-20%);
  /* pour rotate on enlève le translate et on rajoute le rotate */
  /* transform:  rotate(90deg); */
}
.txt {
  white-space: nowrap;
  font-size: 50px;
  animation: scrollTxt 7s linear infinite;
}


@keyframes scrollTxt {
  0%{
    transform: translate(-60%, 0);
  }
  100% {
    transform: translate(0%, 0);
  }
}
</style>