<template>
    <div class="navigation">
        <div id="nav">
            <router-link to="/labels">
                <Icon name="icon_label"/>
                标签
            </router-link>
            <router-link to="/money">
                <Icon name="icon_money"/>
                记一笔
            </router-link>
            <router-link to="/statistics">
                <Icon name="icon_statistics" />
                统计
            </router-link>
        </div>
    </div>
</template>

<script lang='ts'>
    // 引入svg目录而不用一个个引入
    export default {
        name: 'navigation',
    };
</script>

<style lang='scss' scoped>

    #nav {
        display: flex;
        text-align: center;
        box-shadow: 0 0 3px rgba(0, 0, 0, .3);


        a {
            flex: 1;
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>