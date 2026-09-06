import React from 'react'
import EarthScene from '../components/earth/EarthScene'

export default function Mission({onEnter}:{onEnter:()=>void}){
  return (
    <div className="layout">
      <div className="left-panel">
        <div style={{fontSize:12,color:'var(--great-falls)'}}>01 — MISSION</div>
        <div className="title-large">ASTRA</div>
        <div style={{marginBottom:18,color:'var(--great-falls)'}}>AUTONOMOUS SPACE TASK<br/>RECOGNITION & ASSISTANCE</div>

        <div className="kv"><div>MISSION</div><div>ASTRA-01</div></div>
        <div className="kv"><div>ORBIT</div><div>408 KM</div></div>
        <div className="kv"><div>INCLINATION</div><div>51.64°</div></div>
        <div className="kv"><div>PAYLOAD</div><div>Microgravity Crystal Growth Container</div></div>
        <div className="kv"><div>EXPERIMENT</div><div>Payload Handling Test</div></div>
        <div className="kv"><div>STATE</div><div>Step 04 / 07</div></div>
        <div className="kv"><div>CONFIDENCE</div><div>87.4 %</div></div>
        <div className="kv"><div>MISSION STATUS</div><div>NOMINAL</div></div>

        <button className="enter-btn" onClick={onEnter}>ENTER EXPERIMENT →</button>
        <div className="footer-note">SCIENCE TRAVELS FURTHER WITH INTELLIGENCE.</div>
      </div>
      <div className="right-panel">
        <div style={{height:640}} className="canvas-wrap">
          <EarthScene />
        </div>
      </div>
    </div>
  )
}
