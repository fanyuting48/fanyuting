import React from 'react';
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js';
import wave1 from '../images/wave1.png';
import wave2 from '../images/wave2.png';

const Wave1 = (props) => {
  return (
    <div
      className="wave2"
      style={{
        left: '1000px',
        top: '400px',
      }}
    >
      <img src={wave2} width ='500px' alt=''/>
    </div>
  )

}

export default Wave1
