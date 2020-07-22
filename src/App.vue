<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script lang="ts">
    export default {
        name:'App',
        mounted() {
            // 动态获取视口大小
            const vh = window.innerHeight;
            document.documentElement.style.setProperty('--vh', `${vh}px`)

            window.addEventListener('resize', () => {
                const vh = window.innerHeight;
                document.documentElement.style.setProperty('--vh', `${vh}px`)
            })
        },
    }
</script>

<style lang="scss">

    * {
        padding: 0;
        margin: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    
    *::after,
    *::before {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
    }

    /* 取消 a 标签一些默认样式 */
    a,a:hover,a:active,a:visited,a:link,a:focus{
        -webkit-tap-highlight-color:rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
        outline:none;
        background: none;
        text-decoration: none;
        color: inherit;
    }


    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
