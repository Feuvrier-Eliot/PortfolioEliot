<template>
  <header class="  sticky top-0 drop-shadow-lg z-10 ">
      <a href="#content" class="sr-only focus:not-sr-only text-lg text-white"> Passez au contenu </a>
      <nav class=" lg:flex lg:justify-between items-center">
        <div class="flex justify-between items-center">
         <RouterLink to="/"><img src="/public/logo_Eliot.png" alt="" class="pt-1 pl-10 w-20"></RouterLink> 			
        <span class="text-5xl cursor-pointer lg:hidden block w-12 h- mx-55 pr-4  ">
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
        <ul id="menu" v-if="menuOuvert" class="lg:hidden w-full  text-xl font-rubik text-center" >
          <li class="my-5">
            <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-rubik text-white uppercase " to="/">Home</RouterLink>
          </li>
          <li class="my-5">
            <a href="#projects" class="my-6 lg:px-4 xl:pt-2 xl:pb-2 xl:rounded-sm text-white font-rubik uppercase">Projects</a>
          </li>
          <li class="my-5">
            <a href="#about" class="my-6 lg:px-4 xl:pt-2 xl:pb-2 xl:rounded-sm text-white font-rubik uppercase">About Me</a>
          </li>
          <li class="my-5">
            <a href="#contact" class="my-6 lg:px-4 xl:pt-2 xl:pb-2 xl:rounded-sm font-rubik text-white uppercase">Contact</a>
          </li>
        </ul>
        </Transition>
        <ul class="lg:flex  gap-4 lg:items-center text-white text-xl font-algerian mx-6 py-4 hidden" >
          <li class="my-5">
            <RouterLink class="border-2 border-white my-6 lg:px-2 xl:pt-1  xl:pl-5 xl:pr-5 xl:pb-1 rounded-full font-rubik text-white uppercase hover:text-black hover:bg-white" to="/">Home</RouterLink>
          </li>
          <li class="my-5">
            <a href="#projects" class="border-2 border-white my-6 lg:px-2 xl:pt-1  xl:pl-5 xl:pr-5 xl:pb-1 rounded-full font-rubik text-white uppercase hover:text-black hover:bg-white">Projects</a>
          </li>
          <li class="my-5">
            <a href="#about" class="border-2 border-white my-6 lg:px-2 xl:pt-1  xl:pl-5 xl:pr-5 xl:pb-1 rounded-full font-rubik text-white uppercase hover:text-black hover:bg-white">About Me</a>
          </li>
          <li class="my-5">
            <a href="#contact" class="border-2 border-white my-6 lg:px-2 xl:pt-1  xl:pl-5 xl:pr-5 xl:pb-1 rounded-full font-rubik text-white uppercase hover:text-black hover:bg-white ">Contact</a>
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
      }
    },
  }
  </script>