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
        1. Informations sur le propriétaire du site :
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
      2. Hébergeur du site :
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
        3. Propriété intellectuelle
</h1>

    <p class="text-sm md:text-base font-rubik font-light pt-5 md:pt-10 text-white">
      Tous les éléments du site (textes, images, vidéos, etc.) sont la propriété exclusive d'Eliot Feuvrier et sont protégés par les lois relatives à la propriété intellectuelle. Toute reproduction, diffusion, ou exploitation non autorisée de ces éléments est strictement interdite.
</p>
      </div>
      <div>
      <h1 class="pt-8 md:pt-24 uppercase text-white text-left md:text-xl text-base font-rubik font-bold ">       
        4. Utilisation des données personnelles :
</h1>

    <p class="text-sm md:text-base font-rubik font-light pt-5 md:pt-10 text-white">
      Les informations personnelles recueillies sur ce site sont utilisées uniquement dans le cadre de la gestion de votre compte et de vos échanges avec Eliot Feuvrier. Elles ne sont en aucun cas transmises à des tiers. Conformément à la loi Informatique et Libertés du 6 janvier 1978, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.</p>
      </div>
      <div>
      <h1 class="pt-8 md:pt-24 uppercase text-white text-left md:text-xl text-base font-rubik font-bold ">       
        5. Responsabilité :
</h1>

    <p class="text-sm md:text-base font-rubik font-light pt-5 md:pt-10 text-white">
      Eliot Feuvrier décline toute responsabilité en cas d'interruption ou d'indisponibilité du site, de survenance de bugs ou d'erreurs. L'utilisateur est seul responsable de l'utilisation qu'il fait du site et des informations qui y sont contenues.    </p>
      </div>
      <div>
      <h1 class="pt-8 md:pt-24 uppercase text-white text-left md:text-xl text-base font-rubik font-bold ">       
        6. Liens hypertextes :
</h1>

    <p class="text-sm md:text-base font-rubik font-light pt-5 md:pt-10 pb-10 md:pb-40 text-white">
      Les liens hypertextes présents sur le site peuvent renvoyer vers d'autres sites web. Eliot Feuvrier ne saurait être tenu responsable du contenu de ces sites ni des éventuels préjudices qu'ils pourraient causer. Il est important de noter que ces mentions légales ne sont qu'un exemple et qu'il est recommandé de consulter un avocat pour s'assurer de leur pertinence et de leur conformité avec les lois en vigueur dans votre pays.
    </p>
    </div>

    </div>
  </div>
<Footer />
</template>