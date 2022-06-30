import React from 'react';
import './App.css';

import Login from "./component/login"
import { Routes, BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';

function App() {
  

  return (
    <div className="App" >
                      
      <BrowserRouter>
        <Routes>       
          <Route path='/' element ={<Login/>}/>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;