export type ProtocolStep = {
  id: number
  title: string
  status: 'pending'|'active'|'complete'|'deviated'
}

export type Inference = {
  step: number
  confidence: number
  temporalConsistency: 'Insufficient evidence' | 'Sufficient evidence'
  observed: string
  expected: string
  decision: string
}

export type Event = {
  timestamp: string
  title: string
  detail: string
}

export class ExperimentEngine {
  steps: ProtocolStep[]
  inference: Inference
  history: Event[]
  listeners: (()=>void)[] = []

  constructor(){
    this.steps = [
      {id:1,title:'Initialize Workspace',status:'complete'},
      {id:2,title:'Locate Container',status:'complete'},
      {id:3,title:'Open Holder',status:'complete'},
      {id:4,title:'Insert Container',status:'active'},
      {id:5,title:'Secure Container',status:'pending'},
      {id:6,title:'Confirm Placement',status:'pending'},
      {id:7,title:'Record Observation',status:'pending'},
    ]
    this.inference = {
      step:4,
      confidence:87.4,
      temporalConsistency:'Sufficient evidence',
      observed:'Hand-container interaction',
      expected:'Container aligned with holder',
      decision:'Nominal'
    }
    this.history = [
      {timestamp:'00:39:12',title:'Step 01',detail:'System initialized'},
      {timestamp:'00:40:05',title:'Step 02',detail:'Container detected'},
      {timestamp:'00:40:38',title:'Step 03',detail:'Holder opened'},
      {timestamp:'00:41:12',title:'Step 04',detail:'Uncertainty detected — Confidence: 61 %'},
    ]
  }

  onChange(fn:()=>void){this.listeners.push(fn)}
  emit(){this.listeners.forEach(f=>f())}

  simulateUncertainty(){
    this.inference.confidence = 61
    this.inference.temporalConsistency = 'Insufficient evidence'
    this.inference.decision = 'Waiting for more evidence'
    this.history.push({timestamp:this.now(),'title':'Step 04','detail':'Uncertainty detected — Confidence: 61 %'})
    this.emit()
  }

  resolveUncertainty(){
    this.inference.confidence = 87
    this.inference.temporalConsistency = 'Sufficient evidence'
    this.inference.decision = 'Proceed'
    this.history.push({timestamp:this.now(),'title':'Step 04','detail':'Temporal evidence sufficient — Confidence: 87 %'})
    this.emit()
  }

  simulateDeviation(){
    this.steps[4].status = 'deviated'
    this.inference.confidence = 45
    this.inference.decision = 'Deviation confirmed'
    this.history.push({timestamp:this.now(),'title':'Step 05','detail':'Protocol deviation confirmed'})
    this.history.push({timestamp:this.now(),'title':'ASSISTANCE','detail':'ASTRA voice prompt issued'})
    this.emit()
  }

  nextStep(){
    const active = this.steps.find(s=>s.status==='active')
    if(active){
      active.status='complete'
      const next = this.steps[active.id]
      if(next){next.status='active'}
      this.history.push({timestamp:this.now(),'title':`Step ${active.id}`,detail:'Completed'})
      this.emit()
    }
  }

  reset(){
    this.constructor()
    this.emit()
  }

  now(){
    const d = new Date()
    return d.toTimeString().slice(0,8)
  }
}
