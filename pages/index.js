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
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col items-center p-6 text-white">
            <h1 className="text-5xl font-extrabold mb-6">CalcoloRataExpress</h1>
            <div className="mb-6 w-full max-w-md bg-white p-4 rounded-lg shadow-lg">
                <input
                    type="text"
                    placeholder="Cerca un prodotto (es. iPhone 16)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm text-gray-900"
                />
                <button
                    onClick={handleSearch}
                    className="mt-3 w-full bg-blue-600 text-white p-3 rounded-md shadow-md hover:bg-blue-700 transition-all"
                >
                    Cerca
                </button>
            </div>
            <div className="w-full max-w-2xl grid grid-cols-1 gap-4">
                {results.map((result, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-gray-900">
                        <h2 className="text-2xl font-bold text-indigo-700">{result.platform}</h2>
                        <p className="text-lg text-gray-600">{result.offer}</p>
                        <p className="text-xl font-bold text-green-600">Rata Mensile: {result.monthlyRate}</p>
                        <a href={result.link} className="text-blue-600 font-semibold mt-2 inline-block hover:underline">
                            Vai all'offerta →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalcoloRataExpress;
