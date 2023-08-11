import { createWebHistory, createRouter} from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/user/Index.vue"
import UserCreate from "../views/user/Create.vue"
import Kereta from "../views/Kereta.vue"
import Produk from "../views/Produk.vue";
import SingleProduk from "../views/SingleProduk.vue";
import Kategori from "../views/Kategori.vue"
import Login from "../views/Login.vue"
import store from "../store";
import FilterKategori from "../views/FilterKategori.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component:Home,
    },
    {
        path: "/users",
        name: "User",
        component:User,
        meta: { requiresLogin : true},
    },
    {
        path: "/users/create",
        name: "UserCreate",
        component:UserCreate,
        meta: { requiresLogin : true},
    },
    {
        path: "/kereta",
        name: "kereta",
        component:Kereta,
    },
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
    },
    {
        path: "/produk/:id",
        name: "SingleProduk",
        component: SingleProduk,
    },
    {
        path: "/kategori",
        name: "Kategori",
        component: Kategori,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requiresGuest : true},
    },
    {
        path: "/kategori/:kategori",
        name: "FilterKategori",
        component: FilterKategori,
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
        next("/");
    } else{
        next();
    }
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresLogin && !store.getters["auth/isAuthenticated"]) {
        next("/login");
    } else{
        next();
    }
})

export default router;