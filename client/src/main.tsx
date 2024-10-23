import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='container'>

      <header className='header'>
        {/* Header component to be shared across the app, inside will handle conditional rendering*/}  
      </header>

      <main className='main'>
        <App />
      </main>

      <footer className='footer'>
        {/* Footer component to be shared across the app, inside will handle conditional rendering*/}
      </footer>

    </div>
  </StrictMode>
)
