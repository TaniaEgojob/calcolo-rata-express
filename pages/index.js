import React, { useState } from 'react';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        // Simulazione di risultati di ricerca
        const simulatedResults = [
            { platform: 'Amazon con Klarna', offer: '3 rate senza interessi', monthlyRate: '500 €', link: '#' },
            { platform: 'Mediaworld con Pagodil', offer: '10 rate senza spese', monthlyRate: '150 €', link: '#' },
            { platform: 'Findomestic Prestito', offer: '24 rate con TAEG 4,5%', monthlyRate: '70 €', link: '#' }
        ];
        setResults(simulatedResults);
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            {/* Header */}
            <header className="bg-blue-600 text-white py-4 shadow-lg">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">CalcoloRataExpress</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:text-blue-200">Home</a></li>
                            <li><a href="#" className="hover:text-blue-200">Offerte</a></li>
                            <li><a href="#" className="hover:text-blue-200">Contatti</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-blue-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-blue-900">Trova le migliori offerte a rate</h2>
                    <p className="mt-4 text-lg text-blue-700">Confronta le opzioni e scegli quella più adatta a te.</p>
                    <div className="mt-8 bg-white p-6 shadow-lg rounded-lg inline-block w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Cerca un prodotto (es. iPhone 16)"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Cerca un prodotto"
                        />
                        <button
                            onClick={handleSearch}
                            className="mt-4 w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Cerca offerte"
                        >
                            Cerca Offerte
                        </button>
                    </div>
                </div>
            </section>

            {/* Risultati della ricerca */}
            <section className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Risultati</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results.map((result, index) => (
                        <div key={index} className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-all">
                            <h3 className="text-xl font-semibold text-indigo-700">{result.platform}</h3>
                            <p className="text-gray-600 mt-2">{result.offer}</p>
                            <p className="text-green-600 font-bold mt-2">Rata Mensile: {result.monthlyRate}</p>
                            <a
                                href={result.link}
                                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
                                aria-label={`Scopri di più su ${result.platform}`}
                            >
                                Scopri di più
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-900 text-white py-8 mt-12">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-lg">© 2023 CalcoloRataExpress. Tutti i diritti riservati.</p>
                    <div className="mt-4 flex justify-center space-x-6">
                        <a href="#" className="hover:text-blue-300">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-300">Termini e Condizioni</a>
                        <a href="#" className="hover:text-blue-300">Contatti</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
