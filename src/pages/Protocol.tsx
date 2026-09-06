import React, { useEffect, useState } from 'react'
import { engine } from '../simulation'

export default function Protocol(){
  const [, setTick] = useState(0)
  useEffect(()=>{
    const onChange = ()=> setTick(t=>t+1)
    engine.onChange(onChange)
  },[])

  return (
    <div style={{display:'flex',gap:24}}>
      <div style={{width:380,background:'linear-gradient(180deg, rgba(255,255,255,0.01), transparent)',border:'1px solid rgba(255,255,255,0.03)',padding:18}}>
        <div style={{fontSize:12,color:'var(--great-falls)'}}>03 — EXPERIMENT PROTOCOL</div>
        <div style={{marginTop:12}}>
          {engine.steps.map((s)=> (
            <div key={s.id} style={{display:'flex',gap:12,alignItems:'center',padding:'12px 0',opacity:s.status==='active'?1:0.7}}>
              <div style={{width:36,height:36,borderRadius:18,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid rgba(255,255,255,0.04)'}}>{String(s.id).padStart(2,'0')}</div>
              <div>
                <div style={{fontSize:14,color:s.status==='active'? 'var(--cemetery-ash)':'var(--great-falls)'}}>{s.title}</div>
                <div style={{fontSize:12,color:'var(--great-falls)'}}>{s.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{flex:1,background:'linear-gradient(180deg, rgba(255,255,255,0.01), transparent)',border:'1px solid rgba(255,255,255,0.03)',padding:18}}>
        <div style={{fontSize:12,color:'var(--great-falls)'}}>STEP {engine.inference.step} / 07</div>
        <div style={{fontSize:20,color:'var(--cemetery-ash)',marginTop:8}}>{engine.steps.find(s=>s.status==='active')?.title || '—'}</div>
        <div style={{marginTop:12,color:'var(--great-falls)'}}>EXPECTED</div>
        <div style={{color:'var(--cemetery-ash)',marginTop:6}}>{engine.inference.expected}</div>
        <div style={{marginTop:12,color:'var(--great-falls)'}}>OBSERVED</div>
        <div style={{color:'var(--cemetery-ash)',marginTop:6}}>{engine.inference.observed}</div>
        <div style={{marginTop:12,color:'var(--great-falls)'}}>CONFIDENCE</div>
        <div style={{color:'var(--cemetery-ash)',marginTop:6}}>{Math.round(engine.inference.confidence)} %</div>
        <div style={{marginTop:12,color:'var(--great-falls)'}}>DECISION</div>
        <div style={{color:'var(--cemetery-ash)',marginTop:6}}>{engine.inference.decision}</div>
      </div>
    </div>
  )
}
