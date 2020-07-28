<template>
    <div class="statistics">
        <Layout>
            <template v-slot:header>
                <Tabs :data-source="type" :type.sync="tabSelect1" />
                <Tabs class="tabs" prefix-class="interval" :data-source="interval" :type.sync="tabSelect2" />
            </template>
            <ul class="container">
                <li v-for="(group,index) in resultByDay" :key="index">
                    <h3 class="title">{{beautifyTime(group.title)}}</h3>
                    <ul>
                        <li v-for="(item,index) in group.items" :key="index" class="item">
                            <span>{{item.selectTags.name || '无'}}</span>
                            <span class="note">{{item.note}}</span>
                            <span>￥{{item.amount}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </Layout>
    </div>
</template>

<style lang='scss' scoped>

    /* 控制 Layout > content 背景色 */
    ::v-deep .content {
        background : #f5f5f5;
    }

    ::v-deep li {
        &.selected {
            background : #fff;
        }
    }

    .tabs ::v-deep .interval-content {
        height : 32px;
    }

    .container {

        padding : 0 12px;

        %style {
            height      : 40px;
            line-height : 40px;
        }

        ul {
            border-radius : 15px;
            padding       : 0 10px;
            background    : #fff;
        }

        .title {
            @extend %style;
        }

        li.item {
            display         : flex;
            justify-content : space-between;
            @extend %style;

            .note {
                margin-right : auto;
                padding-left : 16px;
                color        : #999999;
            }
        }

    }
</style>
<script lang='ts'>
    import Vue from 'vue';
    import Tabs from '@/components/Tabs.vue';
    import { Component } from 'vue-property-decorator';
    import Types from '@/components/Money/Types.vue';
    import dayjs from 'dayjs';

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

        beautifyTime(str: string) {
            const days = ['今天', '昨天', '前天'];
            const api = dayjs(str);
            const now = dayjs();
            if ( api.isSame(now, 'day') ) {
                return '今天';
            } else if(api.isSame(now.subtract(1,'day'),'day')) {
                return '昨天'
            } else if( api.isSame(now.subtract(2,'day'),'day')) {
                return '前天';
            } else {
                if(api.isSame(now,'year')) {
                    return dayjs(str).format('M-D');
                } else {
                    return days(str).format('YYYY-M-D');
                }
            }
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


