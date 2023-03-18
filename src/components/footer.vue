<script>

export default {
    components:{  },
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
}
</script>


<template>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css">


<footer class="bg-white">
      <div class="grid grid-cols-2">
      <div class="pt-2 md:pt-5 px-10 md:px-20 gap-10 md:gap-20 relative ">
            <div>
              <h1 class="pt-8 md:pt-32 text-black text-left md:text-6xl text-xl font-rubik uppercase">       
    Contact</h1>
    <div class="md:pt-5 w-40 md:w-96">
    <hr class="black">
    </div>
      </div>
      </div>
      <div class="absolute right-6 md:absolute md:right-20 pt-6 md:pt-32 w-12 md:w-80">
        <img src="/public/logoEliotBlanc.svg" class="w-24">
      </div>
</div>


         <div class="grid grid-cols-2 gap-6">

         <div class="col-span-2 md:text-8xl text-6xl text-center pb-40 pt-40 text-black font-medium">
          LET’S WORK TOGETHER
        </div>
        </div>
        <div class="max-w-6xl m-auto text-black flex flex-wrap justify-left">

            <div class="p-5 w-1/2 sm:w-4/12 md:w-[20%]">
<div class="grid gap-y-5">
  <RouterLink to="/contact">
                <div class="flex border-2 border-black px-1 md:px-2 pt-1 pl-2 pb-1 rounded-full w-40 md:w-52 font-rubik gap-10 md:gap-16 text-sm uppercase">
                    Contact me
                <img src="/public/icones/FlecheNoir.svg" alt="">
            </div>
            </RouterLink>
            <RouterLink to="/legals">
                <div class="flex border-2 border-black px-1 md:px-2 pt-1 pl-2 pb-1 rounded-full w-40 md:w-52 font-rubik gap-6 md:gap-12 text-sm uppercase ">
                    Legal Notices
                <img src="/public/icones/FlecheNoir.svg" alt="">
            </div>
            </RouterLink>
</div>
            </div>


            <div class="p-5 w-3/12 md:w-[20%]">

            </div>
            <div class="p-5 w-3/12 md:w-[20%]">

            </div>

            <div class="p-5 pl-20 w-1/2 sm:w-4/12 md:w-[20%]">
               <RouterLink to="/"> <div class="text-xs uppercase  text-black font-regular mb-6">
                    Home
                </div></RouterLink>
               <RouterLink to="/projects"> <div class="text-xs uppercase  text-black font-regular mb-6">
                    Works
                </div></RouterLink>
               <RouterLink to="/about"> <div class="text-xs uppercase text-black font-regular mb-6">
                    About me
                </div></RouterLink>
               <RouterLink to="/contact"> <div class="text-xs uppercase  text-black font-regular mb-6">
                    Contact
                </div></RouterLink>
            </div>

            <div class="p-5 pl-20 w-1/2 sm:w-4/12 md:w-[20%]">
              <a href="https://www.linkedin.com/in/eliot-feuvrier/" target="_blank"> <div class="text-xs uppercase text-black font-regular  mb-6">
                    Linkedin
                </div></a>
                <a href="https://twitter.com/Hellio2602" target="_blank"> <div class="text-xs uppercase text-black font-regular mb-6">
                    Twitter
                </div></a>
               <a href="https://www.instagram.com/eliot_feuvrier/" target="_blank"> <div class="text-xs uppercase text-black font-regular mb-6">
                    Instagram
                </div></a>
                <a href="https://www.facebook.com/eliot.feuvrier/" target="_blank"> <div class="text-xs uppercase text-black font-regular mb-6">
                    Facebook
                </div></a>
            </div>
        </div>


    <div class="pt-2">
      <div class="md:pt-5 w-full md:w-full pl-10 pr-10 md:px-96">
    <hr class="black">
    </div>
            <div class="mt-2 text-center pb-6 md:pt-2">
                ©2023 Created by Eliot FEUVRIER
            </div>
          </div>
          </footer>
</template>