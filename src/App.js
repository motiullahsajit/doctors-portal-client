import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment';
import { createContext } from 'react';
import { useState } from 'react';
import Login from './components/Login/Login';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ContactUs from './components/Home/ContactUs/ContactUs';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="container-fluid">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <PrivateRoute path='/appointment'>
              <Appointment />
            </PrivateRoute>
            <Route path='/contactUs'>
              <ContactUs />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <PrivateRoute path='/dashboard'>
              <DashBoard />
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div >
  );
}

export default App;
