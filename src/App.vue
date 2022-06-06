<template>
    <Blank v-if="getTemplate === 'blank'">
        <router-view/>
    </Blank>
    <Default v-if="getTemplate === 'default' || !getTemplate">
        <router-view/>
    </Default>
</template>

<script setup>
import {useRoute} from 'vue-router';
import {ref, watch} from "vue";
import Blank from "@/templates/Blank";
import Default from "@/templates/Default";

const route = useRoute();
const getTemplate = ref();
watch(route, () => {
    getTemplate.value = route?.meta?.template;
});
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
