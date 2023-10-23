import data from '../Assets/logements.json';
import { Link } from 'react-router-dom';


function Card() {
<<<<<<< HEAD
=======

  const itemsArray = data;
>>>>>>> dded21bf1dff9bdc7fb7cec2516dc2d7fb3a5c67

  const itemsArray = data;

<<<<<<< HEAD
=======
 
>>>>>>> dded21bf1dff9bdc7fb7cec2516dc2d7fb3a5c67
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
