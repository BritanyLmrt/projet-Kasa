import React, { useState } from 'react';
import icon from '../Assets/arrow_back_ios-24px 2.png'


function Collapse(props) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapsible ${isOpen ? 'open' : ''}`}>
      <div className="collapsible--title">
        <p>{props.title}</p>
        <img src={icon} alt="Flèche montante" className={`collapsible--title-icn ${isOpen ? 'rotate' : ''}`} onClick={toggleCollapse} />
        </div>
        <div className="collapsible--text">
          <div className="content">{props.content}</div>
        </div>
      </div>
      );
}

      export default Collapse;

