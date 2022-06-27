import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Reset = () => {

    const notify = (data) =>{ 
        toast.error(data,{
          autoClose: 500,
        })
      };

      const notify1 = () =>{ 
        toast.success("Reset Link sent to you email-address",{
          autoClose: 1500,
        })
      };



const [email, setEmail] = useState('')
    const history = useNavigate();
  const make = () =>{
    fetch('/forgot',{
      "method":"PUT",
      headers:{
        "Content-Type":"application/json",
        'Accept': 'application/json'
      },
      body:JSON.stringify({
      email
    })
  }).then(res=>res.json()).then(data=>{
    if(data.error){
        notify(data.error)
    }else{
        notify1()
        localStorage.setItem("resetLink",data.resetLink)
        console.log(data)
    }



   

    })
  }
  



  return (
    <div>
        <div className='my-4' style={{textAlign:"center"}}>
        <h4 >Reset-Password</h4>
        </div>
      <div className="input-group flex-nowrap container my-4">
  <span className="input-group-text" id="addon-wrapping">@</span>
  <input value  = {email} onChange = {(e)=>setEmail(e.target.value)} type="text" className="form-control" placeholder="Enter a valid Email Address" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>


<div className='text-center'>
    <button onClick={()=>make()}  className='btn btn-success my-1'>Reset-Password</button>
    </div>
    <ToastContainer/>
    </div>
  )
}

export default Reset