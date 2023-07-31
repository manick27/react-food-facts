// SearchResults.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importez le hook useLocation de react-router-dom
import { createSearchParams } from 'react-router-dom'; // Importez la fonction createSearchParams de react-router-dom

function SearchResults(props) {
  // Utilisez le hook useLocation pour récupérer l'objet location
  const location = useLocation();
  // Utilisez la fonction createSearchParams pour créer un objet URLSearchParams à partir de la chaîne de requête de l'URL
  const params = createSearchParams(location.search);
  // Accédez au paramètre search_terms, qui contient le terme de recherche saisi par l'utilisateur
  const query = params.get('search_terms');

  return (
    <div className="SearchResults bg-white">
      {/* Vérifiez si le tableau de produits passé en props est vide ou non */}
      {props.products.length === 0 ? (
        // Vérifiez si la variable query est vide ou non
        query === '' ? (
          // Si elle est vide, affichez un message indiquant qu'il peut saisir un terme de recherche dans le formulaire
          <p className='text-3xl text-center font-bold pt-16'>Saisissez un terme de recherche dans le formulaire ci-dessus</p>
        ) : (
          // Sinon, affichez un message indiquant qu'aucun résultat n'a été trouvé
          <p className='text-3xl text-center font-bold pt-16'>Aucun résultat trouvé</p>
        )
      ) : (
        // Sinon, affichez une liste des produits avec leurs informations
        <div className='lg:grid lg:gap-4 lg:grid-cols-5 pt-5 my-5 m-10'>
          {props.products.map((product) => (
            <div key={product.code} className='border-solid border-2 border-indigo-600 rounded p-7 pt-24 box-border h-2/3 my-3'>
              {/* Créez un lien vers la route /product/:id avec l'identifiant du produit */}
              <Link to={`/product/${product.code}`}>
                {/* Affichez le nom, la marque et l'identifiant du produit */}
                <img className='h-1/2 m-auto' src={product.image_url} alt={product.product_name} />
                <h3 className='pt-10 font-black text-center text-xl'>{product.product_name}</h3>
                {/* <p>{product.brands}</p>
                <p>{product.code}</p> */}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
 