<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    export default class App extends Vue{
            init(): void {
                // 阻止双击放大
                let lastTouchEnd = 0;
                document.addEventListener('touchstart', function (event) {
                    if ( event.touches.length > 1 ) {
                        event.preventDefault();
                    }
                });
                document.addEventListener('touchend', function (event) {
                    const now = (new Date()).getTime();
                    if ( now - lastTouchEnd <= 300 ) {
                        event.preventDefault();
                    }
                    lastTouchEnd = now;
                }, false);

                // 阻止双指放大
                document.addEventListener('gesturestart', function (event) {
                    event.preventDefault();
                });

                // 阻止页面滚动，用于优化iOS“橡皮筋”效果
                window.addEventListener('touchmove', function (e) {
                    e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
                }, { passive: false }); //passive 参数不能省略，用来兼容ios和android

                // 动态获取视口大小
                const vh = window.innerHeight;
                document.documentElement.style.setProperty('--vh', `${ vh }px`);

                window.addEventListener('resize', () => {
                    const vh = window.innerHeight;
                    document.documentElement.style.setProperty('--vh', `${ vh }px`);
                });
        }

        mounted(): void {
            this.init();
        }
    }
</script>

<style lang="scss">
    @import "~@/assets/styles/reset.scss";
    @import '~@/assets/styles/helper.scss';

    body {
        font-family: $font-hei;
        font-size: 16px;
        color : #333;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.5;
    }

</style>
