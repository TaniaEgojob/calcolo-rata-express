import React, { useState } from 'react';

const CalcoloRataExpress = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        // Simulazione dei risultati di ricerca
        const simulatedResults = [
            { platform: 'Amazon con Klarna', offer: '3 rate senza interessi', monthlyRate: '500 €', link: '#' },
            { platform: 'Mediaworld con Pagodil', offer: '10 rate senza spese', monthlyRate: '150 €', link: '#' },
            { platform: 'Findomestic Prestito', offer: '24 rate con TAEG 4,5%', monthlyRate: '70 €', link: '#' }
        ];
        setResults(simulatedResults);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 text-gray-900 font-sans">
            <header className="w-full max-w-4xl text-center py-6">
                <h1 className="text-4xl font-extrabold text-blue-600">CalcoloRataExpress</h1>
                <p className="text-lg text-gray-700 mt-2">Trova le migliori offerte di acquisto a rate per i tuoi prodotti preferiti</p>
            </header>
            <div className="mb-8 w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <input
                    type="text"
                    placeholder="Cerca un prodotto (es. iPhone 16)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm text-gray-900 focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSearch}
                    className="mt-4 w-full bg-blue-600 text-white p-3 rounded-md shadow-md hover:bg-blue-700 transition-all"
                >
                    Cerca Offerte
                </button>
            </div>
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
                {results.map((result, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                        <h2 className="text-xl font-bold text-indigo-700">{result.platform}</h2>
                        <p className="text-md text-gray-600">{result.offer}</p>
                        <p className="text-lg font-bold text-green-600">Rata Mensile: {result.monthlyRate}</p>
                        <a href={result.link} className="text-blue-600 font-semibold mt-2 inline-block hover:underline">
                            Vai all'offerta →
                        </a>
                    </div>
                ))}
            </div>
            <footer className="w-full max-w-4xl text-center py-6 mt-10 text-gray-600 text-sm">
                © 2025 CalcoloRataExpress - Confronta le migliori rate disponibili
            </footer>
        </div>
    );
};

export default CalcoloRataExpress;
// Forzo nuova build su Vercel
