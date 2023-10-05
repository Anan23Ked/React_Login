// import React, {useState} from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {useNavigate} from "react-router-dom";
// import './Login.css';
// import Home from "./Home";

// const Login =()=>{

//     const navigate = useNavigate();

//     const [details, setDetails] = useState({username :"", password :""});

//     const adminUser ={
//         username : "user",
//         password : "pass"
//       }
    
//       const [username, setUsername] = useState({username :""});
//       const [error, setError] = useState("");
    
//       const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));


//     const submitForm =(e) =>{
//         e.preventDefault();
//         if(details.username === adminUser.username && details.password === adminUser.password)
//         {  

//             setAuthenticated(true)
//             localStorage.setItem("authenticated", true); 
//             navigate("/Home");
            
//                 // <Routes>
//                 //     <Route path="/Login/Home" Component={Home} />
//                 // </Routes>
          
            

//         }
//         else{
//           console.log("Incorrect Details");
//           setError("Incorrect Details")
//         }  
//       };

//     return (
//         <div className='box'>
//             <div className='form'>
//                 <form action="" onSubmit={submitForm}>
//                 <h2>Login</h2>
//                 {(error !== "")? (
//                     <div className='error'>{error}
//                     <input type = "button" value = "Try Again?" onClick={() => navigate("/Login") }/>
//                     </div>
//                     ):""}
//                     <div>
//                         <input type='text' name="username" id='username' placeholder = "Username" autoComplete='off'
                            
//                             onChange={(e) => setDetails({...details, username:e.target.value})} value={details.username} />

//                     </div>
//                     <div>
//                         <input type='password' name="password" id='password' placeholder = "Password" autoComplete='off'
                           
//                             onChange={(e) => setDetails({...details, password : e.target.value})} value={details.password}/>
//                     </div>
//                     <div className='submitbtn'>
//                         <input type="submit" />
                        
//                     </div>
//                     <p className="link">
//               <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
//             </p>

//                 </form>
//             </div>
//         </div>

//     );

// }

// export default Login


import React, { useState } from 'react';
import { useNavigate, BrowserRouter, Route, Routes } from 'react-router-dom';
import './Login.css';
import Home from './Home';

const Login = () => {
  const navigate = useNavigate();

  const [details, setDetails] = useState({ username: '', password: '' });

  const adminUser = {
    username: 'user',
    password: 'pass'
  };

  const [error, setError] = useState('');

  const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem('authenticated')) || false);

  const submitForm = (e) => {
    e.preventDefault();
    if (details.username === adminUser.username && details.password === adminUser.password) {
      setAuthenticated(true);
      localStorage.setItem('authenticated', true);
      navigate('/Home');
    } else {
      console.log('Incorrect Details');
      setError('Incorrect Details');
    }
  };

  return (
    <div className="box">
      <div className="form">
        <BrowserRouter>
          <Routes>
            <Route path="/Login/Home" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <form onSubmit={submitForm}>
          <h2>Login</h2>
          {error !== '' && (
            <div className="error">
              {error}
              <input type="button" value="Try Again?" onClick={() => navigate('/Login')} />
            </div>
          )}
          <div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              autoComplete="off"
              onChange={(e) => setDetails({ ...details, username: e.target.value })}
              value={details.username}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => setDetails({ ...details, password: e.target.value })}
              value={details.password}
            />
          </div>
          <div className="submitbtn">
            <input type="submit" />
          </div>
          <p className="link">
            <button id='link'>Forgot password ? </button>Or<button id = 'link'>Sign Up</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
