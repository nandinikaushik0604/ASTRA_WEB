import React, { useEffect, useState } from 'react'
import { engine } from '../simulation'
import DetectionOverlay from '../components/DetectionOverlay'
import ProcessingChain from '../components/ProcessingChain'

export default function LiveExperiment(){
  const [, setTick] = useState(0)

  useEffect(()=>{
    const onChange = ()=> setTick(t=>t+1)
    engine.onChange(onChange)
    return ()=>{}
  },[])

  const handleSimulateUncertainty = ()=> engine.simulateUncertainty()
  const handleResolve = ()=> engine.resolveUncertainty()
  const handleSimulateDeviation = ()=> engine.simulateDeviation()
  const handleNext = ()=> engine.nextStep()
  const handleReset = ()=> engine.reset()

  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:24}}>
      <div style={{background:'linear-gradient(180deg, rgba(255,255,255,0.01), transparent)',border:'1px solid rgba(255,255,255,0.03)',padding:18,position:'relative'}}>
        <div style={{height:540,background:'var(--tap-shoe)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--great-falls)',position:'relative',overflow:'hidden'}}>
          <img src="/public/camera-placeholder.jpg" alt="camera" style={{width:'100%',height:'100%',objectFit:'cover',filter:'grayscale(100%) brightness(0.6)'}}/>
          <DetectionOverlay />
          <div style={{position:'absolute',left:12,top:12,color:'var(--cemetery-ash)',fontSize:12}}>CAMERA 01 · 1920 × 1080</div>
          <div style={{position:'absolute',right:12,bottom:12,color:'var(--great-falls)',fontSize:12}}>T+ 00:41:27</div>
        </div>
        <div style={{display:'flex',gap:12,marginTop:12,alignItems:'center'}}>
          <button className="enter-btn" onClick={handleNext}>▶</button>
          <button className="enter-btn" onClick={handleReset}>↺</button>
          <button className="enter-btn" onClick={handleSimulateUncertainty}>SIMULATE UNCERTAINTY</button>
          <button className="enter-btn" onClick={handleSimulateDeviation}>SIMULATE DEVIATION</button>
          <div style={{marginLeft:'auto',color:'var(--great-falls)'}}>STEP {engine.inference.step} / 07</div>
        </div>
        <div style={{marginTop:12,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <ProcessingChain />
        </div>
      </div>
      <aside style={{background:'linear-gradient(180deg, rgba(255,255,255,0.01), transparent)',border:'1px solid rgba(255,255,255,0.03)',padding:18}}>
        <div style={{fontSize:12,color:'var(--great-falls)'}}>CURRENT ACTION</div>
        <div style={{fontSize:20,color:'var(--cemetery-ash)',marginTop:8}}>{engine.steps.find(s=>s.status==='active')?.title || '—'}</div>

        <div style={{marginTop:12,fontSize:12,color:'var(--great-falls)'}}>CONFIDENCE</div>
        <div style={{fontSize:28,color:'var(--cemetery-ash)',marginTop:6}}>{Math.round(engine.inference.confidence)} %</div>

        <div style={{marginTop:12,fontSize:12,color:'var(--great-falls)'}}>TEMPORAL CONSISTENCY</div>
        <div style={{fontSize:13,color:'var(--ashen-whisper)'}}>{engine.inference.temporalConsistency}</div>

        <div style={{marginTop:12,fontSize:12,color:'var(--great-falls)'}}>EXPECTED</div>
        <div style={{fontSize:13,color:'var(--cemetery-ash)'}}>{engine.inference.expected}</div>

        <div style={{marginTop:12,fontSize:12,color:'var(--great-falls)'}}>OBSERVED</div>
        <div style={{fontSize:13,color:'var(--cemetery-ash)'}}>{engine.inference.observed}</div>

        <div style={{marginTop:12,fontSize:12,color:'var(--great-falls)'}}>DECISION</div>
        <div style={{fontSize:13,color:'var(--cemetery-ash)'}}>{engine.inference.decision}</div>

      </aside>
    </div>
  )
}
