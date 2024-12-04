import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
    return (
        <main className="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
}

export default App;