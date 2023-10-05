import React, {useState} from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute'; 
import Register from './components/Register';

const App = () => {

  return(
  
    // <Routes> 
    //   <Route path='Login' element={<Login />} /> 
    //   <Route path = "/Home" Component={<Home />} />
    //   <Route path='/Dashboard' element={<Dashboard />} />
      
    // </Routes> 


    <main className='App'>
      <Login />
    </main>
  
  
    
  
  )
}

export default App;
