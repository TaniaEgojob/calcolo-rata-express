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
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">CalcoloRataExpress</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Cerca un prodotto (es. iPhone 16)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <button onClick={handleSearch} className="mt-2 w-full bg-blue-500 text-white p-2 rounded">
                    Cerca
                </button>
            </div>
            <div>
                {results.map((result, index) => (
                    <div key={index} className="mb-2 p-2 bg-white shadow-md rounded-lg">
                        <div>
                            <h2 className="text-lg font-semibold">{result.platform}</h2>
                            <p className="text-sm">{result.offer}</p>
                            <p className="text-sm font-bold">Rata Mensile: {result.monthlyRate}</p>
                            <a href={result.link} className="text-blue-500">Vai all'offerta</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalcoloRataExpress;
