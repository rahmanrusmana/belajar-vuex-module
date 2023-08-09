<template>
  <h1 class="text-center b" >Produk</h1><br>
<div class="grid grid-cols-3 gap-4">
    <div class=" flex flex-container" v-for="produk in getProduk">
        <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
<a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
<img style="width: 300px;" class="object-cover" :src="produk.image" alt="product image" />
<span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
</a>
<div class="mt-4 px-5 pb-5">
<router-link :to="{name: 'SingleProduk', params: {id: produk.id}}">
<h5 class="text-xl tracking-tight text-slate-900">{{ produk.title }}</h5>
</router-link>
<div class="mt-2 mb-5 flex items-center justify-between">
<p>
<span class="text-2xl font-bold text-slate-900">${{ produk.price }}</span>
<span class="text-sm text-slate-900 line-through">$ {{ produk.price + 10}}</span>
</p>
<div class="flex items-center">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
    <span class="text-slate-400 ml-1 text-sm">{{ produk.rating.rate }} | Terjual : {{ produk.rating.count }}</span>  
</div>
</div>
<a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
<svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
Add to cart</a
>
</div>
</div>
</div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
computed: {
...mapGetters('produk', ['getProduk']),
},
methods: {
...mapActions('produk', ['fetchProduk']),
},
created() {
this.fetchProduk();
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