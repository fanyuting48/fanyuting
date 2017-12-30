import React from 'react';
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js';
import alien from '../images/alien.png';

const EventFacebook = (props) => {
  return (
    <div
      className="facebookEventPoint"
      style={{
        left: `${getTimeInPercentage(props.event.start)}%`,
      }}
    >
      <img src={alien} width ='20px' alt=''/>
    </div>
  )

}

export default EventFacebook
