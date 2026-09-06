import React, {useState} from 'react'
import Mission from './pages/Mission'
import LiveExperiment from './pages/LiveExperiment'
import Protocol from './pages/Protocol'
import History from './pages/History'
import System from './pages/System'
import Navigation from './components/Navigation'

export type Page = 'MISSION'|'LIVE'|'PROTOCOL'|'HISTORY'|'SYSTEM'

export default function App(){
  const [page,setPage] = useState<Page>('MISSION')
  return (
    <div className="app">
      <div className="header">
        <div className="brand">
          <div>ASTRA</div>
          <div style={{fontSize:12, color:'var(--great-falls)'}}>AUTONOMOUS SPACE TASK RECOGNITION & ASSISTANCE</div>
        </div>
        <Navigation page={page} onNavigate={setPage} />
      </div>

      {page === 'MISSION' && <Mission onEnter={() => setPage('LIVE')} />}
      {page === 'LIVE' && <LiveExperiment />}
      {page === 'PROTOCOL' && <Protocol />}
      {page === 'HISTORY' && <History />}
      {page === 'SYSTEM' && <System />}

    </div>
  )
}
