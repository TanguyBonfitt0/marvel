// // src/components/CharacterList.tsx
// import React, { useEffect, useState } from 'react';
// import { fetchCharacters } from '../api/MarvelAPI';
//
// interface Character {
//     id: number;
//     name: string;
//     thumbnail: {
//         path: string;
//         extension: string;
//     };
// }
//
// const CharacterList = () => {
//     const [characters, setCharacters] = useState<Character[]>([]);
//
//     useEffect(() => {
//         const loadData = async () => {
//             const data = await fetchCharacters();
//             setCharacters(data);
//         };
//
//         loadData();
//     }, []);
//
//     return (
//         <div>
//             <h1>Personnages Marvel</h1>
//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//                 {characters.map((char) => (
//                     <div key={char.id}>
//                         <h3>{char.name}</h3>
//                         <img
//                             src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
//                             alt={char.name}
//                             width={150}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default CharacterList;
