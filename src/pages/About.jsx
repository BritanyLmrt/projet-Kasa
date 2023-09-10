import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header'
import Footer from '../layout/Footer';


function About() {
  return (
    <div>
      <Header />
      <Link to="/">Page à propos</Link>
      <Footer />
    </div>
  );
}

export default About;
