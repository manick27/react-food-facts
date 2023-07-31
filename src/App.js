// App.js
import React from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'; // Importez le module axios pour faire les requêtes HTTP

function App() {
  // Utilisez le state pour stocker les résultats de la recherche
  const [products, setProducts] = React.useState([]);

  // Définissez une fonction qui prend en paramètre un terme de recherche et appelle l'API OpenFoodFacts
  const searchProducts = async (query) => {
    // Définissez l'URL de base pour l'API OpenFoodFacts
    const baseURL = 'https://world.openfoodfacts.org';

    // Définissez les paramètres de requête pour la recherche de produits
    const params = {
      search_terms: query, // Le terme de recherche saisi par l'utilisateur
      search_simple: 1, // La valeur 1 pour indiquer que la recherche est simple
      action: 'process', // La valeur process pour indiquer que la requête doit être traitée
      json: 1, // La valeur 1 pour indiquer que le format de réponse doit être JSON
    };

    // Utilisez axios pour faire la requête avec l'URL de base et les paramètres
    const response = await axios.get(`${baseURL}/cgi/search.pl`, { params });

    // Récupérez les produits retournés par l'API
    const products = response.data.products;

    // Mettez à jour le state avec les produits
    setProducts(products);
  };

  return (
    <BrowserRouter>
      <div className="App bg-gray-300">
        <h1 className='text-5xl text-center py-5 font-black text-indigo-600'>ReactFoodFacts</h1>
        <Routes>
          {/* Route 1 : Accueil (/) */}
          <Route path="/" element={<><SearchForm searchProducts={searchProducts} /><SearchResults products={products} /></>} />
          {/* Route 2 : Détails du produit (/product/:id) */}
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
