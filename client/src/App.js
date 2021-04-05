import React from 'react'
import './app.css'
import LongPolling from './LongPolling'
import EventSourcing from './EventSourcing'
import WebSocket from './WebSocket'

function App() {
  return (
    <div>
      <WebSocket />
    </div>
  )
}

export default App
