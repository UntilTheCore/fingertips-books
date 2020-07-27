export default function clone(data: RecordItem) {
    return JSON.parse(JSON.stringify(data)) as RecordItem;
}