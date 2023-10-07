import React, { useState } from 'react';
import vectorLeft from '../Assets/Arrow-left.png';
import vectorRight from '../Assets/Arrow-right.png';

function Slideshow({ pictures }) {
  const [actualIndex, setActualIndex] = useState(0);
  const slideNumber = actualIndex + 1;

  function changeSlide(directionClick) {
    let newIndex = actualIndex;

    if (directionClick === 'left') {
      newIndex = actualIndex === 0 ? pictures.length - 1 : actualIndex - 1;
    } else if (directionClick === 'right') {
      newIndex = actualIndex === pictures.length - 1 ? 0 : actualIndex + 1;
    }

    setActualIndex(newIndex);
  }

  return (
    <div className="slideshow">
      <img className="img" src={pictures[actualIndex]} alt={`Diapositive ${actualIndex + 1}`} />

      {pictures.length > 1 && (
        <>
          <div className="arrow-container">
            <img className="arrow-left" src={vectorLeft} alt='' onClick={() => changeSlide('left')} />
            <img className="arrow-right" src={vectorRight} alt='' onClick={() => changeSlide('right')} />
          </div>
          <div className="slide-number">{`${slideNumber}/${pictures.length}`}</div>
        </>
      )}
    </div>
  );
}

export default Slideshow;
