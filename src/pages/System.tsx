import React from 'react'

export default function System(){
  const rows = [
    ['MODEL STATE','Ready'],
    ['INFERENCE ENGINE','Simulated / ONNX Ready'],
    ['INFERENCE LATENCY','24 ms'],
    ['FRAME RATE','30 FPS'],
    ['MODEL MEMORY','512 MB'],
    ['VIDEO BUFFER','12 sec'],
    ['LOCAL STORAGE','Available'],
    ['CONNECTION','Offline-First'],
    ['CLOUD DEPENDENCY','None'],
    ['SYSTEM LOAD','28 %'],
  ]
  return (
    <div style={{display:'flex',gap:24}}>
      <div style={{flex:1,background:'linear-gradient(180deg, rgba(255,255,255,0.01), transparent)',border:'1px solid rgba(255,255,255,0.03)',padding:18}}>
        <div style={{fontSize:12,color:'var(--great-falls)'}}>05 — SYSTEM STATUS</div>
        <div style={{marginTop:12}}>
          <div style={{width:240,height:320,background:'transparent',border:'1px solid rgba(255,255,255,0.03)'}}>
            {/* Placeholder for technical line-art */}
          </div>
        </div>
      </div>
      <div style={{width:360,background:'linear-gradient(180deg, rgba(255,255,255,0.01), transparent)',border:'1px solid rgba(255,255,255,0.03)',padding:18}}>
        {rows.map(([k,v])=> (
          <div key={k} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid rgba(255,255,255,0.02)'}}>
            <div style={{color:'var(--great-falls)',fontSize:13}}>{k}</div>
            <div style={{color:'var(--cemetery-ash)',fontSize:13}}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
