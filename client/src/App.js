import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/headers/Header";
import { DataProvider } from "./GlobalState";
import Footer from "./components/mainPages/Footer";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Pages from "./components/mainPages/Pages";
import Header1 from "./components/headers/Header1";
function App() {
  const [pop, setPop] = useState(false);
  const [resetPop,setResetPop] = useState(false);
  const [stepPop,setStepPop] = useState(false);
  const [authFlag, setAuthFlag] = useState(false);

  return (
    <>
      <DataProvider>
      <Router>
        {authFlag ? <Header1 pop={pop} setPop={setPop} /> : null}
        { !authFlag ? <Header pop={pop} setPop={setPop} /> : null }
        <Pages setAuthFlag={setAuthFlag} pop={pop} setPop={setPop}  resetPop={resetPop}
          setResetPop={setResetPop} stepPop={stepPop} setStepPop={setStepPop}
        />
       <Footer/>
       </Router>
      </DataProvider>
    </>
  );
}

export default App;
