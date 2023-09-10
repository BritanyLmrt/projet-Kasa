import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div>
      <h2>Erreur 404</h2>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default Error404;
