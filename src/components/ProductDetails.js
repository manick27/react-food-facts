// ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Importez le module axios pour faire les requêtes HTTP

function ProductDetails() {
  // Utilisez le hook useParams pour récupérer l'identifiant du produit depuis l'URL
  const { id } = useParams();

  // Utilisez le state pour stocker le produit sélectionné
  const [product, setProduct] = React.useState(null);

  // Utilisez le hook useEffect pour appeler l'API OpenFoodFacts avec l'identifiant du produit et récupérer ses détails
  React.useEffect(() => {
    const fetchProduct = async () => {
      // Définissez l'URL de base pour l'API OpenFoodFacts
      const baseURL = 'https://world.openfoodfacts.org';

      // Utilisez axios pour faire la requête avec l'URL de base et l'identifiant du produit
      const response = await axios.get(`${baseURL}/api/v0/product/${id}.json`);

      // Récupérez le produit retourné par l'API
      const product = response.data.product;

      // Mettez à jour le state avec le produit
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="ProductDetails bg-white pt-12">
      {/* Vérifiez si le state product est null ou non */}
      {product === null ? (
        // Si le state est null, affichez un message indiquant que le produit est en cours de chargement
        <p className='text-3xl text-center font-bold pt-16'>Chargement du produit...</p>
      ) : (
        // Sinon, affichez les détails du produit avec ses informations
        <div className='mx-10'>
          {/* Affichez le nom du produit */}
          <h2 className='text-3xl text-center font-bold'>{product.product_name}</h2>
          <div className='mt-10 m-auto md:flex md:space-x-24 lg:w-2/3'>
            {/* Affichez le visuel principal du produit */}
            <img className='m-auto' src={product.image_url} alt={product.product_name} />
            <div className='md:mt-0 mt-10 text-center text-xl'>
                {/* Affichez les ingrédients du produit */}
                <p><span className='font-bold'>Ingredients: </span>{product.ingredients_text}</p>
                {/* Affichez la marque et la catégorie du produit */}
                <p className='font-bold text-indigo-600 mt-3'><span className='font-bold text-black'>Marque: </span>{product.brands}</p>
                <p className='mt-3'><span className='font-bold'>Catégorie: </span>{product.categories}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
