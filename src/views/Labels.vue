<template>
    <Layout class-prefix="label-bgc">
        <div class="tags">
            <ul>
                <li>
                    <span>衣</span>
                    <Icon name="right"/>
                </li>
                <li>
                    <span>食</span>
                    <Icon name="right"/>
                </li>
                <li>
                    <span>住</span>
                    <Icon name="right"/>
                </li>
                <li>
                    <span>行</span>
                    <Icon name="right"/>
                </li>
            </ul>
            <div class="newTag">新建标签</div>
        </div>
    </Layout>
</template>

<script lang='ts'>
    export default {
        name: 'labels'
    };
</script>

<style>
    .label-bgc-content {
        background: #f5f5f5;
    }
</style>

<style lang='scss' scoped>
    .tags {
        display: flex;
        flex-direction: column;
        align-items: center;
        /*background: #f5f5f5;*/
        /*height: calc(var(--vh, 1vh));*/
        /*min-height: calc(var(--vh, 1vh));*/
        width: 100%;
        font-size: 16px;
        ul {
            width: inherit;
            padding-left: 16px;
            background-color: #fff;
            li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 44px;
                border-bottom: 1px solid #e6e6e6;
                span {
                }
                svg {
                    margin-right: 16px;
                }
            }
        }

        .newTag {
            height: 40px;
            width: 100px;
            margin-top: 50px;
            margin-bottom: 100px;
            line-height: 40px;
            text-align: center;
            background: #767676;
            border-radius: 4px;
            color: #fff;

        }
    }
</style>