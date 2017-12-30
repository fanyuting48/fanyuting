import React from 'react';
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js';
import ufocat from '../images/catufo.png';

const Ufocat = (props) => {
  return (
    <div
      className="cat"
      style={{
        left: '1000px',
        top: '500px',
      }}
    >
      <img src={ufocat} width ='200px' alt=''/>
    </div>
  )

}

export default Ufocat
