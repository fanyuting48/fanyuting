import React from 'react';
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js';
import palm_left from '../images/palm_left.png';


const Palm = (props) => {
  return (
    <div
      className="palm"
      style={{
        left: '400px' ,
        top:  '300px' ,
      }}
    >
      <img src={palm_left} width ='300px' alt=''/>
    </div>
  )

}

export default Palm
