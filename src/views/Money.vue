<template>
    <div class="money">
        <Layout class-prefix="layout">
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

            <div>
                <ul class="types">
                    <li class="selected">支出</li>
                    <li>收入</li>
                </ul>
            </div>

            <div class="notes">
                <label>
                    <span class="name">备注</span>
                    <input type="text" placeholder="在这里添加备注">
                </label>
            </div>

            <div class="tags">
                <ul class="current">
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ul>
                <div class="new">
                    <button>新增标签</button>
                </div>
            </div>
        </Layout>
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'money'
    };
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
<style lang='scss' scoped>
    @import "~@/assets/styles/helper.scss";

    .tags {
        font-size: 14px;
        padding: 16px;
        width: 100%;

        > .current {
            display: flex;
            flex-wrap: wrap;
            overflow: auto;
            > li {
                $h: 24px;
                height: $h;
                line-height: $h;
                padding: 0 16px;
                margin-bottom: 4px;
                margin-right: 8px;
                background: #d9d9d9;
                border-radius: 12px;
            }
        }

        > .new {
            margin-top: 16px;

            > button {
                background-color: transparent;
                border-bottom: 1px solid #666;
                padding: 2px 5px;
                font-family: inherit;
                color: #999;
            }
        }

    }

    .notes {
        display: flex;
        background: #e5e5e5;
        padding-left: 16px;
        flex-shrink: 0;

        > label {
            display: flex;
            width: 100%;
            align-items: center;

            .name {
                font-size: 14px;
                margin-right: 10px;
            }

            input {
                flex: 1;
                height: 64px;
                background: transparent;
            }
        }
    }

    .types {
        background: #C4C4C4;
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