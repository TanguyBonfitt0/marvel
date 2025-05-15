import React, { useState, useEffect, useCallback } from 'react';
import BlaguesAPI from 'blagues-api';
import '../styles/JokeDisplay.css';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzAwMzgxNjA3NjMwMDc4MDgzIiwibGltaXQiOjEwMCwia2V5IjoicmswZFQ3cnhiYlAxY2hZeXl2dmJGSjRHazZUc3FaU21MaWpOMnpQdUNEczhlRmdZbUIiLCJjcmVhdGVkX2F0IjoiMjAyNS0wNS0xM1QxNDozNjoxNyswMDowMCIsImlhdCI6MTc0NzE0Njk3N30.S37-Ed2r_VSQUZjWJm1978wrIcDNsEyHhp_HQd00Mv4\n';
const blagues = new BlaguesAPI(token);

interface HomeProps {
  setCurrentJoke: React.Dispatch<React.SetStateAction<{ joke: string; answer: string | null } | null>>;
}

const TikTokJokes: React.FC<HomeProps> = ({ setCurrentJoke }) => {
  const [joke, setJoke] = useState<string | null>(null);
  const [answer, setAnswer] = useState<string | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchJoke = useCallback(async () => {
    setLoading(true);
    setError(null);
    setFlipped(false);
    try {
      const result = await blagues.random();
      setJoke(result.joke);
      setAnswer(result.answer);
      setCurrentJoke({ joke: result.joke, answer: result.answer });
    } catch (err) {
      setError('Erreur de récupération des blagues');
      setCurrentJoke(null);
    } finally {
      setLoading(false);
    }
  }, [setCurrentJoke]);

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  return (
      <div className="joke-page">
        {loading ? (
            <p>Chargement...</p>
        ) : error ? (
            <p className="error">{error}</p>
        ) : (
            <>
              <div className={`card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
                <div className="card-inner">
                  <div className="card-front">
                    <p>{joke}</p>
                  </div>
                  <div className="card-back">
                    <p>{answer ?? 'Réponse non disponible'}</p>
                  </div>
                </div>
              </div>
              <button className="new-joke-button" onClick={fetchJoke}>
                Nouvelle blague
              </button>
            </>
        )}
      </div>
  );
};

export default TikTokJokes;
