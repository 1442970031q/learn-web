import { useEffect, useState, useLayoutEffect } from 'react'
import LearnEffect,{MemoLearnEffect} from './learn_effect'
import './App.css'



function App1() {
  const [isShow, setShow] = useState(false)

  return (
    <>
      <h1>{isShow}</h1>
      {isShow ? <LearnEffect /> : null}
      <div style={{
        display: isShow ? '' : 'none'
      }}>
        <LearnEffect />
      </div>
      <button onClick={() => setShow(v => !v)}>
        {isShow ? '隐藏' : '展示'}
      </button>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>没有memo</h1>
      <LearnEffect />
      <h1>---------------------</h1>
      {/* <h1>有memo</h1>
      <MemoLearnEffect />
      <h1>---------------------</h1> */}
      <h1>{count}</h1>
      <button onClick={() => setCount(v => v += 1)}>
        App +1
      </button>
    </>
  )
}

export default App
