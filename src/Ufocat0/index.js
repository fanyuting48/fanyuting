import React from 'react';
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js';
import ufocat from '../images/catufo.png';

const Ufocat0 = (props) => {
  return (
    <div
      className="palm"
      style={{
        left: '200px',
        top: '50px',
      }}
    >
      <img src={ufocat} width ='100px' alt=''/>
    </div>
  )

}

export default Ufocat0
