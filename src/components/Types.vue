<template>
    <div class="types">
        <ul>
            <li class="selected">支出</li>
            <li>收入</li>
        </ul>
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'Types'
    };
</script>

<style lang='scss' scoped>
    .types {
        background: #C4C4C4;

        > ul {
            display: flex;

            > li {
                flex: 1;
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                height: 64px;

                &.selected::after {
                    content: "";
                    display: block;
                    width: 100%;
                    border: 2px solid #333;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                }
            }
        }
    }
</style>