import React, { useState,useEffect  } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const AddUser = () => {
  let history = useNavigate();
  const [team,setTeam]=useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  let r
  let Teams
  const [user, setUser] = useState({
    nom: "",
    date: "",
    idEqu: r
    
  });

  const { nom, date, idEqu} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:9191/api/addJoueur", user);
    history("/Joueurs");
  };
  useEffect(() => {
    axios.get("http://localhost:9191/user/equipesunique")
        .then((result) => {
            setTeam(result.data);
            Teams= result.data[0];
            //animalRace = ;
        }).catch(err => console.log(err))
}, [])

useEffect(() => {
    if (team.length > 0) {
        setIsLoaded(true)
       
    }
    console.log(team.length);
}, [team])
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="nom"
              value={nom}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="date"
              value={date}
              onChange={e => onInputChange(e)}
            />
          </div>
           {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="idEqu"
              value={idEqu}
              onChange={e => onInputChange(e)}
            />
          </div>  */}
          <select 
          
          onClick={(e)=>{
            console.log(e.target.value);
                    Teams = JSON.parse(e.target.value);
                    
                }} className="custom-select custom-select-lg mb-3" name="idEqu"  onChange={e => onInputChange(e)} >
                    {team.map(r=>{
                     
                        return <option  value={r}>{r}</option>
                    })}
                    
                </select>
          
         
         
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
