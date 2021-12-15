import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

const Home = () => {
  let history = useNavigate();
  const [users, setUser] = useState(null);
  const [search,setSearch]=useState('');
  const [idequsearch,SetIdequsearch]=useState('');
  const [team,setTeam]=useState([]);
  const [, setIsLoaded] = useState(false);
  let [isAdmin , setIsAdmin] = useState(false)
  
  let r
  let Teams
  

  useEffect(()  => {
     loadUsers();
  }, []);

  const loadUsers =  () => {
     axios.get("http://localhost:9191/user/Joueurs").then((result)=>{
      
      
      setUser(result.data);
      if(result.data.user.roles.includes('ADMIN'))
                {
                    setIsAdmin(true)
                }

    });
    //
  };
 

  const deleteUser = async (id,index) => {
    await axios.delete(`http://localhost:9191/api/deletejoueur/${id}`)

    
   let newusers=[...users]
   newusers.splice(index,1);
   setUser(newusers);
  };

  const loadUsersBySearch = async (nom) => {
   if(nom===""){  
     const result = await axios.get("http://localhost:9191/user/Joueurs");
     setUser(result.data.reverse());
    

    }
   else {
    const result = await axios.get(`http://localhost:9191/api/joueurByName/${nom}`);
    setUser(result.data.reverse());
  
  }
    
  };
  const loadUsersByEquipe = async (idEqu) => {
    console.log(idEqu);
    if(idEqu===""){  
      const result = await axios.get("http://localhost:9191/user/Joueurs");
      setUser(result.data.reverse());
     }
    else {
     const result = await axios.get(`http://localhost:9191/api/joueurByEquipe/${idEqu}`);
     setUser(result.data.reverse());
   
   }
     
   };
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

  return (
    <div className="container">
      <div className="py-4">
      {isAdmin &&
      <div>
      <h1>Search By Name</h1>
      <div class="input-group">
  <input type="search" class="form-control rounded" 
  placeholder="Search" 
  name="Search" 
  aria-label="Search" 
  aria-describedby="search-addon"
  onChange={event => setSearch(event.target.value)}
  
  />
  <button type="button" class="btn btn-outline-primary" onClick={() => loadUsersBySearch(search)} >Search</button>
</div>
<h1>Search By Equipe </h1>
<select 
          
          onClick={(e)=>{
            
                    Teams = JSON.parse(e.target.value);
                    console.log("Hi");
                   console.log(Teams);
                    
                }} className="custom-select custom-select-lg mb-3" name="idEquSearch" onChange={ex => SetIdequsearch(ex.target.value)} >
                  <option value="" > Search By Equipe</option>
                  
                    {team.map(r=>{
                     
                        return  <option  value={r}  >{r} </option>
                    })}
                    
                </select><button type="button" class="btn btn-outline-primary" onClick={() => loadUsersByEquipe(idequsearch)} >Search Equipe</button>
</div>}
        <h1>Joueur Page</h1>
        {isAdmin && <Link className="btn btn-outline-dark" to="/users/add">Add Userr</Link>}
        
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Equipe</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user?.nom}</td>
                <td>{user?.date}</td>
                <td>{user?.idEqu}</td>
                <td>
                   <Link class="btn btn-primary mr-2" to={`/users/${user?.id}`}>
                    View
                  </Link>
                  {isAdmin &&
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user?.id}`}
                  >
                    Edit
                  </Link>}
                  {isAdmin &&

                   <button
                    class="btn btn-danger"
                    onClick={() => deleteUser(user?.id,index)}
                  >
                    Delete
                  </button>  }

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
