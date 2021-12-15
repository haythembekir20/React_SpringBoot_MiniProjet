import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useNavigate();
  const { id } = useParams();
  const [team,setTeam]=useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  let r
  let Teams
  const [user, setUser] = useState({
    i:id,
    nom: "",
    date: "",
    idEqu: r 
  });

  const { i,nom, date, idEqu } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);
  useEffect(() => {
    axios.get("http://localhost:9191/user/equipesunique")
        .then((result) => {
            setTeam(result.data);
            Teams= result.data[0];
            
        }).catch(err => console.log(err))
}, [])

useEffect(() => {
    if (team.length > 0) {
        setIsLoaded(true)
       
    }
    console.log(team.length);
}, [team])

  const onSubmit = async e => {
    e.preventDefault();
    
    await axios.put("http://localhost:9191/api/updatejoueur", user);
    console.log(user);
    history("/Joueurs");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9191/user/joueurById/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Joueur</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your idEqu"
              name="nom"
              value={nom}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Your Date"
              name="date"
              value={date}
              onChange={e => onInputChange(e)}
            />
          </div>
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your idEqu"
              name="idEqu"
              value={idEqu}
              onChange={e => onInputChange(e)}
            />
          </div> */}
           <select 
          
          onClick={(e)=>{
            console.log(e.target.value);
                    Teams = JSON.parse(e.target.value);
                    
                }} className="custom-select custom-select-lg mb-3" name="idEqu"  onChange={e => onInputChange(e)} >
                   <option  value={idEqu}>{idEqu}</option>
                    {team.map(r=>{
                     
                        return <option  value={r}>{r}</option>
                    })}
                    
                </select>
        
          <button className="btn btn-warning btn-block">Update Joueur</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
