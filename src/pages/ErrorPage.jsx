import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Error from '../Assets/404.png';

function Error404() {
  return (
    <>
    <Header />
    <div className='error--info'>
      <img src= {Error} alt='404' />
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className='homelink' >Retourner sur la page d’accueil</Link>
    </div>
    <Footer />
    </>
  );
}

export default Error404;
