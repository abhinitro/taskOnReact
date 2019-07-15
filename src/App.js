import React from 'react';
import './App.css';


import { HashRouter, Route, Switch } from 'react-router-dom';
import { DefaultLayout } from './containers/DefaultLayout';


function App() {
  return (
    <div className="App">
       <HashRouter>
          <Switch>
           <Route path="/" name="Home" component={(DefaultLayout)} />
          </Switch>
        </HashRouter>
    
    </div>
  );
}

export default App;
