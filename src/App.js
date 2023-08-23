
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import TextForm from './component/TextForm';
import React, { useState } from 'react';
import Alert from './component/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//browserouter ye parent compo hai aur ye all other componend ko store krta hai
//Route - component ko render krega according to specific path
//React router ye single page web appl create krne ke liye use hota hai.
//using react router hum multiple routes create kr sakte hai appl me
//suppose appl me ek component se dusre compo pe ya page pe navigate kr sakte smoothly without loading page

function App() {
  const [mode, setMode] = useState('light');
  //app.js me puri application ki state ko manage kru,jyada control app.js pe denge
  const [alert, setAlert] = useState(null); // setalert kya hai alert ki value set krega,,,alert ke liye ek state banayi hai ,,alert ek object return krega,,

  const showAlert = (message, type)=>{ //showalert fun show krega alert msg and type of alert ko
    setAlert({
      msg: message,
      type: type //jo bhi type pass hua hai wo yaha ayega
    })  //yaha pe alert ek obj hai jo humne set kiya hai

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'; //state and toggle fun app.js me hai isiliye hum aisa kr sakte hai drctly
      showAlert("Dark mode has been enabled", "success"); //showalert fun ko call kiya,msg and type show hoga
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" about='About us'/> */}
      {/* <Navbar/> */}
  <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} About='About us'/>
      <Alert alert={alert}/> {/*alert state hai, alert state pass hogi yaha pe alert equal to ye alert pass krenge.*/}
      <div className="container my-3">
      <Routes>             {/*new upgrade compo switch tha ab v6 version me route use hota hai*/}
        <Route exact path='/About' element={< About />}></Route>   {/*route means path ke according compone render hota hai*/}
        <Route exact path='/' element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}></Route>
      </Routes> 

    {/* <Routes>
      <Route exact path="/About">
       {< About/>}
      </Route>
      <Route path="/">
        {< TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}
      </Route>
    </Routes> */}  {/* V.5 */}

    {/* switch & Route both are used together ..switch ye parent component hai n route ye child compo he
      switch comp ke andr multiple route compo bana sakte hai and each route comp me particular url use krte hai path target url ko match krta hai
      basically switch har ek child component ke path ko target url se match krega nd first match route call hoga */}
      </div>
  </Router>
      </>
  );
}

export default App;

// <Route> is an element that renders some components when a current URL matches the route's path.