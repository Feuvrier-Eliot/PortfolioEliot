import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './index.css'
import mitt from 'mitt';
import 'animate.css';

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js";  // Initialize Firebase

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCvZd4eng-J8dajNe0fNAjROk4f0Uf-LS8",
    authDomain: "portfolioeliot.firebaseapp.com",
    projectId: "portfolioeliot",
    storageBucket: "portfolioeliot.appspot.com",
    messagingSenderId: "1050356799126",
    appId: "1:1050356799126:web:f6a126a869f9ef2c69d4b7"
  };
  
  // Initialize Firebase
  const appFirebase = initializeApp(firebaseConfig);

  const app = createApp(App)

export const emitter = mitt();
app.config.globalProperties.emitter = emitter;

app.use(router)

app.mount('#app')
