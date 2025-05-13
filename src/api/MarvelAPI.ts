// /api/marvel.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import md5 from 'crypto-js/md5';

const publicKey = 'c3fdbd01c3cd6fd18465b52aa63d9809';
const privateKey = 'ta-nouvelle-cle-privee';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const ts = Date.now().toString();
    const hash = md5(ts + privateKey + publicKey).toString();

    const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            return res.status(response.status).json({ error: 'Marvel API error' });
        }
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Fetch Marvel error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
