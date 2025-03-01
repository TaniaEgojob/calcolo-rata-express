import axios from 'axios';

export default async function handler(req, res) {
    const { query } = req.query;

    try {
        const response = await axios.get('https://www.googleapis.com/shopping/search/v1/public/products', {
            params: {
                q: query,
                key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
                country: 'IT', // Paese (Italia)
                language: 'it', // Lingua (Italiano)
            },
        });

        const products = response.data.items.map(item => ({
            title: item.product.title,
            link: item.product.link,
            price: item.product.inventories[0].price,
            image: item.product.images[0].link,
        }));

        res.status(200).json({ products });
    } catch (error) {
        console.error('Errore durante la ricerca:', error);
        res.status(500).json({ error: 'Errore durante la ricerca' });
    }
}
