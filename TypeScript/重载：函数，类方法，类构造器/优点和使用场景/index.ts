// 函数重载使用在功能相同 细节不同的场景中
// 联合类型只能取交集 value是 string |[] 类型 value只能取得length属性
// ts只有静态类型的推到 当类型在函数中执行时 不能推到出准确类型 如：例1 解决方案类型转换。const msg = <Message>getMessage("1") 转换只能好似联合类型中的一种


type MessageType = 'audo' | 'image' | 'string';
type Message = {
    id: string;
    type: MessageType;
    message: string;
}
const data: Message[] = [{
    id: '1',
    type: 'string',
    message: '信息1'
}, {
    id: '2',
    type: 'audo',
    message: '信息1'
}, {
    id: '3',
    type: 'string',
    message: '信息1'
}, {
    id: '4',
    type: 'audo',
    message: '信息1'
}, {
    id: '5',
    type: 'image',
    message: '信息1'
}]


function getMessage(value: string | MessageType): Message | Message[] | undefined {
    if (typeof value === 'string') {
        return data.find(v => v.id === value)
    } else {
        return data.filter(v => v.type === value)
    }
}
const msg = getMessage("1") // 例1: msg 类型为  Message | Message[] | undefined 没有自动推到出 Message类型