const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"
/**
 * 第一阶段 会有个异步函数不执行的问题 因为.then 执行的时候 状态还没更改
 * 
 * const promise =new PromiseA((resolve,reject)=>{
 * setTimeout(()=>{resolve("ok")},2000)
 *  })
 * promise.then(res=>{
 * console.log(res)
 *  })
 */
// class PrmoiseA {
//     constructor(cb) {
//       cb && cb(this.resolve,this.reject)
//     }
//     status = PENDING
//     value
//     rasion
//     /**
//      * 为什么不用 resolve (){} 
//      * 因为resolve 不经过实例调用其中的this为undefined
//      */
//     resolve = (value) => {
//         if (this.status === PENDING) {
//             this.status = FULFILLED
//             this.value = value
//         }

//     }
//     reject = (rasion) => {
//         if (this.status === PENDING) {
//             this.status = FULFILLED
//             this.rasion = rasion
//         }
//     }
//     // then 是放在实例上调用
//     then(onResolve, onReject) {
//         if (this.status === FULFILLED) {
//             onResolve && onResolve(this.value)
//         } else if (this.status === REJECTED) {
//             onReject && onResolve(this.rasion)
//         }
//     }
// }

/**
 * 第二阶段 解决异步
 * 异步解决了但是只会执行第一个
 * const promise =new PromiseA((resolve,reject)=>{
 * setTimeout(()=>{resolve("ok")},2000)
 *  })
 * promise.then(res=>{
 * console.log(res)
 *  })
 *  promise.then(res=>{
 * console.log(res)
 *  })
 */
// class PrmoiseA {
//     constructor(cb) {
//        cb && cb(this.resolve,this.reject)
//     }
//     status = PENDING
//     value
//     rasion
//     onRejectCB = null
//     onResolveCB = null
//     /**
//      * 为什么不用 resolve (){} 
//      * 因为resolve 不经过实例调用其中的this为undefined
//      */
//     resolve = (value) => {
//         if (this.status === PENDING) {
//             this.status = FULFILLED
//             this.value = value
//             this.onRejectCB && this.onRejectCB(this.value)
//         }

//     }
//     reject = (rasion) => {
//         if (this.status === PENDING) {
//             this.status = FULFILLED
//             this.rasion = rasion
//             this.onRejectCB && this.onRejectCB(this.rasion)
//         }
//     }
//     // then 是放在实例上调用
//     then(onResolve, onReject) {
//         if (this.status === FULFILLED) {
//             onResolve && onResolve(this.value)
//         } else if (this.status === REJECTED) {
//             onReject && onResolve(this.rasion)
//         } else if (this.status === PENDING) {
//             this.onRejectCB = onReject
//             this.onResolveCB = onResolve
//         }
//     }
// }

/**
 * 第三阶段
 * 执行多个.then 链式调用
 */
class PrmoiseA {
    constructor(cb) {
        cb && cb(this.resolve, this.reject)
    }
    status = PENDING
    value
    rasion
    onRejectCBArr = []
    onResolveCBArr = []
    /**
     * 为什么不用 resolve (){} 
     * 因为resolve 不经过实例调用其中的this为undefined
     */
    resolve = (value) => {
        if (this.status === PENDING) {
            this.status = FULFILLED
            this.value = value
            while (this.onResolveCBArr.length) {
                this.onResolveCBArr.shift()(this.value)
            }
        }

    }
    reject = (rasion) => {
        if (this.status === PENDING) {
            this.status = FULFILLED
            this.rasion = rasion
            while (this.onRejectCBArr.length) {
                this.onRejectCBArr.shift()(this.rasion)
            }
        }
    }
    // then 是放在实例上调用 所以可以获得this
    then(onResolve, onReject) {
        const promiseOther = new PrmoiseA((resolveOther, rejectOther) => { // 不懂
            if (this.status === FULFILLED) {
                queueMicrotask(() => {
                    if (onResolve) {
                        const x = onResolve(this.value)
                        resolvePromise(promiseOther, x, resolveOther, rejectOther)
                    }
                })
            } else if (this.status === REJECTED) {
                onReject && onResolve(this.rasion)
            } else if (this.status === PENDING) {
                this.onRejectCBArr.push(onReject)
                this.onResolveCBArr.push(onResolve)
            }
        })
        return promiseOther
    }
}

function resolvePromise(promiseOther, x, resolve, reject) {
    if (promiseOther === x) {
        return reject(new TypeError("不能返回实例"))
    }
    if (x instanceof PrmoiseA) {
        x.then((v) => resolve(v), (v) => reject(v))
    } else {
        resolve(x)
    }
}
// PrmoiseA.deferred = function () {
//     var result = {};
//     result.promise = new PrmoiseA(function (resolve, reject) {
//         result.resolve = resolve;
//         result.reject = reject;
//     });

//     return result;
// }

// module.exports = PrmoiseA
export default PrmoiseA