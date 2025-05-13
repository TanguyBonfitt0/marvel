// MarvelAPI.ts

export const fetchSuperheroData = async (heroId: number) => {
    const apiKey = 'fa4fae1a5c22c4f6e208c68012c6eb4e'; // Remplace par ta clé API
    const url = `https://superheroapi.com/api/${apiKey}/${heroId}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors du fetch des données du super-héros:", error);
        throw error;
    }
};
