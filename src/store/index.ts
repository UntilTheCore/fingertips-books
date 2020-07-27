import Vue from 'vue';
import Vuex from 'vuex';
import generator from '@/lib/uniqueID';
import clone from '@/lib/clone';

Vue.use(Vuex);

const dbRecordList = 'fingerTipsBooks-recordList';
const dbTagList = 'fingerTipsBooks-tagList';
const store = new Vuex.Store({
    state: {
        recordList: [] as RecordItem[],
        tagList: [] as Tag[],
    },
    
    mutations: {
        // 处理record
        fetchRecordList(state) {
            state.recordList = JSON.parse(window.localStorage.getItem(dbRecordList) || '[]') as RecordItem[];
        },
        createRecord(state,data: RecordItem) {
            const record = clone(data);
            record.createAt = new Date();
            state.recordList.push(record);
            store.commit('saveRecordList');
        },
        saveRecordList(state) {
            window.localStorage.setItem(dbRecordList, JSON.stringify(state.recordList));
        },
        
        // 处理标签
        fetchTagList(state) {
            state.tagList = JSON.parse(window.localStorage.getItem(dbTagList) || '[]');
        },
        
        createTag(state,name: string) {
            const nameList = state.tagList.map(item => item.name);
            if ( nameList.indexOf(name) >= 0 ) {
                alert('标签名重复!');
            } else {
                const id: string = generator(name);
                state.tagList.push({ id, name });
                store.commit('saveTagList');
                alert('创建成功！');
            }
        },
        saveTagList(state) {
            window.localStorage.setItem(dbTagList, JSON.stringify(state.tagList));
        },
        removeTagById(state,id){
            console.log(id);
            let index = -1;
            for(let i = 0; i < state.tagList.length; i++ ){
                if(state.tagList[i].id === id){
                    index = i;
                    break;
                }
            }
            const tag = state.tagList.splice(index,1);
            if(tag){
                store.commit('saveTagList');
                alert('删除成功!');
                return true;
                Vue.prototype.$router.replace('/labels');
                // this.$router.replace('/labels');
            }else {
                return false;
            }
        },
        updateTag(state,{id,name}){
            for(let i = 0; i < state.tagList.length; i++) {
                if(state.tagList[i].id === id) {
                    if( state.tagList[i].name === name) {
                        return 'duplicate';
                    }
                    state.tagList[i].name = name;
                    store.commit('saveTagList');
                    return 'success';
                }
            }
            return 'not found';
        },
        init(state){
            if(window.localStorage.getItem(dbTagList) === null) {
                 state.tagList = [
                    {id: generator('衣'),name: '衣'},
                    {id: generator('食'),name: '食'},
                    {id: generator('住'),name: '住'},
                    {id: generator('行'),name: '行'},
                ];
                store.commit('saveTagList');
            }
        },
    },
    
});

store.commit('init');
export default store;
