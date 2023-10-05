import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import ReactDOM from "react-dom/client";

const Home = () =>{

  //   const [authenticated, setauthenticated] = useState(null);
  //   useEffect(() => {
  //   const loggedInUser = localStorage.getItem("authenticated");
  //   if (loggedInUser) {
  //     setauthenticated(loggedInUser);
  //   }
  // }, []);

  // if (!authenticated) {
  //   return <Navigate replace to="/Login" />;
  // } else {

  const navigate = useNavigate();

  const logout = ()=>{
    navigate("/Login");
            <switch>
                <Routes>
                    <Route path="/Login" Component={Login} />
                </Routes>
            </switch>
  }
  
    return (
      <body>
   
      <div>
      <button className="logout" onClick={logout}>Log out</button>
      <style>{'body { background-color: red; }'}</style>
        <p>Welcome to you Dashboard</p>
        <h1>Gellokok</h1>
      </div>
      </body>
    );
  }




export default Home