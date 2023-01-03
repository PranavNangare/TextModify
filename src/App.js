// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState} from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode is enabled" ,"success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode is enabled" ,"success");
    }
  }
  const [alert, setAlert] = useState('null');

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  
  return (
    <>
    <Router>
      <Navbar title="TextModify" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <div className="container my-3">
      <Routes>
              <Route exact path="/about" element={ <About />}/>
                
              
              <Route exact path="/" element={<TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert}/>}/>
      </Routes>
      </div> 
      </Router>
    </>
  );
}

export default App;
