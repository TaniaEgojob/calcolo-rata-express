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
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
            <h1 className="text-4xl font-bold mb-8 text-blue-600">CalcoloRataExpress</h1>
            <div className="mb-8 w-full max-w-md">
                <input
                    type="text"
                    placeholder="Cerca un prodotto (es. iPhone 16)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-4 border rounded-md shadow-sm mb-4"
                />
                <button
                    onClick={handleSearch}
                    className="w-full bg-blue-500 text-white p-4 rounded-md shadow-lg hover:bg-blue-600 transition-all"
                >
                    Cerca
                </button>
            </div>
            <div className="w-full max-w-2xl grid grid-cols-1 gap-4">
                {results.map((result, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800">{result.platform}</h2>
                        <p className="text-gray-600">{result.offer}</p>
                        <p className="text-lg font-bold text-green-600">Rata Mensile: {result.monthlyRate}</p>
                        <a href={result.link} className="text-blue-500 underline mt-2 inline-block">
                            Vai all'offerta
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalcoloRataExpress;
