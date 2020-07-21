<template>
    <nav class="navigation">
        <router-link to="/labels" class="item">
            <Icon name="icon_label" class="ico"/>
            标签
        </router-link>
        <router-link to="/money" class="item">
            <Icon name="icon_money" class="ico"/>
            记一笔
        </router-link>
        <router-link to="/statistics" class="item">
            <Icon name="icon_statistics" class="ico"/>
            统计
        </router-link>
    </nav>
</template>

<script lang='ts'>
    // 引入svg目录而不用一个个引入
    export default {
        name: 'navigation',
    };
</script>

<style lang='scss' scoped>

    nav {
        display: flex;
        text-align: center;
        box-shadow: 0 0 3px rgba(0, 0, 0, .3);
        padding: 5px 0;

        .item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-weight: bold;
            color: #2c3e50;
            font-size: 32px;

            &.router-link-exact-active {
                color: #42b983;
            }

            > .ico {
                width: 2em;
                height: 2em;
            }
        }
    }
</style>