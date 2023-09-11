// ReturnType  获取 函数返回的类型
const funOne = () => () => 1
type FunOneType = ReturnType<typeof funOne>
const funTwo: FunOneType = () => 2