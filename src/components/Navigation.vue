<template>
    <div class="navigation">
        <div id="nav">
            <router-link to="/labels">
                <svg>
                    <use xlink:href="#icon_label"></use>
                </svg>
                标签
            </router-link>
            <router-link to="/money">
                <svg>
                    <use xlink:href="#icon_money"></use>
                </svg>
                记一笔
            </router-link>
            <router-link to="/statistics">
                <svg>
                    <use xlink:href="#icon_statistics"></use>
                </svg>
                统计
            </router-link>
        </div>
    </div>
</template>

<script lang='ts'>
    // 引入svg目录而不用一个个引入
    const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
    try {
        importAll(require.context('../assets/icons',true,/\.svg$/))
    }catch(error) {
        console.log(error);
    }
    export default {
        name: 'navigation'
    };
</script>

<style lang='scss' scoped>

    #nav {
        display: flex;
        box-shadow: 0 0 3px rgba(0, 0, 0, .3);

        a {
            flex: 1;
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }

        .icon {
            width: 1em;
            height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
        }
    }


</style>