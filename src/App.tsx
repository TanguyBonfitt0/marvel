import { useEffect, useState } from 'react';

function App() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('/api/marvel')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCharacters(data.data.results); // Affiche les persos
            })
            .catch(err => console.error('Erreur API Marvel:', err));
    }, []);

    return (
        <div>
            <h1>Marvel Characters</h1>
            <ul>
                {characters.map((char: any) => (
                    <li key={char.id}>{char.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
