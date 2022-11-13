import React from 'react'
import LoginSteeper from './LoginSteeper'
const LoginSteeperPop = ({setStepPop}) => {
  return (
    <div className='home-pop'>
    <i onClick={()=>setStepPop(false)}  className="fa-solid fa-xmark"></i>
    <div className="popups-container">
      <LoginSteeper/>
    </div>
</div>
  )
}

export default LoginSteeperPop