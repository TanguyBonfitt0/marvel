// App.tsx

import React, { useEffect, useState } from "react";
import { fetchMarvelData } from "./api/MarvelAPI";

const App: React.FC = () => {
    const [marvelData, setMarvelData] = useState<any>(null); // Store fetched data

    useEffect(() => {
        const getData = async () => {
            const data = await fetchMarvelData();
            setMarvelData(data); // Store the fetched data in the state
        };
        getData();
    }, []); // Empty dependency array ensures it runs only once when the component mounts

    return (
        <div>
            <h1>Marvel Characters</h1>
            {marvelData ? (
                <pre>{JSON.stringify(marvelData, null, 2)}</pre> // Display data in a readable format
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default App;
