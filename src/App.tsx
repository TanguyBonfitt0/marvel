import React, { useState, useEffect } from 'react';
import './App.css';
import BlaguesAPI from 'blagues-api';

const App: React.FC = () => {
    const [joke, setJoke] = useState<string | null>(null);
    const [answer, setAnswer] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzAwMzgxNjA3NjMwMDc4MDgzIiwibGltaXQiOjEwMCwia2V5IjoicmswZFQ3cnhiYlAxY2hZeXl2dmJGSjRHazZUc3FaU21MaWpOMnpQdUNEczhlRmdZbUIiLCJjcmVhdGVkX2F0IjoiMjAyNS0wNS0xM1QxNDozNjoxNyswMDowMCIsImlhdCI6MTc0NzE0Njk3N30.S37-Ed2r_VSQUZjWJm1978wrIcDNsEyHhp_HQd00Mv4\n'; // Remplacez par votre token
    const blagues = new BlaguesAPI(token);

    useEffect(() => {
        const fetchJoke = async () => {
            setLoading(true);
            setError(null);
            try {
                const joke = await blagues.random();
                setJoke(joke.joke);
                setAnswer(joke.answer);
            } catch (error) {
                setError('Erreur de récupération des blagues');
            } finally {
                setLoading(false);
            }
        };

        fetchJoke();
    }, []);

    return (
        <div className="App">
            <h1>Blague du jour</h1>
            {loading ? (
                <p>Chargement...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <div>
                    <p>{joke}</p>
                    <p><strong>Réponse: </strong>{answer}</p>
                </div>
            )}
            <button onClick={() => window.location.reload()}>Nouvelle blague</button>
        </div>
    );
};

export default App;
