<template>
    <div>
        <router-link to="/">主页</router-link>
        <router-link to="/login">登录</router-link>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
});
</script>

<style lang="less"></style>
