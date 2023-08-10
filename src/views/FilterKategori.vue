<template>
    <div v-for="produk in getFilterProduk" key="produk.id">
        <router-link :to="{name: 'SingleProduk', params: {id:produk.id}}">
            <p>dgdvg</p>
        </router-link>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    computed: {
     ...mapGetters("produk", ["getProdukByKategori"]),
     getFilterProduk() {
        return this.getProdukByKategori(this.$route.params.Kategori);
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