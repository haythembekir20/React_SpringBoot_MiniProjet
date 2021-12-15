import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditEquipe = () => {
  let history = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    i:id,
    nom: "",
    description: "",
   
  });

  const { i,nom, description } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
   
    await axios.put("http://localhost:9191/api/update", user);
    
    history("/equipe");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9191/user/equipeById/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Equipe</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your nom"
              name="nom"
              value={nom}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
         
        
          <button className="btn btn-warning btn-block">Update Equipe</button>
        </form>
      </div>
    </div>
  );
};

export default EditEquipe;
