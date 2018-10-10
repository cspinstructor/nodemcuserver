import React, { Component } from 'react';
import axios from 'axios';
import { setInterval } from 'timers';
import './Sensor.css';

class SensorData extends Component {
  constructor() {
    super();
    this.state = {
      sensor1: ''
    };
  }

  componentDidMount() {
    setInterval(() => {
      axios
        .get('/getsensor1')
        .then(result => {
          console.log(result);
          this.setState({ sensor1: result.data });
        })
        .catch(err => {
          //console.log(error.response.data);
          this.setState({ errors: err.response.data });
        });
    }, 3000);
  }

  render() {
    return (
      <div>
        <div className="jumbotron text-center header">
          <h1>Sensor Data</h1>
          <p>Displays sensor data from NodeMCU</p>
        </div>

        <div className="jumbotron text-center sensorvalue">
          <label htmlFor="sensor2">Sensor2 Value</label>
          <br />
          <label>{this.state.sensor1} </label>
        </div>
      </div>
    );
  }
}

export default SensorData;
