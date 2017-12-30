import React from 'react';
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js';
import palm_left from '../images/palm_left.png';


const Palm1 = (props) => {
  return (
    <div
      className="palm"
      style={{
        left: `${getTimeInPercentage(props.event.start) + Math.random()}%`,
        top:  `${300 + Math.random() * 100}px` ,
      }}
    >
      <img src={palm_left} width ='200px' alt=''/>
    </div>
  )

}

export default Palm1
