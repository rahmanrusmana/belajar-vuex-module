import axios from "axios";

const Kereta = {
    namespaced: true,
    state: {
        kereta: [],
    },
    getters: {
        getKereta: (state) => state.kereta,
    },
    actions: {
        async fetchKereta ({ commit }) { 
            try{
                const data =await axios.get(
                    "https://booking.kai.id/api/stations2"
                );
                commit ("SET_Kereta", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_Kereta(state, Kereta) {
            state.kereta = Kereta;
        },
    },
};

export default Kereta;

// users= a
// user= b