import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UseContext } from '../App';


const Nav = () => {

  const {state,dispatch} = useContext(UseContext);

const history = useNavigate();

  const dataRender = () => {
    if(state!==null){
      return [
      
        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>,
        <Link className="nav-link active" to="/about">About</Link>,
        <Link className="nav-link active" to="/quiz">Survey</Link>,
        <Link className="nav-link active" to="/talks">Talks</Link>,
        <button className='btn btn-danger btn-sm mx-2' onClick={()=>{
          localStorage.clear()
          dispatch({type:"CLEAR"})
          history('/login')
        }}>Logout</button>,
        <span style={{fontFamily:"cursive",color:"white" , textAlign:"center"}} className='text-muted  rounded-circle bg-dark text-white p-2 color-primary'> {JSON.parse(localStorage.getItem("name"))}</span>,
      ]
    }
    else{ 
      return [
        <Link className="nav-link active" to="/login">Login</Link>,
        <Link className="nav-link active" to="/signin">SignIn</Link>,
       
    ]
    }
  }
  







  return (
    <div>
         
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-text-opacity-25">
       
       

       <div className="container-fluid">
           
           {/* <img src="./images/logo.png" alt="" width="30" height="24" className="d-inline-block align-text-top"/> */}
         <Link to = {state?"/home":"login"} className="navbar-brand"  >Mental Health</Link>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
               {/* <Link className="nav-link active" aria-current="page" to="/home">Home</Link> */}
             </li>
             <li className="nav-item">
            
               {/* <Link className="nav-link active" to="/about">About</Link> */}
             </li>
             
              {/* {state ? "Welcome "  + JSON.parse(localStorage.getItem("name")) : ""} */}
           
            
           </ul>
       
       {dataRender()}

            
         </div>
       </div>
     </nav> 











     <footer className="bg-primary text-center text-white fixed-bottom footer navbar-fixed-bottom">
    
  
  
    <div className="text-center p-3" style= {{backgroundColor:"rgba(0, 0, 0, 0.2);"}}>
      © 2022 Copyright:
      <Link className="text-white" style={{textDecoration:"none"}} to="https://mdbootstrap.com/">devmandeep01@gmail.com  :::</Link>
      <Link className="text-white" style={{textDecoration:"none"}} to="https://mdbootstrap.com/">kushkaushik271@gmail.com</Link>
    </div>

  </footer>




    </div>

    </div>
  )
}

export default Nav