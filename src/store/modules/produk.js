import axios from "axios";

const produk = {
    namespaced: true,
    state: {
        produkData: [],
    },
    getters: {
        getProduk: (state) => state.produkData,
        // get single produk
        getProdukById: (state) => (produkId) => {
            console.log("ProdukId:", produkId);
            console.log("ProdukData:", state.produkData );
            const produk = state.produkData.find((p) => p.id == produkId);
            console.log("Produk:", produk);
            return produk
        },

        // filter produk
        getProdukByKategori: (state) => (produkKategori) => {
            const produk = state.produkData.filter(
                (p) => p.kategri = produkKategori
            )
            return produk
        },
    },
    actions: {
        async fetchProduk({ commit }) {
            try {
                const data = await axios.get(
                    "https://fakestoreapi.com/products"
                );
                commit("SET_PRODUKS", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

        // get single produk
        async fetchSingleProduk({ commit }, produkId) {
            try {
                const response = await axios.get(
                    `https://fakestoreapi.com/products/${produkId}`
                );
                commit("SET_SINGLE_PRODUK", response.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

        async fetchFilterProduk({ commit }, produkKategori) {
            try {
                const response = await axios.get(
                    `https://fakestoreapi.com/products/${produkKategori}`
                );
                commit("SET_FILTER_PRODUK", response.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

    },
    mutations: {
        SET_PRODUKS(state, produk) {
            state.produkData = produk;
        },
        SET_SINGLE_PRODUK(state, produk) {
            state.singleProduk = produk
        },
        SET_FILTER_PRODUK(state, produk) {
            state.filterProduk = produk
        }
    },
};

export default produk;