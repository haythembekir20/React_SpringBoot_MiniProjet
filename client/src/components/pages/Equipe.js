import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Equipe = () => {
  const [equipe, setEquipe] = useState([]);
  let [isAdmin , setIsAdmin] = useState(false)

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:9191/user/equipes");
    setEquipe(result.data.reverse());
    if(result.data.user.roles.includes('ADMIN'))
                {
                    setIsAdmin(true)
                }
  };

  const deleteUser = async (id,index) => {
    await axios.delete(`http://localhost:9191/api/delete/${id}`);
    
    let newequipes=[...equipe]
    newequipes.splice(index,1);
   setEquipe(newequipes);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Equipe Page</h1>
        { isAdmin && <Link className="btn btn-outline-dark" to="/equipe/add">Add Equipe</Link>}
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Description</th>
             
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {equipe.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.nom}</td>
                <td>{user.description}</td>
                
                <td>
                  <Link class="btn btn-primary mr-2" to={`/equipes/${user.id}`}>
                    View
                  </Link>
                  {isAdmin && 
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/equipe/edit/${user.id}`}
                  >
                    Edit
                  </Link>}
                  {isAdmin && 
                  <button
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id,index)}
                  >
                    Delete
                  </button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Equipe;
