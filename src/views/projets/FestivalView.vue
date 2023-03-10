<script>
import Header from '../../components/header.vue';
export default {
    name:"App",
    components: { Header },
}
</script>

<template>
     <div class="bg-[#15112B]">
    <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title">
            <Header />
            <div class="pt-5 px-5 gap-20 relative">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div>
      <h1 class="text-white text-center uppercase text-3xl">       
     Electro Moods</h1>
     <h1 class="text-white text-center uppercase  text-3xl"> Festival</h1>
    <div class="p-1 border-solid border-white w-full bg-white">
      </div>
      <br />
    <p class="pb-4 text-lg  text-white text-center ">The "Electro Moods Festival" is a fictional university project designed to put event skills into practice. With his bold artistic direction featuring a black background contrasting with blue and white neon lights, he highlights the unique and innovative musical style that makes it an electrifying and memorable festival.</p>
    </div>
<div class="h-80 ">
<Planet />
</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 pt-5 px-5 gap-20 relative ">
            <div>
      <h1 class="text-white text-center  text-3xl">       
    Creation of the logo</h1>
    <p class="pb-4 text-lg  text-white text-center ">This logo aims to symbolize the rhythm and the electro musical style, the neon effect is there to recall the electricity and the unpredictable side of music.</p>
      <br />
      </div>
<div>
    <img src="/public/images/Festival/logofestival.png" alt="" class="w-56">
</div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 pt-5 px-5 gap-20 relative ">
            <div>
    <img src="/public/images/Festival/logofestival.png" alt="" class="w-56">
      </div>
<div>
    <img src="/public/images/Festival/logofestival.png" alt="" class="w-56">
</div>
      </div>
<div>
    <p class="pb-4 text-lg  text-white text-center ">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore” </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 pt-5 px-5 gap-20 relative ">
<div>
    <p class="pb-4 text-lg  text-white text-center ">description du projet "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
</div>
<div>
      <h1 class="text-white text-center  text-3xl">       
    Used tools</h1>
    <div class="flex gap-3 place-content-center pt-10">
<img src="/public/images/tools/Illustrator.svg" alt="">
<img src="/public/images/tools/Figma.svg" alt="">
<img src="/public/images/tools/VueJS.svg" alt="">
</div>
    <br />
      </div>
      </div>


          </div>
          </div>
          </div>
</template>

<style></style>