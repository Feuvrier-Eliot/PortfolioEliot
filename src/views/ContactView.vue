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
        email_id: this.email_id,
        message: this.message,
      };
      emailjs
      .send("service_j58ura2", "template_92wrumt", params)
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
            <div class="pt-5 md:px-5 gap-5 md:gap-20 relative">
          <div class="grid grid-cols-1">
            <div class="md:pt-40 pt-20 pb-20 animate__animated animate__backInDown">
              <div>
      <h1 class="text-white pl-8 md:pl-20 text-left font-rubik text-3xl md:text-7xl uppercase">Contact </h1>
</div>

  </div>
                <form class="bg-transparent">
    <div class="mb-4 px-20 md:px-96">
      <label class="block text-white text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        placeholder="Enter your name"
        v-model="from_name"
      >
    </div>
    <div class="mb-4  px-20 md:px-96">
      <label class="block text-white text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Enter your email"
        v-model="email_id"
      >
    </div>
    <div class="mb-4  px-20 md:px-96">
      <label class="block text-white text-sm font-bold mb-2" for="message">
        Message
      </label>
      <textarea
        class="shadow appearance-none border rounded w-full pb-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="message"
        placeholder="Enter your message"
        v-model="message"
      ></textarea>
    </div>
    <div class="flex justify-center pb-10 md:pb-20">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        @click.prevent="sendMail"
      >
        Submit
      </button>
    </div>
  </form>
  </div>
        </div>
        </div>
    </div>
<Footer />
</template>