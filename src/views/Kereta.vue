<template>
    <div class="cntainer mx-auto sm:px-4">
        <h1 class="text-center b">Fetch kereta</h1>
        <table class="table-auto text-center" align="center">
            <thead>
                <tr>
                    <th class="px-4 py-2">Kode</th>
                    <th class="px-4 py-2">Nama</th>
                    <th class="px-4 py-2">Kota</th>
                    <th class="px-4 py-2">Nama Kota</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="kereta in getKereta" :key="kereta.id">
                    <td class="brder px-4 py-2">{{ kereta.code }}</td>
                    <td class="brder px-4 py-2">{{ kereta.name }}</td>
                    <td class="brder px-4 py-2">{{ kereta.city }}</td>
                    <td class="brder px-4 py-2">{{ kereta.cityname }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        computed :{
            ...mapGetters('Kereta', ['getKereta']),
        },
        methods:{
            ...mapActions('Kereta', ['fetchKereta']),
        },
        created() {
            this.fetchKereta();
        }
    }
</script>

<style></style>