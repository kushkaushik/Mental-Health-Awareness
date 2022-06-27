import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signin = () => {
    const history = useNavigate();
 const [name,setName]  = useState("");
const [email,setEmail]  = useState("");
const [password,setPassword]  = useState(""); 
   

const notify = (data) =>{ 
  toast.error(data,{
    autoClose: 500,
  })
};


const notify1 = (data) =>{ 
  toast.success("Email Sened to your email id for verification",{
    autoClose: 1000,
  })
};



const  postData = () =>{

    fetch("/signup",{
        "method":"POST",
        headers:{
          "Content-Type":"application/json",
          'Accept': 'application/json'
    
        },
        body:JSON.stringify({
          name, email ,password
        })
      }).then(res=>res.json()).then(data=>{
      console.log(data)
        if(data.error)
        notify(data.error)
        else{
          
          notify1(data.message)
          localStorage.setItem("token",(data.token))
        localStorage.setItem("email",(data.user.email))
}

      })
    
}

 




   
  return (
    <div >
     
    
    
    
    
    
    
    
    
          <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
              alt="Sample"/>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
           
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
               
                 
    
    
              
    
             <div id="hideMeAfter5Seconds"><ul className="fa-ul">
      
      
    </ul></div>
                   
              </div>
    
              <div className="divider d-flex align-items-center my-4">
                <h3 className="text-center fw-bold mx-3 mb-0">Mental-Health-Awareness</h3>
              </div>
  

    <div className="form-outline mb-4">
                <input value={name} onChange = {(e)=>setName(e.target.value)} name="email1" type="text" id="txt" className="form-control "
                  placeholder="Enter your name" />
               
              </div>
    

           {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input  value={email} onChange = {(e)=>setEmail(e.target.value)} name="email1" type="text" id="txt" className="form-control "
                  placeholder="Enter a valid email address" />
            
              </div>
    
              {/* <!-- Password input --> */}
              <div className="form-outline mb-3">
                <input  value={password} onChange = {(e)=>setPassword(e.target.value)} name="pass1" type="password" id="ps" className="form-control"
                  placeholder="Enter password" />
       
              </div>
    
              <div className="d-flex justify-content-between align-items-center">
             
               
              
              </div>
    
    
        <div style={{textAlign:"center"}}>


                <button onClick={()=>postData()} className="btn btn-primary btn-lg"  
              style = {{paddingLeft:"2.5rem",paddingRight:"2.5rem"}}>Submit</button>
  
    
    
    
    
    
                <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to="/login "
                    className="link-danger">Login</Link></p>

</div>     
              </div>
    
            
          </div>
        </div>
        </section>
        <ToastContainer/>
      </div>
      
    
    
      )
    }
    
    export default Signin