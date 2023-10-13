class People {
    name?: string;
    age?: number;
}
class Student extends People {
    study() { }
}

// 两个类型属性和方法之间有重叠 或者 一样 或者呈子集关系

//例如1:
// 断言 as 
const p1 = new People()
p1 as Student
// 转换
const s1 = <Student>p1

// 例如2:
class People1 {
    name?: string;
    age?: number;
}
class Student1 {
    name?: string;
    age?: number;
    study() { }
}

// 断言 as 
const p2 = new People1()
p2 as Student1
// 转换
const s2 = <Student1>p2

// 例如3:
class People2 {
    private name?: string;
    private age?: number;
    constructor(name?: string, age?: number) {
        this.name = name
        this.age = age
    }

}
class Student2 {
    m?: number
    constructor() { }
    study1() { }
}

// 断言 as 
const p3 = new People2()
p3 as Student2
// 转换
const s3 = <Student2>p3

type ddd = {
    sdfed: string
}

// 如果 有子集关系或相同关系 则可以相互类型转换
interface UserInter {
    name1: string;
    age1: number;
    sayHi: () => void
}
class Users {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayHi() {
    }
}
const user1 = new Users('d', 1)
user1 as UserInter
const userInter1 = <UserInter>user1

function Test(params: User | Users) {
    params as Users; // 断言
    <Users>params;// 转换
}

//  | 联合类型获取的是共有属性或方法 & 获取的是两个相加的类型

type Type1 = {
    name: string;
    sex: string;
    sayWord: () => void;
    sayName: () => void;

}

type Type2 = {
    sex: string;
    sayWord: () => void;
    age: string;
    sayAge: () => void;
}
function Test2(params: Type1 | Type2, params2: Type1 & Type2) {
    params.sex
    params.sayWord

    params2.name
    params2.age
}

// 接口和接口之间是可以继承的

interface Inter1 {
    name: string;
    sex: string;
    sayWord: () => void;
    sayName: () => void;

}

interface Inter2 extends Inter1 {
    sex: string;
    sayWord: () => void;
    age: string;
    sayAge: () => void;
}
// 类型守卫