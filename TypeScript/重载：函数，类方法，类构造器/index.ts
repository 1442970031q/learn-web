// 函数重载使用在功能相同 细节不同的场景中
// 联合类型只能取交集 value是 string |[] 类型 value只能取得length属性
// ts只有静态类型的推到 当类型在函数中执行时 不能推到出准确类型 如：例1 解决方案类型转换。const msg = <Message>getMessage("1") 转换只能好似联合类型中的一种
// left ?? right 如果左侧时null undefined 时候返回右侧值

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


function getMessage(value: MessageType): Message[];
function getMessage(value: string): Message;
// function getMessage(value: string | MessageType | number): Message | Message[] | undefined | string {
function getMessage(value: string | MessageType | number) { // 自动推断出类型
    if (typeof value === 'string') {
        if (value === '1') {
            return '1'
        }
        return data.find(v => v.id === value)
    } else if (typeof value !== "number") {
        return data.filter(v => v.type === value)
    }
}

const msg = getMessage("1") // 例1: msg 类型为  Message | Message[] | undefined 没有自动推到出 Message类型


class User {
    sayName(v: string): string
    sayName(v: number): number
    sayName(v: number | string): number | string {
        return v
    }
}

// 函数重载的定义
/**
 * 函数签名： 函数名称 函数参数 函数参数类型 函数返回值类型
 * 
 * 1. 一个函数签名和多个重载签名
 * 2. 使用重载签名 不能使用实现签名  实现签名是给重载签名使用 在执行时看不到实现签名。
 * 3. 传入不同的参数类型会推断出要使用的函数类型
 * 4. 实现签名 参数类型 和返回值类型要兼容重载签名，实现签名如果没有返回类型会自动推断出类型。
 */


let n: unknown = []
// any和unknow
/**
 * unknow只能做为其他类型的父类 可以赋值 number ，string,null,undefined ,boolean ,Object等其他类型 但是不能把unknow赋值给
 * 其他类型 
 */
