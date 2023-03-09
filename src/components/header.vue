<template>
    <header class="sticky top-0 drop-shadow-lg z-10 ">
        <a href="#content" class="sr-only focus:not-sr-only text-lg text-white"> Passez au contenu </a>
        <nav class=" lg:flex lg:justify-between items-center">
          <div class="flex justify-between items-center">
           <RouterLink to="/"><img src="/public/logoEliotBlanc.svg" alt=""></RouterLink> 			
        <!-- <h1 class="text-gray-50 text-xl font-bold lg:text-5xl">Arena</h1> -->
          <span class="text-5xl cursor-pointer lg:hidden block w-8 h-8 mx-55  ">
            <MenuIcon class=" text-white"  aria-controls="menu"
            :aria-expanded="menuOuvert"
            @click="menuOuvert = !menuOuvert">
            </MenuIcon>
            <span class="sr-only ">Menu</span>
          </span>
          </div>
          <Transition
            enter="transition duration-2000 ease-out"
            enterFrom="transform translate-x-full opacity-0"
            enterTo="transform translate-x-0 opacity-100"
            leave="transition duration-1750 ease-out"
            leaveFrom="transform  translate-x-0 opacity-100"
            leaveTo="transform translate-x-full opacity-0"
          >
          <ul id="menu" v-if="menuOuvert" class="lg:hidden w-full  text-xl font-museomoderno   text-center" >
            <li class="my-5">
              <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-museomoderno text-white  " to="/">Home</RouterLink>
            </li>
            <li class="my-5">
              <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm text-white font-museomoderno " to="/projects">Projects</RouterLink>
            </li>

            <li class="my-5">
              <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm text-white font-museomoderno " to="/about">About Me</RouterLink>
            </li>
            <li class="my-5">
              <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-museomoderno text-white" to="/contact">Contact</RouterLink>
            </li>
          </ul>
          </Transition>
          <ul class="lg:flex  gap-4 lg:items-center text-white text-xl font-algerian mx-6 py-4 hidden" >
            <li class="my-5">
              <RouterLink class="border-2 border-white my-6 lg:px-2 xl:pt-2 rounded-2xl font-museomoderno text-white" to="/">Home</RouterLink>
            </li>
            <li class="my-5">
              <RouterLink class="border-2 border-white my-6 lg:px-2 xl:pt-2 rounded-2xl font-museomoderno text-white" to="/projects">Projects</RouterLink>
            </li>
            <li class="my-5">
              <RouterLink class="border-2 border-white my-6 lg:px-2 xl:pt-2 rounded-2xl font-museomoderno text-white" to="/about">About Me</RouterLink>
            </li>
            <li class="my-5">
              <RouterLink class="border-2 border-white my-6 lg:px-2 xl:pt-2 rounded-2xl font-museomoderno text-white " to="/contact">Contact</RouterLink>
            </li>


          </ul>    
        </nav>
      </header>
    
      <RouterView />
    </template>
    
    <script>
    import Navigation from './icones/Navbar.vue'
    import { MenuIcon, } from "@heroicons/vue/solid";
    
    export default {
      components:{ Navigation, MenuIcon },
      data() {
        return {
          menuOuvert: false,
    
          user:{              // User connecté
            email:null,
            password:null
          },
          userInfo:null,      // Informations complémentaires user connecté
          name:"Vidéo",       // Titre de l'application ou nom du user
          isAdmin:false       // Si l'utilisateur est ou non administrateur
        }
      },
    }
    </script>