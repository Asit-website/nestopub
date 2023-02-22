import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/headers/Header";
import { DataProvider } from "./GlobalState";
import Footer from "./components/mainPages/Footer";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Pages from "./components/mainPages/Pages";
import Header1 from "./components/headers/Header1";
import Alert from "./alert/Alert";
var tc;
function App() {
  const [pop, setPop] = useState(false);
  const [resetPop,setResetPop] = useState(false);
  const [stepPop,setStepPop] = useState(false);
  const [authFlag, setAuthFlag] = useState(false);

  const [claimPop,setClaimPop] = useState(false);
  const [alertValue, setAlertValue] = useState({
    show: false,
    color: "",
    message: ""
 });

 const setAlert = (color, message) => {
  setAlertValue({
     color,
     message,
     show: true
  });

  clearTimeout(tc);
  tc = setTimeout(() => {
     setAlertValue({
        color: '',
        message: '',
        show: false
     });
  }, 3000);
};

const closeAlert = () => {
  clearTimeout(tc);
  setAlertValue({
     color: '',
     message: '',
     show: false
  });
};

  

  return (
    <>
      <DataProvider>
      <Router>
        {authFlag ? <Header1 pop={pop} setPop={setPop} setAlert={setAlert} /> : null}
        { !authFlag ? <Header pop={pop} setPop={setPop} setAlert={setAlert} /> : null }
        {alertValue.show ? <Alert color={alertValue.color} message={alertValue.message} closeAlert={closeAlert} /> : null}
    
        <Pages setAuthFlag={setAuthFlag} pop={pop} setPop={setPop}  resetPop={resetPop}
          setResetPop={setResetPop} stepPop={stepPop} setStepPop={setStepPop}
          claimPop={claimPop} setClaimPop={setClaimPop} setAlert={setAlert}
        />
       <Footer/>
       </Router>
      </DataProvider>
    </>
  );
}

export default App;
