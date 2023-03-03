import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './index.css'
import mitt from 'mitt';

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js";  // Initialize Firebase

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBHIogkwaUxonlx7ZiIJ5jYb1qblL6UTDk",
    authDomain: "portfolioeliot-2321b.firebaseapp.com",
    projectId: "portfolioeliot-2321b",
    storageBucket: "portfolioeliot-2321b.appspot.com",
    messagingSenderId: "19044177510",
    appId: "1:19044177510:web:c33caf721c4978c52f3fa7"
  };
  
  // Initialize Firebase
  const appFirebase = initializeApp(firebaseConfig);

  const app = createApp(App)

export const emitter = mitt();
app.config.globalProperties.emitter = emitter;

app.use(router)

app.mount('#app')
