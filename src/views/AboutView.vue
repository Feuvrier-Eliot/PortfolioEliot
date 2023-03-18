<script>
import Header from "../components/header.vue"
import Footer from '../components/footer.vue'

export default {
    name:"App",
    components: { Header, Footer },
    data() {
    return {
      from_name: "",
      email_id: "",
      message: "",
    };
  },
  methods: {
    sendMail() {
      const params = {
        from_name: this.from_name,
        from_firstname: this.from_firstname,
        email_id: this.email_id,
        message: this.message,
      };
      emailjs
      .send("service_430dq2r", "template_15d9h0l", params)
        .then(res => {
          alert(`Success! ${res.status}`);
        })
        .catch(err => {
          alert(`Error: ${err}`);
        });
    },
  },
};
</script>

<template>
<div class="bg-[#15112B]">

   <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title">
            <Header />
            <div class="pt-5 md:pt-10 md:px-5 gap-5 md:gap-20 relative">
          <div class="grid grid-cols-1">
            <div class="md:pt-40 pt-20 animate__animated animate__backInDown">
              <div>
      <h1 class="text-white pl-8 md:pl-20 text-left font-rubik text-3xl md:text-7xl">ELIOT FEUVRIER </h1>
</div>

<div class="md:pt-10 pt-5">
    <p class="md:pb-4 md:text-lg font-light pl-8 md:pl-20 text-white text-left font-rubik uppercase">French designer at BUT MMI Montbéliard</p>
  </div>
  </div>
<div class=" md:h-96 h-40">
</div>
</div>
</div>
</div>
  </div>
  <div class="pt-2 md:pt-5 px-10 md:px-20 gap-10 md:gap-20 pb-16 md:pb-32 relative " id="projects">
            <div>
      <h1 class="pt-8 md:pt-32 uppercase text-black text-left md:text-6xl text-xl font-rubik ">       
    About me</h1>
    <div class="md:pt-5 w-40 md:w-96">
    <hr class="black">
    </div>
    <p class="text-base md:text-xl font-rubik font-light pt-5 md:pt-16 text-black">Hello, my name is Eliot Feuvrier, I am currently in my second year at BUT MMI in Montbéliard. Having completed a Bachelor STI2D, I have always liked working on a computer and creating new things, so I naturally opted for the creativity course in MMI. Today, I was able to acquire skills that I can implement in order to help you realize your various projects.</p>
      </div>
    </div>
      <section class="bg-[#15112B] md:h-fit h-fit" id="about">
        <div class="flex pt-10 md:pt-20 px-10 md:px-20 ">
          <div>
      <h1 class="pt-10 md:pt-20 text-white text-left md:text-6xl text-xl font-rubik uppercase">       
    My Skills</h1>
    <div class="md:pt-5 w-40 md:w-96">
    <hr class="white">
    </div>
    
    <div class="grid grid-rows-2 grid-flow-col gap-10 md:gap-40 md:px-52 md:pt-10 ">
<img src="/public/tools/Figma.png" alt="Figma" class="w-10 md:w-32 pt-7">
<img src="/public/tools/illustrator.png" alt="Illustrator" class="w-10 md:w-32 pt-7 text-white">
<img src="/public/tools/Wordpress.png" alt="Wordpress" class="w-10 md:w-32 pt-7 text-white">
<img src="/public/tools/PremierePro.png" alt="Premiere Pro" class="w-10 md:w-32 pt-7 text-white">
<img src="/public/tools/AfterEffect.png" alt="After Effect" class="w-10 md:w-32 pt-7 text-white">
<img src="/public/tools/TailwindCSS.png" alt="Tailwind CSS" class="w-10 md:w-32 pt-7 text-white">
<img src="/public/tools/VueJS.png" alt="VueJS" class="w-10 md:w-32 pt-7 text-white">
<img src="/public/tools/Indesign.png" alt="InDesign" class="w-10 md:w-32 pt-7 text-white">
<img src="/public/tools/Photoshop.png" alt="Photoshop" class="w-10 md:w-32 pt-7 text-white">
<img src="/public/tools/VSCode.png" alt="Visual Studio Code" class="w-10 md:w-32 pt-7 text-white">
</div>
<div class="flex justify-center md:pt-16 pt-7 pb-7">
  <button class=" uppercase text-white border border-white md:pt-4 md:pb-4 pr-4 md:pr-8 pl-4 md:pl-8">Download my CV</button>
</div>    

    </div>
        </div>
     </section>
<div id="contact">
        <Footer />
        </div>
</template>

<style>

</style>