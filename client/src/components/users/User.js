import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    nom: "",
    date: "",
    idEqu: ""
    
  });
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:9191/user/joueurById/${id}`).then((result)=>{
      setUser(result.data)
    })
    //   setUser(res.data);
    // loadUser();
  }, []);
  // const loadUser = async () => {
  //   const res = await axios.get(`http://localhost:9191/joueurById/${id}`);
  //   setUser(res.data);
  // };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/Joueurs">
        back to Home
      </Link>
      <h1 className="display-4">Joueur Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.nom}</li>
        
        <li className="list-group-item">Date: {user.date}</li>
        <li className="list-group-item">Equipe: {user.idEqu}</li>
       
      </ul>
    </div>
  );
};

export default User;
