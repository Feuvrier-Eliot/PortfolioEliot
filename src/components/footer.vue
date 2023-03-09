<script>

export default {
    components:{  },
}
</script>


<template>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css">


<footer class="bg-white">

        <div class="max-w-6xl m-auto text-black flex flex-wrap justify-left">

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

                <div class="text-xs uppercase text-black font-bold mb-6 border border-solid rounded-2xl border-black">
                    Contact me
                </div>

            </div>


            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

            </div>

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
               <RouterLink to="/"> <div class="text-xs uppercase text-black font-bold mb-6">
                    Home
                </div></RouterLink>
               <RouterLink to="/"> <div class="text-xs uppercase text-black font-bold mb-6">
                    Works
                </div></RouterLink>
               <RouterLink to="/"> <div class="text-xs uppercase text-black font-bold mb-6">
                    About me
                </div></RouterLink>
               <RouterLink to="/"> <div class="text-xs uppercase text-black font-bold mb-6">
                    Contact
                </div></RouterLink>
            </div>

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                <RouterLink to="/"> <div class="text-xs uppercase text-black font-bold mb-6">
                    Linkedin
                </div></RouterLink>
               <RouterLink to="/"> <div class="text-xs uppercase text-black font-bold mb-6">
                    Twitter
                </div></RouterLink>
               <RouterLink to="/"> <div class="text-xs uppercase text-black font-bold mb-6">
                    Instagram
                </div></RouterLink>
               <RouterLink to="/"> <div class="text-xs uppercase text-black font-bold mb-6">
                    Facebook
                </div></RouterLink>
            </div>

        </div>


    <div class="pt-2">
        <div class="flex pb-5 px-3 m-auto pt-5 
            border-t border-indigo-100 text-black text-sm 
            flex-col md:flex-row max-w-6xl">
            <div class="mt-2 text-center">
                ©2023 Created by Eliot FEUVRIER
            </div>
        </div>
    </div>
</footer>
</template>