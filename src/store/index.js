import { createStore } from "vuex";
import donatur from "./modules/donatur";
import clients from "./modules/clients";
import transaksi from "./modules/transaksi";
import users from "./modules/user.js";
import Kereta from "./modules/kereta.js"
import produk from "./modules/produk.js"
import kategori from "./modules/kategori"

const store = createStore({
    state: {
        isLoading:false
    },
    modules:{
        donatur,
        clients,
        transaksi,
        users,
        Kereta,
        produk,
        kategori
    }
})
export default store;