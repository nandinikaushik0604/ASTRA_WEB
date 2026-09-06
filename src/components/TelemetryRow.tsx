import React from 'react'

export default function TelemetryRow({label,value}:{label:string,value:string}){
  return (
    <div style={{display:'flex',justifyContent:'space-between',padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.02)'}}>
      <div style={{color:'var(--great-falls)',fontSize:13}}>{label}</div>
      <div style={{color:'var(--cemetery-ash)',fontSize:13}}>{value}</div>
    </div>
  )
}
