import React from 'react';
import './style.css';
import { getTimeInPercentage } from '../lib/getTimeInPercentage.js';

const Stick = (props) => {
  return (
    <div
      className="Stick"
      style={{
        left: `${getTimeInPercentage(props.time)}%`,
      }}
    >

    </div>
  )
}

export default Stick
