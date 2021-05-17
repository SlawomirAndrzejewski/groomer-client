<template>
    <nav id="navbar">
        <div class="menu">
            <ul>
                <router-link to="/">Home</router-link>
                <router-link to="/dashboard">Dashboard</router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {

        }
    }
}
</script>

<style lang="sass" scoped>
    
</style>