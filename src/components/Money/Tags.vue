<template>
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
</template>

<script lang='ts'>
    export default {
        name: 'Tags'
    };
</script>

<style lang='scss' scoped>
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
</style>