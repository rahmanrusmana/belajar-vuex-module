<template>
    <div class="grid grid-cols-4 gap-4">
<!-- card produk -->

<div v-for="produk in getFilterProduk" :key="produk.id" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <router-link :to="{ name: 'SingleProduk', params: {id: produk.id} }" class="group">

        <img class="p-8 rounded-t-lg object-contain w-60 h-80 ml-10" :src="produk.image" alt="produk image" />

    <div class="px-5 pb-5">

            <h5 v-if="(produk.title).length < 24" class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ produk.title }}</h5>
            <h5 v-else class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ (produk.title).substring(0,21)+ " ..." }}</h5>

        <div class="flex items-center mt-2.5 mb-5">
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{{ produk.rating.rate }} </span><span class="text-1xl font-semibold">| Count {{ produk.rating.count }}</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$ {{ produk.price }}</span>
            <a href="#" class="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Add to cart</a>
        </div>
    </div>
  </router-link>
</div>
    <!-- card produk -->
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
     ...mapGetters("produk", ["getProdukByKategori"]),
     getFilterProduk() {
        return this.getProdukByKategori(this.$route.params.kategori);
     },
  },
  methods: {
      ...mapActions("produk", ["fetchFilterProduk"]),
  },
 created() {
    this.fetchFilterProduk();
 },
};
</script>