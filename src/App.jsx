import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import CardDetail from './components/CardDetail';
import Create from './components/Create';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path={'/home'}><Cards /></Route>
        <Route exact path={'/detail/:id'}><CardDetail /></Route>
        <Route exact path={'/create'}><Create /></Route>
      </Switch>
    </div>
  );
}

export default App;
