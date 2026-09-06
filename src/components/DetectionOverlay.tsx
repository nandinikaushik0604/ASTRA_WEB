import React from 'react'

export default function DetectionOverlay(){
  return (
    <svg width="100%" height="100%" style={{position:'absolute',left:0,top:0,pointerEvents:'none'}} viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice">
      <rect x="300" y="160" width="360" height="220" fill="none" stroke="rgba(194,199,207,0.18)" strokeWidth="2"/>
      <text x="312" y="150" fill="var(--cemetery-ash)" fontSize={12}>MCG-CONTAINER-04 conf 0.96</text>
      <rect x="70" y="180" width="180" height="220" fill="none" stroke="rgba(194,199,207,0.18)" strokeWidth="2"/>
      <text x="82" y="170" fill="var(--cemetery-ash)" fontSize={12}>LEFT HAND conf 0.93</text>
      <rect x="680" y="180" width="180" height="220" fill="none" stroke="rgba(194,199,207,0.18)" strokeWidth="2"/>
      <text x="692" y="170" fill="var(--cemetery-ash)" fontSize={12}>RIGHT HAND conf 0.88</text>
      <rect x="480" y="360" width="80" height="60" fill="none" stroke="rgba(194,199,207,0.18)" strokeWidth="2"/>
      <text x="482" y="358" fill="var(--cemetery-ash)" fontSize={12}>LATCH conf 0.61</text>
    </svg>
  )
}
