<template>
    <div class="statistics">
        <Layout>
            <template v-slot:header>
                <Tabs :data-source="type" :type.sync="incomeAndExpandType" />
                <!--<Tabs class="tabs" prefix-class="interval" :data-source="interval" :type.sync="tabSelect2" />-->
            </template>
            <template v-if="resultByDay">
                <ul class="container">
                    <li v-for="(group,index) in resultByDay" :key="index">
                        <h3 class="title">
                            <span>{{beautifyTime(group.title)}}</span>
                            <span>合计:￥{{group.total}}</span>
                        </h3>
                        <ul>
                            <li v-for="(item,index) in group.items" :key="index" class="item">
                                <span>{{resultSelectTag(item.selectTags) || '无标签'}}</span>
                                <span class="note">{{item.note}}</span>
                                <span>￥{{item.amount}}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </template>
            <template v-else>
                <div class="no-record">空空如也！赶紧记一笔吧！</div>
            </template>
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
    .no-record {
        position : absolute;
        top : 50%;
        left : 50%;
        transform: translate(-50%,-50%);
        white-space: nowrap;
    }

    .container {

        padding : 0 12px;

        %style {
            display         : flex;
            justify-content : space-between;
            height          : 40px;
            line-height     : 40px;
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
    import clone from '@/lib/clone';

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

            type hashTableType = {
                title: string;
                total: number;
                items: RecordItem[];
            }
            const cloneList = clone(recordList);
            if(cloneList.length === 0 ){
                return false;
            }
            const filterList = cloneList.filter(r => r.type === this.incomeAndExpandType);
            if ( filterList.length === 0) {
                return false;
            }
            const newList = filterList.sort((a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf());

            const result: hashTableType[] = [{
                title: dayjs(newList[0].createAt).format('YYYY-MM-DD'),
                total: 0,
                items: []
            }];

            for (let i = 0; i < newList.length; i++) {
                const current = newList[i];
                const last = result[result.length - 1];
                if ( dayjs(last.title).isSame(current.createAt, 'day') ) {
                    last.items.push(current);
                } else {
                    result.push({
                        title: dayjs(current.createAt).format('YYYY-MM-DD'),
                        total: 0,
                        items: [current]
                    });
                }
            }
            // 获得金额总计
            result.map(item => {
                item.total = item.items.reduce((sum, r) => {
                    return sum += r.amount;
                }, 0);
            });
            return result;
        }

        beautifyTime(str: string) {
            const api = dayjs(str);
            const now = dayjs();
            if ( api.isSame(now, 'day') ) {
                return '今天';
            } else if ( api.isSame(now.subtract(1, 'day'), 'day') ) {
                return '昨天';
            } else if ( api.isSame(now.subtract(2, 'day'), 'day') ) {
                return '前天';
            } else {
                if ( api.isSame(now, 'year') ) {
                    return dayjs(str).format('M月D日');
                } else {
                    return dayjs(str).format('YYYY年M月D日');
                }
            }
        }

        resultSelectTag(data: Tag[]) {
            let result = '';
            data.forEach(item => {
                result += item.name;
            });
            return result;
        }

        created() {
            this.$store.commit('fetchTagList');
            this.$store.commit('fetchRecordList');
            this.$store.commit('fetchRecordList');
        }

        // interval: TabsDataType[] = [
        //     { id: 'day', value: '天' },
        //     { id: 'week', value: '周' },
        //     { id: 'month', value: '月' }
        // ];
        type: TabsDataType[] = [
            { id: '-', value: '支出' },
            { id: '+', value: '收入' }
        ];
        // 预选按钮
        incomeAndExpandType = '-';
        // tabSelect2 = 'day';


    }

</script>


