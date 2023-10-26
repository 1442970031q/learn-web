/**
 * vue2
 * 
 * 对于对象类型的数据 通过 Object.defineProperty通过劫持get set来进行数据劫持
 * 对于数组类型的数据 通过 重写数组原形上的方法这样能够检测到数组的改动
 * 
 * vue3
 * 对象类型的通过 Proxy，性能更好 对象可以进行 set get的劫持
 * 对于数组类型的通过 代理递归的方式进行处理
 */

function reactvie(obj) {
    const handle = {
        get(target, key) {
            const temp = target[key]
            if (typeof temp === 'object') {
                return new Proxy(temp, handle)
            }
            return temp
        },
        set(target, key, val) {
            target[key] = val
        }
    }
    return new Proxy(obj, handle)
}
