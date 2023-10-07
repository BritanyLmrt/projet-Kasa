import data from '../Assets/logements.json';
import { Link } from 'react-router-dom';


function Card() {

  const itemsArray = data;


 
  const cards = itemsArray.map(item => (

      <Link to={`/card/${item.id}`} key={item.id} className='cards--item'>
        <h2>{item.title}</h2>
        <img src={item.cover} alt={item.title} className='cards--item-img' />
      </Link >
  ));

  return (
    <div className='cards'>
      {cards}
    </div>
  );
}

export default Card;
