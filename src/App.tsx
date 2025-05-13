// src/App.tsx
import { useEffect, useState } from 'react';

import { fetchMarvelData } from './api/MarvelAPI';

const App = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchMarvelData();
            if (data) setCharacters(data.data.results);
        };
        loadData();
    }, []);

    return (
        <div>
            <h1>Personnages Marvel</h1>
            <ul>
                {characters.map((char: any) => (
                    <li key={char.id}>
                        <img src={`${char.thumbnail.path}/standard_xlarge.${char.thumbnail.extension}`} alt={char.name} />
                        <p>{char.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
