<template>
    <div class="icon">
        <svg class="icon" >
            <use :xlink:href="'#'+name"></use>
        </svg>
    </div>
</template>

<script lang='ts'>
    const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
    try {
        importAll(require.context('../assets/icons', true, /\.svg$/));
    } catch (error) {
        console.log(error);
    }
    export default {
        name: 'Icon',
        props: ['name'],

    };
</script>

<style lang='scss' scoped>
    div {
        .icon {
            width: 3em;
            height: 3em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
        }
    }
</style>