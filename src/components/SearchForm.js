// SearchForm.js
import React from 'react';

function SearchForm(props) {
  // Utilisez le state pour stocker le terme de recherche saisi par l'utilisateur
  const [query, setQuery] = React.useState('');

  // Définissez une fonction qui met à jour le state avec la valeur du champ de saisie
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  // Définissez une fonction qui appelle la fonction searchProducts passée en props avec le terme de recherche
  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchProducts(query);
  };

  return (
    <div className="SearchForm" className='lg:w-2/3 m-auto my-40 bg-black'>
      {/* Créez un formulaire de recherche qui appelle la fonction handleSubmit à la soumission */}
      <form onSubmit={handleSubmit} className='bg-indigo-600 w-100 rounded pb-1 pl-1'>
        {/* Créez un champ de saisie qui appelle la fonction handleChange à chaque changement */}
        <input className='h-10 border-solid border-2 border-indigo-600 rounded w-3/4 p-3 outline-indigo-800' type="text" value={query} onChange={handleChange} placeholder="Rechercher un produit" />
        {/* Créez un bouton de soumission du formulaire */}
        <button type="submit" className='text-xl bg-indigo-600 py-2 text-white font-bold text-center w-1/4 focus:indigo-600'>Rechercher</button>
      </form>
    </div>
  );
}

export default SearchForm;
