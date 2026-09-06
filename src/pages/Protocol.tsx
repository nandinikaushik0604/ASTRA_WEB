import React from 'react'

export default function Protocol(){
  const steps = [
    'Initialize Workspace',
    'Locate Container',
    'Open Holder',
    'Insert Container',
    'Secure Container',
    'Confirm Placement',
    'Record Observation',
  ]
  return (
    <div style={{display:'flex',gap:24}}>
      <div style={{width:320,background:'linear-gradient(180deg, rgba(255,255,255,0.01), transparent)',border:'1px solid rgba(255,255,255,0.03)',padding:18}}>
        <div style={{fontSize:12,color:'var(--great-falls)'}}>03 — EXPERIMENT PROTOCOL</div>
        <ol style={{marginTop:12,color:'var(--great-falls)'}}>
          {steps.map((s,i)=> (
            <li key={s} style={{marginBottom:14,opacity:i===3?1:0.6}}>
              <div style={{fontSize:14,color: i===3? 'var(--cemetery-ash)': 'var(--great-falls)'}}>{String(i+1).padStart(2,'0')} — {s}</div>
            </li>
          ))}
        </ol>
      </div>
      <div style={{flex:1,background:'linear-gradient(180deg, rgba(255,255,255,0.01), transparent)',border:'1px solid rgba(255,255,255,0.03)',padding:18}}>
        <div style={{fontSize:12,color:'var(--great-falls)'}}>STEP 04 / 07</div>
        <div style={{fontSize:20,color:'var(--cemetery-ash)',marginTop:8}}>Insert Container</div>
        <div style={{marginTop:12,color:'var(--great-falls)'}}>EXPECTED</div>
        <div style={{color:'var(--cemetery-ash)',marginTop:6}}>Container aligned with holder</div>
        <div style={{marginTop:12,color:'var(--great-falls)'}}>OBSERVED</div>
        <div style={{color:'var(--cemetery-ash)',marginTop:6}}>Hand-container interaction</div>
        <div style={{marginTop:12,color:'var(--great-falls)'}}>CONFIDENCE</div>
        <div style={{color:'var(--cemetery-ash)',marginTop:6}}>61 %</div>
      </div>
    </div>
  )
}
