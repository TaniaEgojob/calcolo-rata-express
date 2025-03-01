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
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 text-gray-900 font-sans">
            {/* Titolo */}
            <h1 className="text-4xl font-bold text-blue-600">CalcoloRataExpress</h1>
            <p className="text-lg text-gray-700 mt-2">Trova le migliori offerte di acquisto a rate</p>

            {/* Barra di ricerca e pulsante */}
            <div className="mt-6 bg-white p-4 shadow-lg rounded-lg w-full max-w-md">
                <input
                    type="text"
                    placeholder="Cerca un prodotto (es. iPhone 16)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSearch}
                    className="mt-3 w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Cerca Offerte
                </button>
            </div>

            {/* Risultati della ricerca */}
            <div className="w-full max-w-2xl mt-6">
                {results.map((result, index) => (
                    <div key={index} className="p-4 bg-white shadow-md rounded-lg mb-4">
                        <h2 className="text-xl font-semibold text-indigo-700">{result.platform}</h2>
                        <p className="text-gray-600">{result.offer}</p>
                        <p className="text-green-600 font-bold">Rata Mensile: {result.monthlyRate}</p>
                        <a
                            href={result.link}
                            className="mt-2 inline-block text-blue-600 hover:text-blue-800 transition-all"
                        >
                            Scopri di più
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
