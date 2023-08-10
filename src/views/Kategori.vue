<template> 
<p class="text-5xl text-gray-900 dark:text-white text-center font-semibold">Kategori Produk</p>
<div class="grid grid-cols-4 m-5">
  <div class="flex flex-container" v-for="kategori in getKategori">
    <div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400" alt="Shoes" /></figure>
  <div class="card-body">
    <router-link :to="{name: 'filterKategori', params: { kategori: kategori }}">
      <h2 class="card-title">{{ kategori }}</h2>
    </router-link>
      <div class="card-actions absolute bottom-5 right-5 ">
      <button class=" btn btn-success">See More</button>
    </div>
  </div>
</div>
</div>
  </div>
</template>
  
  <script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        computed: {
            ...mapGetters('kategori', ['getKategori']),
        },
        methods: {
            ...mapActions('kategori', ['fetchKategori']),
        },
        created() {
            this.fetchKategori();
        },
    }
  </script>
  
  <style>
  .flex-container {
  display: flex;
  flex-flow: row wrap;
  }
  .flex-container > div {
  margin: 20px;
  padding: 0px;
  font-size: 30px;
  }
  </style>