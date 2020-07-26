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
            this.data.push({id:data,name:data});
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
                {id: '0',name: '衣'},
                {id: '1',name: '食'},
                {id: '2',name: '住'},
                {id: '3',name: '行'},
            ];
            this.save();
        }
    }
};

// 模块第一次被加载时初始化数据
tagListModel.init();
export default tagListModel;