import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SideMenu from './SideMenu/sideMenu'
import { Container } from 'semantic-ui-react';
import Outerheader from './Firstsection/Headersection/Outerheader';
import Gridcomponent from './Firstsection/Gridsection/Gridcomponent';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Outerheader/>
         <Gridcomponent/>
         <SideMenu/>
      </div>
    );
  }
}

export default App;
