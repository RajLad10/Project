import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  // Routes,
  // Route,
} from "react-router-dom";
import {
  Routes,
  Route,
} from "react-router";

import Delayed from './delayed';
import Unique from './unique';
import Error from './error';
import Republish from './republish';
import Sidenav from './sidenav';
import Detail from './detail';

function App()
{
    return (
      <div className="App">
        <Router>
          <Sidenav/>
          <Routes>
            <Route path='/' element={<Delayed/>}/>
            <Route path='/Unique' element={<Unique/>}/>
            <Route path='/Error' element={<Error/>}/>
            <Route path='/Republish' element={<Republish/>}/>
            <Route path='/detail' element={<Detail/>}/>
          </Routes>       
        </Router>
      </div>
    )
}

export default App;