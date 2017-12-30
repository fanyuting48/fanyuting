import React from 'react';
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js';
import wave1 from '../images/wave1.png';
import wave2 from '../images/wave2.png';

const Wave = (props) => {
  return (
    <div
      className="wave1"
      style={{
        left: '0px',
        top: '400px',
      }}
    >
      <img src={wave1} width ='500px' alt=''/>
    </div>
  )

}

export default Wave
