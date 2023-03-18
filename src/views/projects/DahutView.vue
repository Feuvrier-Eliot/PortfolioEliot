<template>
  <div class="bg-[#15112B]">
  
  <div id="stars"></div>
       <div id="stars2"></div>
       <div id="stars3"></div>
       <div id="title">
           <Header />
           <div class="pt-5 md:px-5 gap-5 md:gap-20 relative">
            <div class="grid grid-cols-1">
              <div class="md:pt-40 pt-20 animate__animated animate__backInDown">
                <div>
        <h1 class="text-white pl-8 md:pl-20 text-left font-rubik text-3xl md:text-7xl">LE DAHUT DES </h1>
        <h1 class="text-white pl-8 md:pl-20 text-left font-rubik text-3xl md:text-7xl">VIGNES</h1>
  
  </div>
  
  <div class="md:pt-10 pt-5">
      <p class="md:pb-4 md:text-lg font-light pl-8 md:pl-20 text-white text-left font-rubik uppercase">Project realized in December 2022</p>
    </div>
    </div>
  <div class=" md:h-96 h-40">
  </div>
  </div>
  </div>
  </div>
    </div>
    <div class="pt-2 md:pt-5 px-10 md:px-20 gap-10 md:gap-20 relative ">
    <h1 class="pt-8 md:pt-20 text-black text-left md:text-6xl text-xl font-rubik uppercase">       
      About</h1>
      <div class="md:pt-5 w-40 md:w-96">
      <hr class="black">
      </div>
  <div class="grid grid-cols-1 md:grid-cols-2 pt-12 md:pt-24 pl-16 md:pl-80">
      <div>
        <div class="pb-10 md:pb-20">
      <img class="w-48 md:w-80 " src="/public/Dahut.png">
      <p class="text-black pl-36 md:pl-64 pt-1 text-base font-rubik">Logo</p>
      </div>
      </div>
      <div class="md:pr-20">
      <p class="text-[#342A6A] text-2xl font-bold md:text-4xl pb-2 md:pb-5">PROJECT INFO</p>
      <p class="text-black text-base font-rubik pb-2 md:pb-5">Le Dahut des Vignes is a project that aimed to create a visual identity for a restaurant. In this group work, we chose to create a local restaurant in Burgundy. We had to create the Logo as well as set up a presence on social networks.</p>
      <p class="text-[#342A6A] text-2xl font-bold md:text-4xl pb-2 md:pb-5">CLIENT</p>
      <p class="text-black text-base font-rubik pb-2 md:pb-5">The MMI department in the context of an examination.</p>
      <p class="text-[#342A6A] text-2xl font-bold md:text-4xl pb-2 md:pb-5">USED TOOLS </p>
      <p class="text-black text-base font-rubik pb-2 md:pb-5">Figma, Illustrator</p>
      <p class="text-[#342A6A] text-2xl font-bold md:text-4xl pb-2 md:pb-5">URL </p>
      <a href="#" class="text-black text-base font-rubik ">...</a>
  </div>
    </div>
      </div>
   
       <Footer />
  
  </template>
  <script>
  // Import Swiper Vue.js components
  import Footer from '../../components/footer.vue';
  import Header from '../../components/header.vue';
  
  // import required modules
  
  export default {
    components: {
      Header,
      Footer
  },
   
  }
  </script>