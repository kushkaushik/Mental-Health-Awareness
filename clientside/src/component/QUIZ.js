import React, { useState } from 'react'

const QUIZ = () => {



  const [score, setScore] = useState(1)
  const callme = () =>{
    setScore(score+1)
    console.log(score)
  }


  const stuff  = () =>{

    if(score > 5)
  { document.getElementById("msg").style = "visibility:visible; font-size:20; color:white;text-align:center;padding:15px;background-color:red"
    document.getElementById("msg").innerHTML = "You Should go to our Survery Page"
  }

  else if(score >3)
  { document.getElementById("msg").style = "visibility:visible; font-size:20; color:black;text-align:center;padding:15px;background-color:yellow"
    document.getElementById("msg").innerHTML = "You Should Meditate yourself and join Yoga-Classes : Always calm Yourself and stay a peacefull Life"
  }
  else   if(score < 3)
  { document.getElementById("msg").style = "visibility:visible; font-size:20; color:white;text-align:center;padding:15px;background-color:green"
    document.getElementById("msg").innerHTML = "You are really living a Nice Life , Please go to the survery Page and Help Others"
    
  }


  }


  return (
    <div>









<div className="container" style={{maxWidth: "900px", margin:" 20px auto"}}>




<div className="card" >
    <div className="card-body">
      <h5 className="card-title mx-2">Email</h5>
   
      {/* <!-- <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> --> */}
      <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping"/>
    </div>




    <div className="card-body">
        <h5 className="card-title mx-2">Name</h5>
     
        {/* <!-- <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> --> */}
        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
      </div>
    
      <hr/>


     
      <div className="card-body">
        <h5 className="card-title mx-2">I frequently bring work home at night *</h5>
    <img className="card-img" style={{width: "250px "}} src="https://lh6.googleusercontent.com/m-SZ7Sh3bSJzf8o97FPy9AMmOnAhw5S1sFRPr3jUUxN1McthDB2qDm30C8-xIqvrkdHEch7jrhs6spMcJHUqeyAqQk-hVYpNYztlKctsd-U6J0L79z6KBcqSJ1PTjx52KA=w400" alt=""/>
        <div className="container" style={{display :" flex "}}>
            <button onClick={()=>callme()} style = {{margin: "12px"}} className="btn btn-success">Yes</button>
            <button style = {{margin: "12px"}} className="btn btn-success">No</button>


        </div>
     
      </div>
  

<hr/>

        
      <div className="card-body">
        <h5 className="card-title mx-2">Not enough hours in the day to do all the things that I must do *</h5>
    <img className="card-img" style={{width: "250px"}} src="https://lh4.googleusercontent.com/VqakDUITvfcHsTpTzVHCntfL6uO6xWKqInBeN5aH7-Z4pEqP1j9FBH0QF3chkgZxU_Q2zGFA1mdhK26uO5qOAmgOOuU9xn8zXcG_jwkEqOQxzjZog8UrQnThizu9T4wAtg=w400" alt=""/>
        <div className="container"  style={{display:" flex"}}>
            <button onClick={()=>callme()} style = {{margin: "12px"}} className="btn btn-success">Yes</button>
            <button style = {{margin: "12px"}} className="btn btn-success">No</button>


        </div>
     
      </div>
    
    
      <hr/>

      <div className="card-body">
        <h5 className="card-title mx-2">Do you feel tired no matter how much you sleep?</h5>
    <img className="card-img" style={{width: "250px"}} src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1143952151_header-1024x575.jpg?w=1155&h=1528"  alt=""/>
        <div className="container"  style={{display:" flex"}}>
            <button onClick={()=>callme()} style={{margin: "12px"}} className="btn btn-success">Yes</button>
            <button style={{margin: "12px"}} className="btn btn-success">No</button>


        </div>
     
      </div>


<hr/>


<div className="card-body">
<h5 className="card-title mx-2">Is it hard for you to do personal grooming?</h5>
<img className="card-img" style={{width: "250px"}} src="https://www.misiuacademy.com/wp-content/uploads/2018/12/grooming-tips-1.jpg"  alt=""/>
<div className="container" style={{display:" flex"}}>
<button onClick={()=>callme()} style={{margin: "12px"}} className="btn btn-success">Yes</button>
<button style={{margin: "12px"}} className="btn btn-success">No</button>


</div>

</div>

<hr/>




<div className="card-body">
<h5 className="card-title mx-2">I find that I don’t have time for many interests / hobbies outside of work</h5>
<img className="card-img" style={{width: "250px"}} src="https://cdn.hswstatic.com/gif/everyday-myths-time.jpg"  alt=""/>
<div className="container" style={{display: "flex "}}>
<button onClick={()=>callme()} style={{margin: "12px"}} className="btn btn-success">Yes</button>
<button style={{margin: "12px"}} className="btn btn-success">No</button>


</div>

</div>


<hr/>





<div className="card-body">
<h5 className="card-title mx-2">I am unable to perform tasks as well as I used to, my judgment is clouded or not as good as it was *</h5>

<img className="card-img" style={{width: "250px",height:"200px"}} src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"  alt=""/>


<div className="container" style={{display:" flex "}}>
<button onClick={()=>callme()} style={{margin: "12px"}} className="btn btn-success">Yes</button>
<button style={{margin: "12px"}} className="btn btn-success">No</button>


</div>

</div>




<hr/>






<div className="card-body">
<h5 className="card-title mx-2">Increase in muscular aches and pains especially in the neck, head, lower back, shoulders *</h5>
<img className="card-img" style={{width: "250px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIOV2ltKJMBb9C1lB4IocSmL1AL31OamomHg&usqp=CAU"  alt=""/>
<div className="container" style={{display: "flex"}}>
<button onClick={()=>callme()} style={{margin: "12px"}} className="btn btn-success">Yes</button>
<button style={{margin: "12px"}} className="btn btn-success">No</button>


</div>

</div>



<hr/>


<div className="card-body">
<h5 className="card-title mx-2">I seem to be listening even though I am preoccupied with my own thoughts *</h5>
<img className="card-img" style={{width: "250px",height:"200px"}} src="https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80"  alt=""/>

<div className="d-grid gap-2 d-md-block" >
<button onClick={()=>callme()} style={{margin: "12px"}} className="btn btn-success">Yes</button>
<button style={{margin: "12px"}} className="btn btn-success">No</button>


</div>

</div>




    
    </div>

 
<div className="d-grid gap-2">


  <button onClick={()=>stuff()} type="submit"  className="btn btn-success p-3 my-4">Submit</button>
 
</div>

<div id = "msg" className = 'container card  p-2' style={{textAlign:"center" ,fontSize:"26px" , visibility:"hidden"}}>
 
</div>
<br/>
<div style={{textAlign:"center"}}>
  <button className=' btn btn-success'>Please Visit Here</button>
</div>


  </div>



<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>







    </div>
  )
}

export default QUIZ