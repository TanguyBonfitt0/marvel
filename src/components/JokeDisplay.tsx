import React, { useState, useEffect, useCallback } from 'react';
import BlaguesAPI from 'blagues-api';
import '../styles/JokeDisplay.css';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzAwMzgxNjA3NjMwMDc4MDgzIiwibGltaXQiOjEwMCwia2V5IjoicmswZFQ3cnhiYlAxY2hZeXl2dmJGSjRHazZUc3FaU21MaWpOMnpQdUNEczhlRmdZbUIiLCJjcmVhdGVkX2F0IjoiMjAyNS0wNS0xM1QxNDozNjoxNyswMDowMCIsImlhdCI6MTc0NzE0Njk3N30.S37-Ed2r_VSQUZjWJm1978wrIcDNsEyHhp_HQd00Mv4\n'; // ton token
const blagues = new BlaguesAPI(token);

interface HomeProps {
  setCurrentJoke: React.Dispatch<React.SetStateAction<{ joke: string; answer: string | null } | null>>;
}

const TikTokJokes: React.FC<HomeProps> = ({ setCurrentJoke }) => {
  const [joke, setJoke] = useState<string | null>(null);
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const fetchJoke = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const joke = await blagues.random();
      setJoke(joke.joke);
      setAnswer(joke.answer);
      setCurrentJoke({ joke: joke.joke, answer: joke.answer });
      setShowAnswer(false);
    } catch (err) {
      setError('Erreur de récupération des blagues');
      setJoke(null);
      setAnswer(null);
      setCurrentJoke(null);
    } finally {
      setLoading(false);
    }
  }, [setCurrentJoke]);

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  // scroll ou swipe détecté
  useEffect(() => {
    const handleScroll = (e: WheelEvent | TouchEvent) => {
      fetchJoke();
    };

    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('touchend', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchend', handleScroll);
    };
  }, [fetchJoke]);

  return (
      <div
          className="joke-container"
          style={{
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
            textAlign: 'center',
          }}
      >
        {loading && <p>Chargement...</p>}
        {error && <p className="error">{error}</p>}

        {!loading && !error && joke && (
            <>
              <h2>Blague du jour</h2>
              <p className="joke">{joke}</p>
              {showAnswer ? (
                  <p className="answer">Réponse : {answer ?? <em>Non disponible</em>}</p>
              ) : (
                  <button onClick={() => setShowAnswer(true)}>Voir la réponse</button>
              )}
            </>
        )}
      </div>
  );
};

export default TikTokJokes;
