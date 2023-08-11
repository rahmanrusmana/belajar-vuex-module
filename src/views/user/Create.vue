<template>
    <div>
        <h2>Create User</h2>
        <form @submit.prevent="createUser">
            <label>Email : </label>
            <input v-model="newUser.email" type="email" required> <br>
            <label>username : </label>
            <input v-model="newUser.username" type="text" required> <br>
            <label>password : </label>
            <input v-model="newUser.password" type="password" required> <br>
            <label>First Name : </label>
            <input v-model="newUser.firstname" type="text" required> <br>
            <label>Last Name : </label>
            <input v-model="newUser.lastname" type="text" required> <br>
            <label>City : </label>
            <input v-model="newUser.addres.city" type="text" required> <br>
            <label>Streer : </label>
            <input v-model="newUser.addres.street" type="text" required> <br>
            <label>Number : </label>
            <input v-model="newUser.addres.number" type="number" required> <br>
            <label>Zipcode : </label>
            <input v-model="newUser.addres.zipcode" type="text" required> <br>
            <label>Latitude : </label>
            <input v-model="newUser.addres.geolocation.lat" type="text" required> <br>
            <label>Longitude : </label>
            <input v-model="newUser.addres.geolocation.long" type="text" required> <br>
            <label>Phone : </label>
            <input v-model="newUser.phone" type="text" required> <br>
            <button type="submit" class="grid cursor-pointer select-none rounded-md border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-midle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none">
                Create User
            </button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState} from "vuex";

export default{
    data() {
        return{
            newUser: {
                email: "",
                username: "",
                password: "",
                name: {
                    firstname: "",
                    lastname: "",
                },
                addres: {
                    city: "",
                    street: "",
                    number: "",
                    zipcode: "",
                    geolocation: {
                        let: "",
                        lomg: "",
                    }
                },
                phone: "",
            },
        };
    },

computed: {
    ...mapState("notification",["notificatin"]),
},
methods: {
    ...mapActions("users", ["createUser", "setNotification"]),
    async createUser(){
        try {
            console.log("Data:", this.newUser);
            const newUser = await this.createUser(this.userData);
            this.$router.push({ name: "user"});
        } catch (error){
            console.error(error);
        }
    }
}
}
</script>