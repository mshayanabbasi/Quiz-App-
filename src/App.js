import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Router from './Routes';


class App extends React.Component {
  
  state = {
    
  }
  
  render(){
    return(
      <div className="App">
        <Router />
      </div>
    )
  }
}

export default App;
