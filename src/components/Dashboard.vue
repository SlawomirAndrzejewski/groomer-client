<template>
    <div id="dashboard">
        <h3>Dashboard</h3>
        <ul>
            <li v-for="client in clients" v-bind:key="client.id">
                {{ client.image }}
            </li>
        </ul>
    </div>
</template>

<script>
import db from './firebaseInit'

export default {
    name: 'dashboard',
    data() {
        return {
            clients:[]
        }
    },
    created() {
        db.collection('clients').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.data())
                const data = {
                    'name': doc.data().name
                }
                this.clients.push(data)
            })
        })
    }
}
</script>

<style lang="sass" scoped>
    
</style>