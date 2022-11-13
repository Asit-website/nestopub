import React from 'react'
import LoginSteeperPop from './LoginSteeperPop'
const ResetPassword = ({setResetPop,stepPop,setStepPop}) => {
  return (
    <>
    <div className='Reset-pop'>
          <i onClick={() => setResetPop(false)} className="fa-solid fa-xmark"></i>
          <div className="popups-container">
            <h2 className='reset-heading'>Reset password</h2>
            <p className='reset-para'>Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual.</p>
            <div className="reset-input">
                <input required type="text" placeholder='Mobile Number' />
                <div className="btn-popsa">
                <button onClick={() => setStepPop(true)} className='reset-button-log'>Send</button>
                </div>
            </div>
        </div>
    </div>
    {
      stepPop && <LoginSteeperPop setStepPop={setStepPop}/>
    }
    </>
  )
}

export default ResetPassword