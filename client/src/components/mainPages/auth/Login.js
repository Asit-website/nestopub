import React from 'react'
// import HomePop from '../home/HomePop';
import handSack from '../../../images/handSack.jpg';
import ResetPassword from './ResetPassword';
const Login = ({resetPop,setResetPop,stepPop,setStepPop}) => {
  return (
    <>
    <div  className='Login'>
        <div className="Login_image">
          <img src={handSack} alt="recta" />
        </div>
        <div className="form-wraper-login">
          <h2>Welcome to Nestohub</h2>
            <form className='firmas'>
                <div className="input-form">
                    <input type="text" placeholder='Name' />
                </div>
                <div className="input-form">
                    <input type="text" placeholder='Email / Phone No.' />
                </div>
                <div className="input-form">
                    <input type="text" placeholder='Password' />
                    <p onClick={() => setResetPop(true)} className='res'>Reset Passward ?</p>
                </div>
                <button>Login</button>
            </form>
        </div>
    </div>
  {
    resetPop && <ResetPassword setResetPop={setResetPop} stepPop={stepPop} setStepPop={setStepPop}/>
  }
    </>
  )
}

export default Login