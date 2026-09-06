import React from 'react'
import EarthScene from '../components/earth/EarthScene'

function LeaderLines(){
  return (
    <svg width="100%" height="100%" style={{position:'absolute',left:0,top:0,pointerEvents:'none'}} viewBox="0 0 800 640" preserveAspectRatio="xMidYMid meet">
      <line x1="420" y1="120" x2="540" y2="60" stroke="rgba(194,199,207,0.18)" strokeWidth="1" />
      <text x="548" y="56" fill="var(--cemetery-ash)" fontSize="12">INCLINATION 51.64°</text>
      <line x1="520" y1="380" x2="640" y2="420" stroke="rgba(194,199,207,0.18)" strokeWidth="1" />
      <text x="648" y="416" fill="var(--cemetery-ash)" fontSize="12">ASTRA-01 CURRENT PASS</text>
    </svg>
  )
}

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
      <div className="right-panel" style={{position:'relative'}}>
        <div style={{height:640}} className="canvas-wrap">
          <EarthScene />
          <LeaderLines />
        </div>
      </div>
    </div>
  )
}
