<script>
import Header from "../components/header.vue"
import Footer from '../components/footer.vue'

export default {
    name:"App",
    components: { Header, Footer },
  }
</script>

<template>
<div class="bg-[#15112B] md:h-fit">

   <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title">
            <Header />
            <div class="pt-5 md:px-5 gap-5 md:gap-20 relative">
          <div class="grid grid-cols-1">
            <div class="md:pt-40 pt-20 animate__animated animate__backInDown">
              <div>
      <h1 class="text-white pl-8 md:pl-20 text-left font-rubik text-3xl md:text-7xl uppercase">Legal Notices </h1>
</div>

  </div>

</div>
</div>
</div>
<div class="pt-2 md:pt-5 px-10 md:px-20 gap-10 md:gap-20 pb-5 md:pb-10 relative ">
            <div>
      <h1 class="pt-8 md:pt-24 uppercase text-white text-left md:text-xl text-base font-rubik font-bold ">       
        1. SITE OWNER INFORMATION :
</h1>

    <p class="text-sm md:text-base font-rubik font-light pt-5 md:pt-10 text-white">
     Eliot Feuvrier
</p>
<p class="text-sm md:text-base font-rubik font-light  text-white">
4 place tharradin, Montbeliard France
</p>
<p class="text-sm md:text-base font-rubik font-light  text-white">
+33 6 26 44 68 21
</p>
<p class="text-sm md:text-base font-rubik font-light  text-white">
feuvriereliot25@gmail.com</p>
      </div>
      <div>
      <h1 class="pt-8 md:pt-24 uppercase text-white text-left md:text-xl text-base font-rubik font-bold ">       
        2. SITE HOST :
</h1>

    <p class="text-sm md:text-base font-rubik font-light pt-5 md:pt-10 text-white">
      Infomaniak
</p>
<p class="text-sm md:text-base font-rubik font-light  text-white">
  Rue Eugène Marziano 25 1227 Les Acacias (GE) Suisse
</p>
<p class="text-sm md:text-base font-rubik font-light  text-white">
  04 11 93 76 67
</p>
      </div>
      <div>
      <h1 class="pt-8 md:pt-24 uppercase text-white text-left md:text-xl text-base font-rubik font-bold ">            
3. INTELLECTUAL PROPERTY
</h1>

    <p class="text-sm md:text-base font-rubik font-light pt-5 md:pt-10 text-white">
      All elements of the site (texts, images, videos, etc.) are the exclusive property of Eliot Feuvrier and are protected by intellectual property laws. Any reproduction, distribution, or unauthorized exploitation of these elements is strictly prohibited.
</p>
      </div>
      <div>
      <h1 class="pt-8 md:pt-24 uppercase text-white text-left md:text-xl text-base font-rubik font-bold ">       
        4. USE OF PERSONAL DATA:
</h1>

    <p class="text-sm md:text-base font-rubik font-light pt-5 md:pt-10 text-white">
      The personal information collected on this site is used solely for the management of your account and your exchanges with Eliot Feuvrier. They are in no way transmitted to third parties. In accordance with the Data Protection Act of January 6, 1978, you have the right to access, rectify and delete data concerning you.</p>
      </div>
      <div>
      <h1 class="pt-8 md:pt-24 uppercase text-white text-left md:text-xl text-base font-rubik font-bold ">       
        5. RESPONSABILITY :
</h1>

    <p class="text-sm md:text-base font-rubik font-light pt-5 md:pt-10 text-white">
      Eliot Feuvrier declines all responsibility in the event of interruption or unavailability of the site, occurrence of bugs or errors. The user is solely responsible for the use he makes of the site and the information contained therein.   </p>
      </div>
      <div>
      <h1 class="pt-8 md:pt-24 uppercase text-white text-left md:text-xl text-base font-rubik font-bold ">       
        6. HYPERTEXT LINKS:
</h1>

    <p class="text-sm md:text-base font-rubik font-light pt-5 md:pt-10 pb-10 md:pb-40 text-white">
      The hypertext links present on the site may refer to other websites.Eliot Feuvrier cannot be held responsible for the content of these sites or any damage they may cause. It is important to note that this legal notice is only an example and it is recommended to consult a lawyer to ensure its relevance and compliance with the laws in force in your country.
    </p>
    </div>

    </div>
  </div>
<Footer />
</template>