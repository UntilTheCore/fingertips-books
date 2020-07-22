<template>
    <nav class="navigation">
        <router-link to="/labels" class="item" active-class="selected">
            <Icon name="label" class="ico"/>
            标签
        </router-link>
        <router-link to="/money" class="item" active-class="selected">
            <Icon name="money" class="ico"/>
            记一笔
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="statistics" class="ico"/>
            统计
        </router-link>
    </nav>
</template>

<script lang='ts'>
    // 引入svg目录而不用一个个引入
    export default {
        name: 'navigation',
        mounted() {
            const nav = document.querySelector('.navigation')
            // 阻止安卓浏览器上对导航栏长按弹出浏览器菜单
            // 对国产流氓浏览器无效。
            nav?.addEventListener('contextmenu', e => {
                e.preventDefault();
                e.stopPropagation();
            })
        }
    };
</script>

<style lang='scss' scoped>

    nav {
        display: flex;
        text-align: center;
        box-shadow: 0 0 3px rgba(0, 0, 0, .25);
        padding: 5px 0;

        /* 取消a标签长按菜单 */
        -webkit-touch-callout:none;
        -webkit-user-select:none;
        -khtml-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;

        .item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;

            &.selected {
                color: #42b983;
            }

            > .ico {
                width: 1.5em;
                height: 1.5em;
            }
        }
    }
</style>