<template>
    <div class="chart" ref="container" :style="{height,width}">
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';
    import echarts from 'echarts';
    import EChartOption = echarts.EChartOption;

    @Component
    export default class Chart extends Vue {
        @Prop({required: true,type: Object}) options!: EChartOption;
        @Prop({type:String,default:'100%'}) width!: string;
        @Prop({type:String,default:'200px'}) height!: string;

        mounted() {
            // const divChart = this.$refs.container as HTMLDivElement;
            // const width = divChart.clientWidth;
            // divChart.style.height = width * 0.8 + 'px';

            const myChart = echarts.init(this.$refs.container as HTMLDivElement);
            myChart.setOption(this.options);
        }
    }
</script>

<style lang='scss' scoped>

</style>