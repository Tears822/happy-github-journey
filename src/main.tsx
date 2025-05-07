
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '../app/page'
import '../app/globals.css'

// Make sure we find the root element before attempting to render
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root')

  if (rootElement) {
    const root = createRoot(rootElement)
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  } else {
    console.error("Root element with ID 'root' not found!")
  }
})
