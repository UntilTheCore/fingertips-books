<template>
    <div class="chart" ref="container" :style="{height,width}">
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component, Prop, Watch } from 'vue-property-decorator';
    import echarts from 'echarts';
    import EChartOption = echarts.EChartOption;

    @Component
    export default class Chart extends Vue {
        @Prop({required: true,type: Object}) options!: EChartOption;
        @Prop({type:String,default:'100%'}) width!: string;
        @Prop({type:String,default:'200px'}) height!: string;

        myChart!: echarts.ECharts;

        @Watch('options')
        onOptionsChange() {
            this.myChart.setOption(this.options);
        }
        mounted() {
            this.myChart = echarts.init(this.$refs.container as HTMLDivElement);
            this.myChart.setOption(this.options);
        }
    }
</script>

<style lang='scss' scoped>

</style>