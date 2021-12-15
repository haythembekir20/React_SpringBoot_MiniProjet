import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const EquipeView = () => {
  const [equipe, setEquipe] = useState({
    nom: "",
    description: "",
    
    
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:9191/user/equipeById/${id}`);
    setEquipe(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/equipe">
        back to Home
      </Link>
      <h1 className="display-4">Equipe Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">nom: {equipe.nom}</li>
        
        <li className="list-group-item">Description: {equipe.description}</li>
        
       
      </ul>
    </div>
  );
};

export default EquipeView;
