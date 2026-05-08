import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './demo.css'
import './styles.css'

const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
