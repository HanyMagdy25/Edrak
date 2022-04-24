import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(()=>{
    if (localStorage.getItem('token')){
        history.push("/dashboard")
    }
  },[])

  const handleLogin = async () => {
      let item = {email,password};
      let result = await fetch("https://depax-blog-backend.herokuapp.com/login",{
          method:"POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
              email: email,
              password: password
          })
      });
      result = await result.json();
      console.log(result)
      localStorage.setItem("token",JSON.stringify(result.msg.token))
    //   history.push("/dashboard")
  }

  
  return (
    <div className="login-page">
      <div className="login-page-container">
        <h2>login</h2>
        <div className="login-form">
          <input type="text" placeholder="email" onChange={(e)=> setEmail(e.target.value)}/>
          <br />
          <input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)} />
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
