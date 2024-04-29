import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Employee from './Employee.jsx'
import Invoice from './Invoice.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Employee/>
    <Invoice/>
  </React.StrictMode>,
)
