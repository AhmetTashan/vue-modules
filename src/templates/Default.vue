<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
        |
        <router-link to="/post/list">Post</router-link>
    </div>
    <router-view/>
    <div>footer</div>
</template>
