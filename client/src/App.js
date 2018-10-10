import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import SensorData from './components/SensorData';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/sensordata" component={SensorData} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
