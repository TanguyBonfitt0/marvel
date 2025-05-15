import React from 'react';
import TikTokJokes from '../components/JokeDisplay';
import '../styles/Home.css';

interface HomeProps {
    setCurrentJoke: React.Dispatch<React.SetStateAction<{ joke: string; answer: string | null } | null>>;
}

const Home: React.FC<HomeProps> = ({ setCurrentJoke }) => {
    return (
        <main className="container mx-auto p-4">
            <TikTokJokes setCurrentJoke={setCurrentJoke} />
        </main>
    );
};

export default Home;
