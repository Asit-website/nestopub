import React from "react";
import BtnRender from "./BtnRender";
const BrokerJi = ({ broker,DeleteProfile,isAdmin,handleCheck}) => {
  return (
    <div>
      <div className="broker-card">
      {
        isAdmin && <input  type="checkbox" checked={broker.checked} onChange={()=>handleCheck(broker._id)} />
      }
      <div>
        {broker.firmName && (
          <>
            <div className="broking-faram">
              <h2>Broking Firm</h2>
              <img src={broker.images.url} alt="" />
              <p>
                <span>FirmName</span>: {broker.firmName}
              </p>
              <p>
                <span>City</span>: {broker.city}
              </p>
              <p>
                <span>AuthorizedName</span>: {broker.authorizedName}
              </p>
              <p>
                <span>Phone Number</span>: {broker.mobile}
              </p>
              {/* <BtnRender broker={broker} DeleteProfile={DeleteProfile}/> */}
            </div>
          </>
        )}
        {broker.individualName && (
          <>
            <div className="individual-broker">
              <h2>Individual Broker</h2>
              <img src={broker.images[0]} alt="" />
              <p>
                {" "}
                <span>Broker Name</span>: {broker.individualName}
              </p>
              <p>
                <span>City</span>: {broker.city1}
              </p>
              <p>
                <span>Phone Number</span>: {broker.mobile1}
              </p>
              
            </div>
          </>
        )}
        <BtnRender broker={broker} DeleteProfile={DeleteProfile}/>
      </div>

      </div>
    </div>
  );
};

export default BrokerJi;
