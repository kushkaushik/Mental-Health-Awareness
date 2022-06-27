import './App.css';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import {BrowserRouter,Route,Routes, useNavigate} from 'react-router-dom'
import Nav from './component/Nav';
import Login from './component/Login';
import Signin from './component/Signin';
import Home from './component/Home';
import About from './component/About';
import QUIZ from './component/QUIZ';
import {initialState,reducer} from './redicer/useReducer'
import Talks from './component/Talks';
import Display from './component/screen/Display';
import ResetScr from './component/screen/ResetScr';
import Password_Forgot from './component/screen/Password_Forgot';

export const UseContext = createContext();

const Routing = () =>{

const {state , dispatch} = useContext(UseContext)
const history = useNavigate();  
useEffect(() => {
  const User  = JSON.parse(localStorage.getItem("user"))
  if(User){
    dispatch({type:"USER" , payload:User})
  }else{
    if(!window.location.pathname.startsWith("/authentication"))
    if(!window.location.pathname.startsWith("/reset-Password"))
    history('/login')
  }
  
  
   
  }, [])
  


  return (
    <Routes>

    <Route path='/signin' element = {<Signin/>}/>
    <Route path='/login' element = {<Login/>}/>
    <Route path='/home' element = {<Home/>}/>
    <Route path='/about' element = {<About/>}/>
    <Route path='/quiz' element = {<QUIZ/>}/>
    <Route path='/talks' element = {<Talks/>}/>
<Route  path = "/authentication/activate/:user"  element = {<Display/>} />
<Route  path = "/reset_screen"  element = {<ResetScr/>} />
<Route  path = "/reset-Password/:user"  element = {<Password_Forgot/>} />
   

   </Routes>
  )
}



function App() {
const [state, dispatch] = useReducer(reducer , initialState)
  return (
   <>


   <BrowserRouter>
   
   <UseContext.Provider value={{state ,dispatch}}>
   
    

    
   <Nav/>
  

<Routing/>


   

   </UseContext.Provider>
   </BrowserRouter>
   </>
  );
}

export default App;
