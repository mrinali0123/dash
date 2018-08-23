import React, { Component } from 'react';
import './App.css';
import Outerheader from './Headersection/Outerheader';
import MainDisplayComponent from './MainDisplay/mainDisplayComponent';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Outerheader/>
         <MainDisplayComponent/>
         {/* <DashLine/>
         <Gridcomponent/>
         <SideMenu/> */}
      </div>




    );
  }
}

export default App;
