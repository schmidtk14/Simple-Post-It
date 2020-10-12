import React from 'react';
import './App.css';
import Layout from './Layout/Layout'
import Registration from './Auth/Registration'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'
import ProfilePage from './ProfilePage/ProfilePage'
import PasswordReset from './PasswordReset/PasswordReset'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import UserProvider from './UserProvider/UserProvider'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path = {"/"} component = {Layout} />
          <Route exact path = {"/auth"} component = {Registration} />
          <Route exact path = {"/signin"} component = {SignIn} />
          <Route exact path = {"/signup"} component = {SignUp} />
          <Route exact path = {"/passwordreset"} component = {PasswordReset} />

          <Route exact path = {"/profile"} component = {ProfilePage} />

        </Switch>
      </BrowserRouter>
    </UserProvider>
    

  );
}



export default App;
