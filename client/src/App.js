import React from "react";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Equipe from "./components/pages/Equipe";
import About from "./components/pages/About";
import Login from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes
  
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import EquipeView from "./components/equipes/EquipeView";
import EditEquipe from "./components/equipes/EditEquipe";
import AddEquipe from "./components/equipes/AddEquipe";

axios.interceptors.request.use((request)=>{
  if(localStorage.getItem("token"))
  {
   
    request.headers.authorization=`Bearer ${localStorage.getItem('token')}`;
  }
 
  return request;
})

 axios.interceptors.response.use((response)=>{
   let token = localStorage.getItem("token");
   if(token)
   {
     (response.data=='' &&(response.data = {}))
     
     response.data.user = jwt_decode(token+"");
   }
   return response;
 })

function App(props) {
  return (
    
      <div className="App">
        
        <Router>
         <Navbar />  
        <Routes>
          <Route exact path="/Joueurs" element={<Home/>} />
          <Route exact path="/equipe" element={<Equipe/>} />
          <Route exact path="/equipes/:id" element={<EquipeView/>} />
          <Route exact path="/equipe/edit/:id" element={<EditEquipe/>} />
          <Route exact path="/equipe/add" element={<AddEquipe/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/users/add" element={<AddUser/>} />
          <Route exact path="/users/edit/:id" element={<EditUser/>} />
          <Route exact path="/users/:id" element={<User/>} />
          <Route element={<NotFound/>} />
        </Routes>
        </Router>
      </div>
  
  );
}

export default App;
