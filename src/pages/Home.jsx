import React from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer';
import Banner from '../components/Banner';
import Card from '../components/Cards';

function Home() {
    return (
        <div>
            <Header />
            <div className='body'>
            <Banner />
            <div className='cards'>
                <Card />
            </div>
            </div>
            <Footer />
        </div>
    );
} 

export default Home;
