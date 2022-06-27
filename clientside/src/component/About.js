import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const About = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const notify = (data) =>{ 

    toast.error(data,{
      autoClose: 500,
    })
  
  
  
  };



  const notify1 = (data) =>{ 

    toast.success(data,{
      autoClose: 500,
    })
  
    
  
  };
  


  const contact = () =>{
    fetch('/contact',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name , email , comment
      })

    }).then(res=>res.json()).then(data=>{
     if(data.error)
        notify(data.error)
        else{
         
          notify1(data.message)
         
}

    })
  }



  return (
  <div>




<header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">

        </div>
      </div>
    
    </header>

    <main role="main"/>

      <section className="jumbotron text-center ">
        <div className="container">
          <h1 className="jumbotron-heading">About</h1>
          <p className="lead text-muted">Mental-Health-Awareness</p>
         
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">


    
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow" style={{borderRadius:"20px"}}>
                <img className="card-img-top" src="./images/mandeep.jpg" alt="Card" />
                <div className="card-body">
                  <p className="card-text">Mandeep Kumar<br/><span>Galgotias University</span>.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>



            <div className="col-md-4" >
              <div className="card mb-4 box-shadow" style={{borderRadius:"20px"}}>
                <img className="card-img-top" height="420px" src="./images/kk.jpeg" alt="Card" />
                <div className="card-body">
                  <p className="card-text"> Kush <br/><span>Galgotias University</span>.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-4" >
              <div className="card mb-4 box-shadow" style={{borderRadius:"20px"}}>
                <img className="card-img-top" height="420px" src="./images/rahulk.jpeg" alt="Card" />
                <div className="card-body">
                  <p className="card-text"> Rahul Kapri <br/><span>Galgotias University</span>.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    
                  </div>
                </div>
              </div>
            </div>
            

          
    
            {/* <!-- Container (Contact Section) --> */}
<div id="contact" className="container-fluid bg-grey">
  <h2 className="text-center">CONTACT</h2>
  <div className="row">
    <div className="col-sm-5">
      <p>Contact us and we'll get back to you within 24 hours.</p>
      <p><span className="glyphicon glyphicon-map-marker"></span> DELHI, INDIA</p>
        
      <p><span className="glyphicon glyphicon-phone"></span> 8685835259 <i className="fa fa-phone"></i></p>
        
      <p><span className="glyphicon glyphicon-envelope"></span>kushkaushik271@gmail.com</p>
    </div>


 
    <div className="col-sm-7 slideanim">
      <div className="row">
        <div className="col-sm-6 form-group">
          <input value={name} onChange = {(e)=>setName(e.target.value)} className="form-control" id="name" name="contactname" placeholder="Name" type="text" required/>
        </div>
        <div className="col-sm-6 form-group">
          <input value={email} onChange = {(e)=>setEmail(e.target.value)} className="form-control" id="email" name="contactemail" placeholder="Email" type="email" required/>
        </div>  
      </div>
      <textarea value={comment} onChange = {(e)=>setComment(e.target.value)} className="form-control my-2" id="comments" name="contactcomment" placeholder="Comment" rows="5"></textarea>
    
        <div style={{textAlign:"center"}}>
          <button onClick={()=>contact()} className="btn btn-primary btn-lg btn-block" type="submit">Send</button>
        </div>
      
    </div>
    

  </div>
</div>

</div>
</div>
</div>
<br/>
<br/>
<br/>
<ToastContainer/>
</div>






   
          
















  )
}

export default About