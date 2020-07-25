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