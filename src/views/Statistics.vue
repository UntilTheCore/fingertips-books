<template>
    <div class="statistics">
        <Layout>
            <Tabs :data-source="type" :type.sync="tabSelect1"/>
            <Tabs class="tabs" prefix-class="xxx" :data-source="interval" :type.sync="tabSelect2"/>
            <div v-for="(group,index) in resultByDay" :key="index">
                <h3>{{group.title}}</h3>
                <div v-for="(item,index) in group.items" :key="index">
                    {{item.amount}}
                </div>
            </div>
        </Layout>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import Tabs from '@/components/Tabs.vue';
    import { Component } from 'vue-property-decorator';
    import Types from '@/components/Money/Types.vue';

    type hashTableValue = { title: string; items: RecordItem[] };

    @Component({
        components: {
            Types,
            Tabs,
        }
    })
    export default class Statistics extends Vue {
        get recordList() {
            return (this.$store.state as rootState).recordList;
        }

        get resultByDay() {
            const { recordList } = this;

            const hashTable: { [key: string]: hashTableValue } = {};

            for (let i = 0; i < recordList.length; i++) {
                const title = recordList[i].createAt.split('T')[0];
                hashTable[title] = hashTable[title] || { title: title, items: [] };
                hashTable[title].items.push(recordList[i]);
            }
            return hashTable;
        }

        created() {
            this.$store.commit('fetchRecordList');
        }

        interval: TabsDataType[] = [
            { id: 'day', value: '天' },
            { id: 'week', value: '周' },
            { id: 'month', value: '月' }
        ];
        type: TabsDataType[] = [
            { id: '-', value: '支出' },
            { id: '+', value: '收入' }
        ];
        // 预选按钮
        tabSelect1 = '+';
        tabSelect2 = 'day';


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