import React from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer';
import Banner from '../components/Banner';

import Card from '../components/Cards';

function Home() {

    return (
        <div>
            <Header />
            <div className='main-home'>
                <Banner className='banner' text='Chez vous, partout et ailleurs' title='banner--title' />
                <Card />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
