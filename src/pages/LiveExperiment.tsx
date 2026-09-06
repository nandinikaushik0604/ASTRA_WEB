import React from 'react'

export default function LiveExperiment(){
  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 340px',gap:24}}>
      <div style={{background:'linear-gradient(180deg, rgba(255,255,255,0.01), transparent)',border:'1px solid rgba(255,255,255,0.03)',padding:18}}>
        <div style={{height:540,background:'var(--tap-shoe)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--great-falls)'}}>
          CAMERA VIEWPORT
        </div>
        <div style={{display:'flex',gap:12,marginTop:12,alignItems:'center'}}>
          <button className="enter-btn">▶</button>
          <button className="enter-btn">❚❚</button>
          <button className="enter-btn">◀◀</button>
          <button className="enter-btn">↺</button>
          <div style={{marginLeft:'auto',color:'var(--great-falls)'}}>STEP 04 / 07</div>
        </div>
        <div style={{marginTop:12,display:'flex',gap:12,alignItems:'center'}}>
          <div style={{flex:1,display:'flex',gap:8,alignItems:'center'}}>
            <div style={{width:12,height:12,borderRadius:6,background:'var(--asphalt-blue)'}}></div>
            <div style={{fontSize:13,color:'var(--great-falls)'}}>SEE</div>
            <div style={{fontSize:13,color:'var(--great-falls)'}}>→</div>
            <div style={{fontSize:13,color:'var(--great-falls)'}}>UNDERSTAND</div>
            <div style={{fontSize:13,color:'var(--great-falls)'}}>→</div>
            <div style={{fontSize:13,color:'var(--great-falls)'}}>VALIDATE</div>
            <div style={{fontSize:13,color:'var(--great-falls)'}}>→</div>
            <div style={{fontSize:13,color:'var(--great-falls)'}}>ASSIST</div>
          </div>
        </div>
      </div>
      <div style={{background:'linear-gradient(180deg, rgba(255,255,255,0.01), transparent)',border:'1px solid rgba(255,255,255,0.03)',padding:18}}>
        <div style={{fontSize:12,color:'var(--great-falls)',marginBottom:6}}>CURRENT ACTION</div>
        <div style={{fontSize:20,color:'var(--cemetery-ash)',marginBottom:12}}>Insert Container</div>
        <div style={{fontSize:12,color:'var(--great-falls)'}}>CONFIDENCE</div>
        <div style={{fontSize:28,color:'var(--cemetery-ash)',marginTop:6}}>61 %</div>
        <div style={{marginTop:12,fontSize:12,color:'var(--great-falls)'}}>TEMPORAL CONSISTENCY</div>
        <div style={{fontSize:13,color:'var(--ashen-whisper)'}}>Insufficient evidence</div>

      </div>
    </div>
  )
}
