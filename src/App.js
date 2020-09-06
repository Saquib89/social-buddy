import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import PostDetails from './components/PostDetails/PostDetails';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  const myStyle = {
    backgroundColor: "#0B2041",
  };
  return (
    <div style={myStyle}>
    <Header/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact><Home/></Route>
          <Route path="/post/:id"><PostDetails/></Route>

          <Route path="*"><h1>404 Not Found</h1></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
