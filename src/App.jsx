import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import gsap from "gsap"

const App = () => {
 const randomx= gsap.utils.random(-500,500,100)
 const randomy= gsap.utils.random(-360,360,30)

 const [first, setfirst] = useState(0)
 const [second, setSecond] = useState(0)
 const useBox=useRef()

  useGSAP(()=>{
    gsap.to(useBox.current,{
      x:first,
      duration:1,
      rotate:second,
    })
  },[first,randomy])
  return (
    <>
    <main>
      <button onClick={()=>{
        setfirst(randomx)
        setSecond(randomy)
      }} >click</button>
    <div ref={useBox} className='box'></div>

    </main>


    </>
    
  )
}

export default App
