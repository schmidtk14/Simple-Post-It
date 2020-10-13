import React from 'react';
import './App.css';
import Layout from './Layout/Layout'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import UserProvider from './UserProvider/UserProvider'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path = {"/"} component = {Layout} />
        </Switch>
      </BrowserRouter>
    </UserProvider>
    

  );
}



export default App;
