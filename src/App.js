import React from 'react';
import './App.css';
import Home from './Home/Home'
import {BrowserRouter, Switch, Route} from "react-router-dom"

//originally used firebase backend to support user signup, login and stored each users notes on backend
//because firebase backend is no longer up and running I decided to remove corresponding pages for portfolio
function App() {
  return (    
    <BrowserRouter>
      <Switch>
        <Route exact path = {"/"} component = {Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
