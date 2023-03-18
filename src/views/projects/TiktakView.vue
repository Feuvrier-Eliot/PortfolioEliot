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
        <h1 class="text-white pl-8 md:pl-20 text-left font-rubik text-3xl md:text-7xl">TIK-TAK </h1>  
  </div>
  
  <div class="md:pt-10 pt-5">
      <p class="md:pb-4 md:text-lg font-light pl-8 md:pl-20 text-white text-left font-rubik uppercase">Project realized in October 10, 2022</p>
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
      <img class="w-48 md:w-80 " src="/public/tiktakLogo.png">
      <p class="text-black pl-36 md:pl-64 pt-1 text-base font-rubik">Logo</p>
      </div>
      <div class="pb-10 md:pb-20">
  
      <img class="w-48 md:w-80" src="/public/image_montre.jpg">
      <p class="text-black pl-12 md:pl-20 pt-1 text-base font-rubik">tiktak brand product</p>
  </div>
      </div>
      <div class="md:pr-20">
      <p class="text-[#342A6A] text-2xl font-bold md:text-4xl pb-2 md:pb-5">PROJECT INFO</p>
      <p class="text-black text-base font-rubik pb-2 md:pb-5">The Tiktak project is a project done as part of an exam at the MMI department. This consisted in creating from scratch a brand of connected watches as well as its website. So we designed the website, created the logo and then we developed it.</p>
      <p class="text-[#342A6A] text-2xl font-bold md:text-4xl pb-2 md:pb-5">CLIENT</p>
      <p class="text-black text-base font-rubik pb-2 md:pb-5">The MMI department in the context of an examination.</p>
      <p class="text-[#342A6A] text-2xl font-bold md:text-4xl pb-2 md:pb-5">USED TOOLS </p>
      <p class="text-black text-base font-rubik pb-2 md:pb-5">Figma, Photoshop, Visual studio code, Clockify</p>
      <p class="text-[#342A6A] text-2xl font-bold md:text-4xl pb-2 md:pb-5">URL </p>
      <a href="http://tiktak.eliot-feuvrier.fr" class="text-black text-base font-rubik pb-">tiktak.eliot-feuvrier.fr</a>
  </div>
    </div>
      </div>
  
      <section class="h-fit md:h-fit pt-10">
          <img src="/public/TikTakScreen.png" alt="">
      </section>  
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