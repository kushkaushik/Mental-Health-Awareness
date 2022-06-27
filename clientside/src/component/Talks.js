import React, { useEffect, useState } from 'react'

const Talks = () => {
const [comment, setComment] = useState('')
const [dataji, setData] = useState([])
// const [repcm, setRepcm] = useState('')




const deleteData = (postId) =>{
  fetch("/del/"+postId,{
    "method":"delete",
    headers:{
      "Authorization":"Kush "+localStorage.getItem("jwt"),
  }

  }).then(res=>res.json()).then(result=>{console.log(result)
   const temp = dataji.filter((ee)=>{
   return result._id !== ee._id

  })

  setData(temp)
  })
 
}





const mr = (text , postId) =>{
  fetch('/commentreply',{
    method:"put",
    headers:{
        "Content-Type":"application/json",
        "authorization":"Kush "+localStorage.getItem("jwt")
    },
    body:JSON.stringify({
        text, postId 
    })
    }).then(res=>res.json()).then(result=>{
      console.log(result)

      const temp3 = dataji.map((item)=>{
        if(item._id === result._id)
         { return result}
          else
        {  return item}
      })

      setData(temp3)


  })
}








useEffect(() => {

  
  fetch('/showcomment',{
    headers:{
      "authorization": "Kush "+localStorage.getItem("jwt")
      }

  }).then(res=>res.json()).then(datahere=>{
    console.log(datahere.data)
    setData(datahere.data)
    

    
  })

 
}, [])





const mydate= () =>{
  fetch('/commentpass',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "authorization":"Kush " + localStorage.getItem("jwt")
    },
    body:JSON.stringify({
      comment
    })

  }).then(res=>res.json()).then(data=>{
    console.log(data)
    
  })
}




   
  return (
    <div>





{dataji.map((e)=>{
  return (
<>


<div className='container my-4 card'>
  <div>
  <h5>{e.postedBy.name}</h5>
  <span style={{fontWeight:"bold"}}>Question : {e.comment}</span><br/>
  <span>Comments: </span> <span>{e.comments.length}</span><hr/>

  
  


  {
    e.comments.map((res)=>{
      return (
        <h6><span style={{fontWeight:"bold"}}>{res.postedBy.name} :  <span> </span></span>{res.text}</h6>
      )
    })
  }




  
    <form onSubmit={(item)=>{item.preventDefault() 
      mr(item.target[0].value , e._id)}}>
      <div className="col-sm-3 form-group" >  
<input  placeholder='Add a comment' className='form-control'/>
</div>
</form>
<br/>
<div style = {{textAlign:"center"}}>
<button onClick={()=>deleteData(e._id)} className='btn btn-danger btn-sm' >Delete Post</button>

</div>


     </div>
     <hr/>

<br/>
<br/>
</div>

</>
    
  )
})}



<div className='container card my-5'>
<textarea value={comment} onChange = {(e)=>setComment(e.target.value)} className="form-control my-4" placeholder="Add New Comment" rows="5"></textarea>
<div style={{textAlign:"center"}}>
 <button onClick={()=>mydate()} className="btn btn-success btn-lg m-2" type="button">Comment</button>
<br/>
<br/>
<br/>
 </div>

 
</div>

    </div>
  )
}

export default Talks