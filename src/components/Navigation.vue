<template>
    <div class="c-navigation">
        <div id="nav">
            <router-link to="/labels">标签</router-link>
            <router-link to="/money">记一笔</router-link>
            <router-link to="/statistics">统计</router-link>
        </div>
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'navigation'
    };
</script>

<style lang='scss' scoped>

    #nav {
        display: flex;
        position: absolute;
        bottom: 0;
        min-width: 100%;
        box-shadow: 0 0 3px rgba(0,0,0,.3);

        a {
            flex: 1;
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }

        .icon {
            width: 1em; height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
        }
    }



</style>