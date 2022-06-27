import React from 'react'
import { useNavigate } from 'react-router-dom'

const Display = () => {

const history = useNavigate();

const make = () =>{
  fetch('/email-activate',{
    "method":"POST",
    headers:{
      "Content-Type":"application/json",
      'Accept': 'application/json'
    },
    body:JSON.stringify({
    token:localStorage.getItem("token")
    })
  }).then(res=>res.json()).then(data=>{
    
    console.log("Please Login Now")
    history('/login')
   


  
  })
}


  return (
    <>
    <div className='my-5  ' >
    <h3 className=' text-center d-flex align-items-center row justify-content-center'>Click Here to Verify your Account</h3>
<div className='text-center'>
    <button onClick={()=>make()} className='btn btn-success'>Verify</button>
    </div>
    </div>
    </>
  )
}

export default Display