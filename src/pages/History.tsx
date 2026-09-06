import React from 'react'

export default function History(){
  const events = [
    ['00:39:12','Step 01','System initialized'],
    ['00:40:05','Step 02','Container detected'],
    ['00:40:38','Step 03','Holder opened'],
    ['00:41:12','Step 04','Uncertainty detected — Confidence: 61 %'],
    ['00:41:27','Step 04','Temporal evidence sufficient — Confidence: 87 %'],
    ['00:42:09','Step 05','Protocol deviation confirmed'],
    ['00:42:11','ASSISTANCE','ASTRA voice prompt issued'],
    ['00:43:26','Step 05','Deviation resolved'],
    ['00:44:10','Step 06','Placement confirmed'],
    ['00:45:02','Step 07','Observation recorded'],
  ]
  return (
    <div style={{background:'linear-gradient(180deg, rgba(255,255,255,0.01), transparent)',border:'1px solid rgba(255,255,255,0.03)',padding:18}}>
      <div style={{fontSize:12,color:'var(--great-falls)'}}>04 — MISSION HISTORY</div>
      <ul style={{marginTop:12, listStyle:'none', padding:0}}>
        {events.map(([t,step,msg])=> (
          <li key={t} style={{padding:'12px 0',borderTop:'1px dashed rgba(255,255,255,0.03)'}}>
            <div style={{fontSize:12,color:'var(--great-falls)'}}>{t} · {step}</div>
            <div style={{color:'var(--cemetery-ash)',marginTop:6}}>{msg}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
