import React from 'react';
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js';
import alien3 from '../images/alien3.png';

const EventYoutube = (props) => {
  return (
    <div
      className="youtubeEventPoint"
      style={{
        left: `${getTimeInPercentage(props.event.start)}%`,
      }}
    >
    <img  src = {alien3} width ='20px' alt=''/>
    </div>
  )

}

export default EventYoutube
