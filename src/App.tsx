import { useEffect } from 'react';
import { fetchMarvelData } from './api/MarvelAPI';

function App() {
    useEffect(() => {
        fetchMarvelData();
    }, []);

    return <h1>Marvel App</h1>;
}

export default App;
