import { useEffect, useState, useLayoutEffect, memo, FC } from 'react'

function sleep(time: number, otherStr?: string) {
  const nowTime = Date.now()
  console.log('开始睡眠', nowTime, otherStr)
  while (Date.now() - nowTime < time * 1000) {

  }
  console.log('结束睡眠', Date.now(), otherStr)
}

function LearnEffect(props) {
  const [count, setCount] = useState(0)
  useLayoutEffect(() => {
    console.log('-----------useLayoutEffect start---------------')
    const logStr = '没有 deps 执行LayoutEffect'
    console.log(logStr)
    // sleep(2,'没有 deps')
    return () => {
      console.log('卸载', logStr)
    }
  })
  useLayoutEffect(() => {
    const logStr = 'deps 为[] 执行LayoutEffect'
    console.log(logStr)
    return () => {
      console.log('卸载', logStr)
    }
  }, [])
  useLayoutEffect(() => {
    const logStr = '监听 count deps 执行LayoutEffect'
    console.log(logStr, count)
    console.log('-----------useLayoutEffect end---------------')
    return () => {
      console.log('卸载', logStr)
    }
  }, [count])

  useEffect(() => {
    console.log('-----------useEffect start---------------')
    const logStr = '没有 deps 执行effect'
    console.log(logStr)
    return () => {
      console.log('卸载', logStr)
    }
  })
  useEffect(() => {
    const logStr = 'deps 为[] 执行effect'
    console.log(logStr)
    return () => {
      console.log('卸载', logStr)
    }
  }, [])
  useEffect(() => {
    const logStr = '监听 count deps 执行effect'
    console.log(logStr, count)
    console.log('-----------useEffect end---------------')
    return () => {
      console.log('卸载', logStr)
    }
  }, [count])
  /**
   * 首次渲染
    * 第一次函数执行
    * 同步执行 useLayoutEffect 如果useLayoutEffect 函数内有高耗时任务那么阻塞代码执行
    * 执行 return JSX
    * 执行 useEffect
   * setState触发渲染
    * 函数内部调用 setState
    * 重新执行函数
    * 卸载掉上次的 useLayoutEffect
    * 同步执行useLayoutEffect 如果useLayoutEffect 函数内有高耗时任务那么阻塞代码执行
    * 执行 return JSX
    * 卸载掉上次的  useEffect
    * 执行 useEffect
   * 
   */
  return (
    <>

      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        +1
      </button>
    </>
  )
}

export default LearnEffect

export const MemoLearnEffect = memo(LearnEffect)
