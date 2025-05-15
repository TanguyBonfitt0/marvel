import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './styles/variables.css';

const App: React.FC = () => {
    const [currentJoke, setCurrentJoke] = useState<{ joke: string; answer: string | null } | null>(null);

    return (
        <div className="App flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home setCurrentJoke={setCurrentJoke} />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer jokeToShare={currentJoke} />
        </div>
    );
};

export default App;
