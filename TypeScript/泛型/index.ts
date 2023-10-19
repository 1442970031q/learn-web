enum DatePick{
    day,
    one,
    seven,
}

interface PeopleProps {
    name: string;
    age: number
}

class Peoples {
    name!: string;
    age!: number
    constructor({ name, age }: PeopleProps) {
        this.name = name
        this.age = age
    }
    // 原型上
    say() {
        console.log(this.name, this.age)
    }
}

//泛型 默认值
class TestOne<T = number>{
    getData(v: T) {
        console.log(v)
    }
}

//Object 和 unknow 和 object区别
// Object 是Number Boolean Function String Array的父类  父类可以接受子类多态特性

let testTwo: Object
testTwo = true
testTwo = 1
testTwo = function () { }
testTwo = 'ddd'
testTwo = []
testTwo = {}
testTwo = {}
testTwo = new TestOne()
testTwo = Function
testTwo = Array
//object 只能是对象类型 并且没有类型提示
let testTree: object
testTree = {}
testTree = new TestOne()
testTree = Function
testTree = Array
// unknow 是任何类型的父类
let testFore: unknown
testFore = Array

// 泛型约束 
//extends
class TestFive<T extends object>{
    name!: string // ! 强制断言 非空断言
}
// new TestFive<string>() 错误案例

// keyof 获取类型的 属性联合类型
const p4 = new Peoples({ "name": '章三', age: 12 })
type PeopleKeyof = keyof typeof DatePick
const p5: PeopleKeyof = 'day'



