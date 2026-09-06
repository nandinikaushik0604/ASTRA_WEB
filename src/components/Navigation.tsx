import React from 'react'

export default function Navigation({page,onNavigate}:{page:string,onNavigate:(p:any)=>void}){
  const items:[string, string][] = [
    ['MISSION','MISSION'],
    ['LIVE','LIVE'],
    ['PROTOCOL','PROTOCOL'],
    ['HISTORY','HISTORY'],
    ['SYSTEM','SYSTEM'],
  ]
  return (
    <nav className="nav" aria-label="Main Navigation">
      {items.map(([key,label])=> (
        <a key={key} href="#" onClick={(e)=>{e.preventDefault(); onNavigate(key)}} className={page===key? 'active':''}>{label}</a>
      ))}
      <div style={{marginLeft:12,fontSize:12,color:'var(--great-falls)'}}>OFFLINE-FIRST</div>
      <div style={{marginLeft:8,fontSize:12,color:'var(--great-falls)'}}>{new Date().toISOString().slice(0,10)} · {new Date().toISOString().slice(11,19)} UTC</div>
    </nav>
  )
}
