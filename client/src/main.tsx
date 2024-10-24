import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='container'>

      <header className='header'>
        <Header />
      </header>

      <main className='main'>
        <App />
      </main>

      <footer className='footer'>
        <Footer />
      </footer>

    </div>
  </StrictMode>
)
