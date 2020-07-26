import generator from '@/lib/uniqueID';

const dbName = 'fingertipsbooks-tagList';

const tagListModel: TagItem = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(dbName) || '[]');
        return this.data;
    },
    save() {
        window.localStorage.setItem(dbName, JSON.stringify(this.data));
    },
    create(data) {
        const nameList = this.data.map(item => item.name);
        if(nameList.indexOf(data) >= 0) {
            return 'duplicate';
        } else {
            const id: string = generator(data);
            this.data.push({id,name:data});
            this.save();
            return 'success';
        }
    },
    update(id,name){
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i].id === id) {
                if(this.data[i].name === name) {
                    return 'duplicate';
                }
                this.data[i].name = name;
                this.save();
                return 'success';
            }
        }
        return 'not found';
    },
    remove(id){
       let index = -1;
       for(let i = 0; i < this.data.length; i++ ){
           if(this.data[i].id === id){
               index = i;
               break;
           }
       }
       const tag = this.data.splice(index,1);
       if(tag){
           this.save();
           return true;
       }else {
           return false;
       }
    },
    init(){
        if(window.localStorage.getItem(dbName) === null) {
            this.data = [
                {id: generator('衣'),name: '衣'},
                {id: generator('食'),name: '食'},
                {id: generator('住'),name: '住'},
                {id: generator('行'),name: '行'},
            ];
            this.save();
        }
    }
};

// 模块第一次被加载时初始化数据
tagListModel.init();
export default tagListModel;