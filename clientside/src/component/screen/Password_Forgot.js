import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Password_Forgot = () => {



    const notify = () =>{ 
        toast.error("You can only access single time , if you wanna again change then again reset your password",{
          autoClose: 1500,
        })
      };

      const notify1 = (data) =>{ 
        toast.success(data,{
          autoClose: 1000,
        })
      };


const [password, setPassword] = useState('')

const history = useNavigate();
  const make = () =>{
    fetch('/res_pass',{
      "method":"POST",
      headers:{
        "Content-Type":"application/json",
    
      },
      body:JSON.stringify({
        newPass:password,
      resetLink:localStorage.getItem("resetLink")
      })
    }).then(res=>res.json()).then(data=>{
        if(data.error){
            notify()
        }
        else{
            notify1(data.message)
            localStorage.clear()
            console.log(data)
        }
 

    })
  }
  



  return (
    <div>
        <div className='my-2' style={{textAlign:"center"}}>
    <h4>Enter a New Password</h4>
        </div>

      <div className="input-group flex-nowrap container my-4">
  <span className="input-group-text" id="addon-wrapping">@</span>
  <input value={password} onChange = {(e)=>{setPassword(e.target.value)}} type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>


<div className='text-center'>
    <button onClick={()=>make()}  className='btn btn-success my-1'>Reset-button</button>
    </div>
<ToastContainer/>
    </div>
  )
}

export default Password_Forgot



