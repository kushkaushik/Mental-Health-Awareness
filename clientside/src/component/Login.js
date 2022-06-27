import React, {  useState , useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {UseContext}  from '../App';  
const Login = () => {

  const history = useNavigate();
  const {dispatch} = useContext(UseContext)
  
const [email,setEmail]  = useState("");
const [password,setPassword]  = useState(""); 
   
  
const notify = (data) =>{ 

  toast.success(data,{
    autoClose: 500,
  })

  

};

const postData = () =>{
  fetch("/signin",{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        'Accept': 'application/json'

    },
    body:JSON.stringify({
        email,
        password
    })
}).then(res=>res.json()).then(data=>{
    console.log(data);
    if(data.error)
 {   notify(data.error)}
   else{
   localStorage.setItem("jwt",data.token);
   localStorage.setItem("user",JSON.stringify(data.user));
   localStorage.setItem("name",JSON.stringify(data.user.name));
   console.log(data)
   dispatch({type:"USER" , payload:data.user})  
       history('/home');
   }
})

}




  return (
<div className='my-1'>
 








      <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
          alt="Sample"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
       
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
</svg>

            </button>
             


            <button type="button" className="btn btn-primary btn-floating mx-1">
              <Link style={{color:"white"}} to="/https://www.facebook.com/"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg></Link>
            
              
            </button>

         <div id="hideMeAfter5Seconds"><ul className="fa-ul">
  
  <li><i className="fa-li fa fa-spinner fa-spin"></i></li>
  
</ul></div>
               
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

       {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input  value={email} onChange = {(e)=>setEmail(e.target.value)} name="email1" type="text" className="form-control form-control"
              placeholder="Enter a valid email address" />
            <label className="form-label" for="form3Example3">Email address</label>
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-3">
            <input  value={password} onChange = {(e)=>setPassword(e.target.value)} name="pass1" type="password" id="ps" className="form-control form-control"
              placeholder="Enter password" />
            <label className="form-label" for="form3Example4">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
         
            <div className="form-check mb-0">
              
              <label className="form-check-label" for="form2Example3">
            
              </label>
            </div>
            <Link to="/reset_screen" className="text-body">Forgot password?</Link>
          </div>


          <f className="text-center text-lg-start mt-4 pt-2"/>


            <button  onClick={()=>postData()} className="btn btn-primary btn-small" 
          style = {{paddingLeft:"2.5rem",paddingRight:"2.5rem"}}>Login</button>






            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/signin"
                className="link-danger">Register</Link></p>
          </div>

        
      </div>
    </div>
    </section>
    <ToastContainer/>
  </div>
  


  )
}

export default Login