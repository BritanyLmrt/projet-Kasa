import React from 'react';
import starActive from '../Assets/star-active.png';
import starInactive from '../Assets/star-inactive.png';

function RatingBox(props) {
  const { ratingValue } = props; //déstructuration de ratingValue
  const range = [1, 2, 3, 4, 5]; //rang (nb d'étoile)

  const starsImg = (value) => { //fonction starImg
    return value <= ratingValue ? starActive : starInactive;
  }; //= mettre autant de starActive que la valeur (Rating) 
  //et le reste en inactive jusqu'à ce que value soit à 5

  return (
    <div className="rating-box">
      {range.map((rangeElem) => (
        <img key={rangeElem.toString()} src={starsImg(rangeElem)} alt={`Star ${rangeElem}`} />
      ))} 
    </div>
  );//map parcours range, pour chaque range key= le nombre de staractive
  //src=déterminée par starImg avec l'element actuel de range
  //alt=star et le nombre d'étoile
}

export default RatingBox;
