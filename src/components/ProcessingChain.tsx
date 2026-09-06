import React from 'react'

export default function ProcessingChain(){
  return (
    <div style={{display:'flex',alignItems:'center',gap:12}}>
      <div style={{width:12,height:12,borderRadius:6,background:'var(--asphalt-blue)'}}></div>
      <div style={{fontSize:12,color:'var(--great-falls)'}}>SEE</div>
      <div style={{width:24,height:1,background:'rgba(255,255,255,0.02)'}}></div>
      <div style={{fontSize:12,color:'var(--great-falls)'}}>UNDERSTAND</div>
      <div style={{width:24,height:1,background:'rgba(255,255,255,0.02)'}}></div>
      <div style={{fontSize:12,color:'var(--great-falls)'}}>VALIDATE</div>
      <div style={{width:24,height:1,background:'rgba(255,255,255,0.02)'}}></div>
      <div style={{fontSize:12,color:'var(--great-falls)'}}>ASSIST</div>
    </div>
  )
}
