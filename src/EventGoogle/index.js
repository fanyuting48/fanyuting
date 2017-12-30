import React from 'react';
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js';
import alien2 from '../images/alien2.png';

const EventGoogle = (props) => {
  return (
    <div
      className="googleEventPoint"
      style={{
        left: `${getTimeInPercentage(props.event.start)}%`,
      }}
    >
    <img src = {alien2} width ='20px' alt=''/>
    </div>
  )

}

export default EventGoogle
