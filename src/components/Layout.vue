<template>
    <div class="layout">
        <div class="content">
            <slot />
        </div>
        <Nav class="nav"/>
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'Layout',
        mounted() {
            // 开启元素滚动，用于处理iOS“橡皮筋”效果
            const content = document.querySelector('.content' );
            content?.addEventListener('touchmove',e => {
               e.stopPropagation();
            },{passive:false,capture:false});

            // 阻止在 iOS端滚到头后，停顿一会儿再滚带动整个页面发生滚动。
            content?.addEventListener('touchmove', e => {
                if(content.scrollTop <= 0){
                    content.scrollTop = 1
                }else if(content.scrollTop + content.clientHeight >= content.scrollHeight) {
                    content.scrollTop = content.scrollHeight - content.clientHeight - 1;
                }
                e.stopPropagation();
            },{passive:false,capture:false});
        },
    };
</script>

<style lang='scss' scoped>
    .layout {
        display: flex;
        flex-direction: column;
        /*height: 100vh;*/
        height: calc(var(--vh, 1vh));


        .content {
            flex-grow: 1;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
        }

        /* 隐藏滚动条 */
        .content::-webkit-scrollbar {
            height: 0 !important;
        }

        /* 防止Nav组件因content内容变多被压缩 */
        .nav {
            flex-shrink: 0;
        }
    }

</style>