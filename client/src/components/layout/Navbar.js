import React from "react";
import { Link ,useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useState , useEffect} from 'react';
const Navbar = () => {
  let [isAdmin,setIsAdmin]=useState(false)
  let [isUser,setIsUser]=useState(false)
  const navigate = useNavigate()  
    let [user,setUser]=useState(null)
    useEffect(() => {
        let token = localStorage.getItem("token");
        
        if(token !=null)
        {
            console.log("test")
           setUser(jwt_decode(token+"").sub);
        }
        else{
            navigate('/login');
        } 
    }, [])
  useEffect(() => {
      let token = localStorage.getItem("token");
      if(token)
      {
        let user= jwt_decode(token+"")  
       if(user.roles.includes("ADMIN"))
        {
             setIsAdmin(true);
        }
        else if (user.roles.includes("USER"))  
        {
          setIsUser(true);
     }    
       
      } 
  }, [])

  const logout = ()=>{
    localStorage.removeItem("token");
    navigate('/login');
}
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
       
        <Link className="navbar-brand" to="/"> Recat User </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
             
              <Link className="nav-link" to="/Joueurs"> Joueur </Link>
            </li>
             <li className="nav-item">
              
              <Link className="nav-link" to="/equipe"> Equipe </Link>
            </li>
            <li className="nav-item">
              
             <Link className="nav-link" to="/about"> About </Link>
            </li>
            <li className="nav-item">
            {/* <Link className="nav-link" to="/login"> Login </Link> */}
              {isAdmin && <p className="nav-link" onClick={logout}>Logout {user}  </p>}  
              {isUser && <p className="nav-link" onClick={logout}>Logout {user}  </p>} 
             

              {/* <p className="nav-link" onClick={logout}>{user} </p> */}
            </li> 
          </ul>
        </div>

        {/* <Link className="btn btn-outline-light" to="/users/add">Add User</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
