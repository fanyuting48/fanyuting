import React, { Component } from 'react';
import './App.css';
import { loadEvents } from './lib/loadEvents.js';
import EventFacebook from './EventFacebook';
import EventGoogle from './EventGoogle';
import EventYoutube from './EventYoutube';
import Palm from './Palm';
import Palm1 from './Palm1';
import Stick from './Stick';
import Ufocat from './Ufocat';
import Ufocat0 from './Ufocat0';
import Wave from './Wave';
import Wave1 from './Wave1';
//my img
//import backGround from './images/background.png';

class App extends Component {
  constructor() {
    super()
    this.state = {
      facebookEvents: [],
      googleEvents: [],
      youtubeEvents: [],
      timer: null,
      current: new Date("October 1, 2014 08:24:40"),
    }
  }
  tick = () => {
    const nextSec = new Date(this.state.current.setSeconds(this.state.current.getSeconds() + 100));
    this.setState({
      current: nextSec,
    });
  }
  componentDidMount() {
    loadEvents().then(events => {
      const facebookEvents = events.filter((event) => {
        if (event.targettedResource.uri.indexOf('facebook') >= 0) {
          return true;
        }
        return false;
      })

      const googleEvents  = events.filter((event) => {
        if (event.targettedResource.uri.indexOf('github') >= 0) {
          return true;
        }
        return false;
      })

      const youtubeEvents = events.filter((event) => {
        if (event.targettedResource.uri.indexOf('youtube') >= 0) {
          return true;
        }
        return false;
      })
      this.setState({ facebookEvents, googleEvents, youtubeEvents});
      this.setState({ timer: setInterval(this.tick, 1)}); //1000ms = 1 sec
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    const { current, facebookEvents, googleEvents, youtubeEvents } = this.state;

    const faceBookEventsInTargettedRage = facebookEvents.filter((event) => {
      const eventTime = new Date(event.start)
      const currentInSecs = current.getHours() * 60 * 60 + current.getMinutes() * 60 + current.getSeconds();
      const eventTimeInSecs = eventTime.getHours() * 60 * 60 + eventTime.getMinutes() * 60 + eventTime.getSeconds();
      if ((currentInSecs - 100) < eventTimeInSecs && eventTimeInSecs < (currentInSecs + 1000)) {
        return true;
      } else {
        return false;
      }
    })

    const googleEventsInTargettedRage = googleEvents.filter((event) => {
      const eventTime = new Date(event.start)
      const currentInSecs = current.getHours() * 60 * 60 + current.getMinutes() * 60 + current.getSeconds();
      const eventTimeInSecs = eventTime.getHours() * 60 * 60 + eventTime.getMinutes() * 60 + eventTime.getSeconds();
      if ((currentInSecs - 100) < eventTimeInSecs && eventTimeInSecs < (currentInSecs + 1000)) {
        return true;
      } else {
        return false;
      }
    })

    const youTubeEventsInTargettedRage = youtubeEvents.filter((event) => {
      const eventTime = new Date(event.start)
      const currentInSecs = current.getHours() * 60 * 60 + current.getMinutes() * 60 + current.getSeconds();
      const eventTimeInSecs = eventTime.getHours() * 60 * 60 + eventTime.getMinutes() * 60 + eventTime.getSeconds();
      if ((currentInSecs - 100) < eventTimeInSecs && eventTimeInSecs < (currentInSecs + 1000)) {
        return true;
      } else {
        return false;
      }
    })


    return (
      <div className="App">

        <div className="timelineContainer">

          <Stick time={current.getTime()} />

          {facebookEvents.map(event => {
            return (
              <EventFacebook event={event} key={event.id} />
            )
          })}
          {faceBookEventsInTargettedRage.map(event => {
            return (
              <div>
                <Palm event={event} key={event.id} />
                <Palm1 event={event} key={event.id} />

              </div>
            )
          })}

          {googleEvents.map(event => {
            return (
              <EventGoogle event={event} key={event.id}/>
            )
          })}
          {googleEventsInTargettedRage.map(event => {
            return (
              <div>
                <Wave event={event} key={event.id} />
                <Wave1 event={event} key={event.id} />
              </div>
            )
          })}

          {youtubeEvents.map(event => {
            return (
              <EventYoutube event={event} key={event.id}/>
            )
          })}

          {youTubeEventsInTargettedRage.map(event => {
            return (
              <div>
                <Ufocat event={event} key={event.id} />
                <Ufocat0 event={event} key={event.id} />
              </div>
            )
          })}

        </div>

      </div>

    );
  }
}

export default App;
