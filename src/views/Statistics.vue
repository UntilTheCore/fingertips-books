<template>
    <div class="statistics">
        <Layout>
            <Tabs :data-source="type" :type.sync="temp1"/>
            <Tabs class="tabs" prefix-class="xxx" :data-source="interval" :type.sync="temp2"/>
        </Layout>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import Tabs from '@/components/Tabs.vue';
    import { Component, Watch } from 'vue-property-decorator';
    import Types from '@/components/Money/Types.vue';

    @Component({
        components: {
            Types,
            Tabs,
        }
    })
    export default class Statistics extends Vue {
        interval: TabsDataType[]  = [
            {id:'day',value: '天'},
            {id:'week',value: '周'},
            {id:'month',value:'月'}
        ]
        type: TabsDataType[] = [
            {id:'-',value:'支出'},
            {id:'+',value:'收入'}
        ]
        temp1 = '+';
        temp2 = 'day';
        @Watch('temp1')
        onTemp1Change(){
            console.log(this.temp1);
        }
        @Watch('temp2')
        onTemp2Change(){
            console.log(this.temp2);
        }
    }

</script>

<style lang='scss' scoped>
    ::v-deep li {
        &.selected {
            background: #fff;
        }
    }

    .tabs ::v-deep .xxx-content {
        height: 32px;
    }

</style>