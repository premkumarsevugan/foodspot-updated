import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import AdminPage from "./AdminPage";



const Login = () => {
    const [uname,setUname] = useState("");
    const [pass,setPass] = useState("");
    const auth = () =>{
        
        // var uname= uname.value;
        // var pass=pass.value;
        console.log(uname,pass);
        if(uname === "admin" && pass ==="password"){
            console.log("Login Success");
            // <Navigate to="/adminpage" replace/>
            <AdminPage />
            // <Redirect to = "/adminpage" />
        }
        // else{
            
        // }
    }
    return (
        <section className="log-body">
            
        <div className="login">
            <h1 className="Welcomenote">
                Login Pannungo!
            </h1>
            <input className='log-content' name="uname" placeholder="User Name"
            value={uname}
            onChange={(e) => setUname(e.target.value)
            }
            type={'text'}></input>
            <input className='log-content' name="pass" placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type={'password'}></input>
            <Link to="/adminpage"><button 
            className="log-bt"
            onClick={()=>{auth()}}
            >Log in</button></Link>
            {/* <div className='line'></div> */}
        </div>
        </section>
    );
}
export default Login;