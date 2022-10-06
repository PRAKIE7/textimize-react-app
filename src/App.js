// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';



function App() {
  const[mode, setMode] = useState('light');
  function Togglemode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#000440';
      showAlert("DarkMode has been Enabled", 'success')
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("LightMode has been Enabled", 'success')
    }
  }

  const[alert, setAlert] = useState(null)
  function showAlert(message, type){
      setAlert({
          message: message,
          type: type    
      })
      setTimeout(() => {
        setAlert(null)
      }, 1700);
  }
  return (
    <>
      <Navbar title="TEXTIMIZE" aboutSection="About us" mode={mode} Togglemode={Togglemode}/>
      <Alert alert={alert}></Alert>
      <div className="container my-3"> 
        <Textform showAlert={showAlert} text="Enter Text to Analyze" mode={mode}/>
      </div>
    </>

  );
}

export default App;
