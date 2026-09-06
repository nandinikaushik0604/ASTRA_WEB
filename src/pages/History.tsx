import React, { useEffect, useState } from 'react'
import { engine } from '../simulation'

export default function History(){
  const [, setTick] = useState(0)
  useEffect(()=>{
    const onChange = ()=> setTick(t=>t+1)
    engine.onChange(onChange)
  },[])

  return (
    <div style={{background:'linear-gradient(180deg, rgba(255,255,255,0.01), transparent)',border:'1px solid rgba(255,255,255,0.03)',padding:18}}>
      <div style={{fontSize:12,color:'var(--great-falls)'}}>04 — MISSION HISTORY</div>
      <ul style={{marginTop:12, listStyle:'none', padding:0}}>
        {engine.history.map((e,idx)=> (
          <li key={idx} style={{padding:'12px 0',borderTop:'1px dashed rgba(255,255,255,0.03)'}}>
            <div style={{fontSize:12,color:'var(--great-falls)'}}>{e.timestamp} · {e.title}</div>
            <div style={{color:'var(--cemetery-ash)',marginTop:6}}>{e.detail}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
