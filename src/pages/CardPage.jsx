import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Collapse from '../components/Collapse';
import logements from '../Assets/logements.json';
import { useParams } from 'react-router-dom';
import Error404 from './ErrorPage';
import Slideshow from '../components/SlideShow';
import TagList from '../components/TagList';
import RatingBox from '../components/RatingBox';
import EquipmentsList from '../components/Equipments';

function CardPage() {
    const { id } = useParams();

    const filteredItems = logements.filter(item => item.id === id);

    if (filteredItems.length === 0) {
        return <Error404 />;
    }

    const item = filteredItems[0];
    return (
        <>
            <Header />
            <div className="logement" key={item.id}>

                <Slideshow id={item.id} pictures={item.pictures} />

                <div className="logement--pos-description">
                    <h2>{item.title}</h2>
                    <p>{item.location}</p>
                </div>
                <div className='logement--pos-host-rating-tag-box'>
                    <div className='host-rating-box'>
                        <RatingBox ratingValue={item.rating} />
                        <div className="host-box">
                            <p>{item.host.name}</p>
                            <img src={item.host.picture} alt={item.host.name} />
                        </div>
                    </div>
                    <TagList tags={item.tags} />
                </div>
                <div className="collapsible--style-cardPage">
                    <Collapse title="Description" content={item.description} />
                    <Collapse title="Équipements" content={<EquipmentsList equipments={item.equipments} />} />
                </div>
            </div >
            <Footer />
        </>
    );
}

export default CardPage;
