const dbName = 'fingertipsbooks-recordList';
const recordListModel = {
   fetch() {
      return JSON.parse(window.localStorage.getItem(dbName) || '[]') as RecordItem[];
   },
   save(data: RecordItem[]) {
      window.localStorage.setItem(dbName,JSON.stringify(data));
   },
   clone(data: RecordItem) {
      return JSON.parse(JSON.stringify(data)) as RecordItem;
   }
}

export default recordListModel;