import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
    return (
        <div className="about-container">
            <h2>À propos</h2>
            <p>
                Ce site a été créé pour faire rire Tanguy avec des blagues aléatoires.
                Utilise le bouton pour découvrir une nouvelle blague !
            </p>
        </div>
    );
};

export default About;
