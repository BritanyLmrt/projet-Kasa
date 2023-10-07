import data from '../Assets/logements.json';
import { Link } from 'react-router-dom';


function Card() {
  // Utilisez les données JSON dans votre composant
  const itemsArray = data;


  // Utilisez la méthode map pour itérer sur le tableau d'éléments
  const cards = itemsArray.map(item => (

      <Link to={`/card/${item.id}`} key={item.id} className='cards--item'>
        <h2>{item.title}</h2>
        <img src={item.cover} alt={item.title} className='cards--item-img' />
      </Link >
  ));

  // Renvoie la liste de cartes
  return (
    <div className='cards'>
      {cards}
    </div>
  );
}

export default Card;
