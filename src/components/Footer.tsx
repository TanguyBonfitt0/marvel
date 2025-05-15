import React from 'react';
import '../styles/Footer.css';

interface FooterProps {
    jokeToShare: { joke: string; answer: string | null } | null;
}

const Footer: React.FC<FooterProps> = ({ jokeToShare }) => {
    const handleShare = () => {
        if (navigator.share && jokeToShare) {
            navigator.share({
                title: 'Blague de Tanguy',
                text: `${jokeToShare.joke}\n\nRéponse : ${jokeToShare.answer ?? 'Non disponible'}`,
            }).catch((err) => {
                console.error('Erreur lors du partage :', err);
            });
        } else {
            alert('Le partage n’est pas supporté sur cet appareil.');
        }
    };

    return (
        <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
            <p>&copy; {new Date().getFullYear()} Les Blagues de Tanguy. Tous droits réservés.</p>
            {jokeToShare && (
                <button
                    onClick={handleShare}
                    className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                >
                    Partager cette blague
                </button>
            )}
        </footer>
    );
};

export default Footer;
