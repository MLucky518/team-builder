import React, {useState} from 'react'
import "./form.css";

 function Form(props) {
     const[userInfo,setUserInfo] = useState({name:"",email:"",role:""});


     const handleChanges = event =>{
         setUserInfo({...userInfo,[event.target.name]:event.target.value})
     }

     const handleSubmits = event =>{
        event.preventDefault();
        const newMember = {
            ...userInfo,
         
        }
        props.addTeamMember(newMember);
        setUserInfo({name:"",email:"",role:""});
     }

    console.log(props);
    return (
        <form onSubmit = {handleSubmits}>
            <div>
                <label> Enter new Team Member name:
                    <input name = "name" type = "text" value = {userInfo.name} onChange = {handleChanges}></input>
                </label>
            </div>
             
               <br/>
            <div>   
                <label> Enter new Team Member email: 
                    <input name = "email" type = "text" value = {userInfo.email} onChange = {handleChanges}></input>
                </label>
            </div>
                <br/>
            <label> Enter new Team Member roles :
                <input name = "role" type = "text" value = {userInfo.role} onChange = {handleChanges}></input>
            </label>
            <br/>
            <button>Submit</button>
        </form>
    )
}

export default Form;
