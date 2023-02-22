import React from 'react'
import Stepper from './Steeper';
const HomePop = ({setPop,type,setType,setAlert}) => {
  let ty = "popup-id"
  const changeFun = () =>{
      let tyr = document.getElementById(ty);
       setPop(false);
       setType("popup-container");
      tyr.classList.remove("popup-container1");
  }
  
  return (
    <div className='home-pop'>
        <i onClick={changeFun} className="fa-solid fa-xmark"></i>
        <div id={ty} className={type}>
           <Stepper setPop={setPop} ty={ty}  setType={setType} setAlert={setAlert}/>
        </div>
    </div>
  )
}

export default HomePop;