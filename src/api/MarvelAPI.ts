// src/api/MarvelAPI.ts
import md5 from 'crypto-js/md5';

const publicKey = 'c3fdbd01c3cd6fd18465b52aa63d9809';
const privateKey = '00d45eb06cbd9b9eff0d0680a253ac685619a66f';

export const fetchMarvelData = async () => {
    const timestamp = new Date().getTime().toString();
    const hash = md5(timestamp + privateKey + publicKey).toString();

    const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors du fetch Marvel API:', error);
        return null;
    }
};
