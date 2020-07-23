<template>
    <div class="notes">
        <label>
            <span class="name">备注</span>
            <input type="text" placeholder="在这里添加备注">
        </label>
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'notes'
    };
</script>

<style lang='scss' scoped>
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
</style>