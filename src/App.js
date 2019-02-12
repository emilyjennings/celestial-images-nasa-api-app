import React, { Component } from 'react';
import IntroComponent from './IntroComponent.js'
import CelestialComponent from './CelestialComponent.js'

class App extends Component {
  render() {
    // your code in the return statement below!
    return (
      <div className="App">
        <IntroComponent />
        <CelestialComponent />
      </div>
    );
  }
}

export default App;
