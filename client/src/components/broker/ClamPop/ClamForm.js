import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'

const ClamForm = () => {
    const state = useContext(GlobalState);
    const [clientLog] = state.ClientApi.clientLog;
  return (
     <>
          <div className="wrapper">
        <div className="shadow">
           <h2>Claim</h2>
        </div>

        <div className="hr">
          <hr className="small-hr" />
          <hr className="step-hr" />
        </div>
        <form>
          <div id="myForm"  className="dance">
            <div className="form form-steps">
              <div className="top-forms">
                <div className="top-form">
                  <div className="inner-form int-form2">
                    <input
                      type="text"
                      placeholder="Input Property ID/Project Name"
                     
                    />
                  </div>
                  <div className="inner-form int-form2">
                    {/* <input
                      type="text"
                      placeholder="Customer Name"
                     
                    /> */}
                    <select name="" id="">
                        <option value="">Customer Name</option>
                        {
                            clientLog.map(value=>{
                                return (
                                    <option key={value._id} value="">{value.BuyName}</option>
                                )
                            })
                        }
                    </select>
                  </div>
                </div>
                <div className="top-form">
                  <div className="inner-form int-form2">
                    <input
                      type="text"
                      placeholder="Sale Value"
                    />
                  </div>
                  <div className="inner-form int-form2">
                    <input
                      type="text"
                      placeholder="Unit No"
                    />
                  </div>
                </div>
                <div className="top-form">
                  <div className="inner-form int-form2">
                    <input
                      type="text"
                      placeholder="Application Number"
                    />
                  </div>

                  <div className="inner-form int-form2">
                    <input
                      type="file"
                      placeholder="Application Number"
                    />
                    <p className='upload-sign'>Upload the Property signed form - Builder + Customer</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <button className="Client-btn">Claim</button>
        </form>
      </div>
     </>
  )
}

export default ClamForm