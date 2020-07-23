<template>
    <div class="numberPad">
        <div class="output">￥100</div>
        <div class="buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>刪除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>清除</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button class="ok">OK</button>
            <button class="zero">0</button>
            <button>.</button>
        </div>
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'NumberPad'
    };
</script>

<style lang='scss' scoped>
    @import "~@/assets/styles/helper.scss";
    .numberPad {
        .output {
            height: 72px;
            line-height: 72px;
            text-align: right;
            padding-right: 10px;
            font-size: 36px;
            font-family: Consolas, monospace;
            @extend %innerShadow;
        }

        .buttons {
            @extend %clearFix;

            button {
                display: block;
                width: 25%;
                height: 64px;
                float: left;
                font-size: 16px;
                background: transparent;
                font-weight: bold;

                &.ok {
                    height: 128px;
                    float: right;
                }

                &.zero {
                    width: 50%;
                }

                $bgc: #f2f2f2;

                &:nth-child(1) {
                    background: $bgc;
                }

                &:nth-child(2),
                &:nth-child(5) {
                    background: darken($bgc, 4%);
                }

                &:nth-child(3),
                &:nth-child(6),
                &:nth-child(9) {
                    background: darken($bgc, 8%);
                }

                &:nth-child(4),
                &:nth-child(7),
                &:nth-child(10), {
                    background: darken($bgc, 12%);
                }

                &:nth-child(8),
                &:nth-child(11),
                &:nth-child(13) {
                    background: darken($bgc, 16%);
                }

                &:nth-child(14) {
                    background: darken($bgc, 20%);
                }

                &:nth-child(12) {
                    background: darken($bgc, 24%);
                }
            }
        }
    }
</style>