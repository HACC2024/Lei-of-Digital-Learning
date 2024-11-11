import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import './main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className='container'>

        <header className='header'>
          <Header />
        </header>

        <main className='app'>
          <App />
        </main>

        <footer className='footer'>
          <Footer />
        </footer>

      </div>
    </BrowserRouter>
  </StrictMode>
);
