import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const AddEquipe = () => {
  let history = useNavigate();
  const [user, setUser] = useState({
    nom: "",
    description: "",
   
    
  });

  const { nom, description} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:9191/api/addEquipe", user);
    history("/equipe");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add  Equipe</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Team Name"
              name="nom"
              value={nom}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
         
         
          <button className="btn btn-primary btn-block">Add Equipe</button>
        </form>
      </div>
    </div>
  );
};

export default AddEquipe;
