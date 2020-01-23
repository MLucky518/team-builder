import React,{useState} from 'react';
import './App.css';
import {teamMembers} from "./data";
import Form from "./components/Form";

function App() {
  const [users,setUsers] = useState(teamMembers);

const newMember = (user) =>{
 
 const newMember =  setUsers([...users,user]);
}

  return (

    <div className="App">

      <Form addTeamMember = {newMember}></Form>

      <div className = "teamList">

        {users.map(member =>{
          return( <div>
            <h1>{member.name}</h1>
        <p>{member.email}</p>
        <p>{member.role}</p>
          </div>);
        })}
      </div>
      
    </div>
  );
}

export default App;
