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
      // let item = {email,password};
      let result = await fetch("https://depax-blog-backend.herokuapp.com/login",{
          method:"POST",
          headers: {
            'Content-Type': 'application/json'
          },
          
          body:JSON.stringify({
            email: email,
            password: password
          }),
          credentials: 'include'
      });
      result = await result.json();
      console.log('29',result)
      if(result.code === 200){
        localStorage.setItem("token",JSON.stringify(result.msg.token))
          history.push("/dashboard")
      }else{
          alert(result.status)
      }
      
    
  }

  
  return (
    <div className="login-page">
      <div className="login-page-container">
        <h2 className="login-title">تسجيل الدخول</h2>
        <div className="login-form">
          <input type="text" placeholder="البريد الالكترونى" onChange={(e)=> setEmail(e.target.value)}/>
          <br />
          <input type="password" placeholder="كلمة السر" onChange={(e)=> setPassword(e.target.value)} />
          <br />
          <button className="newButton" onClick={handleLogin}>تسجيل</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
