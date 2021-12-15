import React from "react";
import axios from "axios";

import {  useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()  
  let username="";
  let password="";
  return (
    <div className="container">
      <div className="py-4">
        <h1>Login Page</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input
              type="text"
              onChange={(e)=>{
                username = e.target.value;
                console.log(username)
            }}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              onChange={(e)=>{
                password = e.target.value;
                
            }}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group form-check">
            
            
          </div>
          <button 
          onClick={(e)=>{
            e.preventDefault();
            let user={username,password}
            axios.post("http://localhost:8081/users/login",user).then((result)=>{
               localStorage.setItem("token",result.headers.authorization)
               navigate('/about')
            })
         
        }}
           class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
