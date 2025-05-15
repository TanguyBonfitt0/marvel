import React from 'react';
import { Link } from 'react-router-dom'; // si tu utilises React Router
import '../styles/Header.css';



const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    Les Blagues de Tanguy :)
                </h1>
                <nav>
                    <ul className="flex space-x-6 text-lg">
                        <li>
                            <Link to="/" className="hover:underline hover:text-blue-200">
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:underline hover:text-blue-200">
                                À propos
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
