import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { GlobalState } from "../../GlobalState";
const BrokerItem = ({ user, setUser, profilePop, setProfilePop }) => {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [callback, setCallback] = state.BrokerApi.callback;
  const [details, setDetails] = useState({
    firmName: "",
    authorizedName: "",
    city: "",
    mobile: "",
    individualName: "",
    city1: "",
    mobile1: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const DeleteProfile = async (e) => {
    try {
      if (window.confirm("do you want to delete your account")) {
        const res = await axios.delete(`/api/deleteBroker/${user._id}`, {
          headers: { Authorization: token },
        });
        window.location.href="/brokerProfile"
        setCallback(!callback);
        alert(res.data.msg);
      }
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  const updateProfile = async (e) => {
    try {
      const res = await axios.patch(
        `/api/editBroker/${user._id}`,
        { ...details },
        {
          headers: { Authorization: token },
        }
      );
      alert(res.data.msg);
      window.location.href = "/brokerProfile";
      setCallback(!callback);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <div>
      {user.firmName && (
        <>
          <p>{user.firmName}</p>
          <p>{user.authorizedName}</p>
          <p>{user.city}</p>
          <p>{user.mobile}</p>
        </>
      )}
      {user.individualName && (
        <>
          <p>IndividualBrokerName :{user.individualName}</p>
          <p>IndividualBrokerCity :{user.city1}</p>
          <p>IndividualBrokerPhone :{user.mobile1}</p>
        </>
      )}
      <button type="submit" onClick={() => DeleteProfile(user._id)}>
        Delete
      </button>
      <button onClick={() => setProfilePop(true)}>Edit Profile</button>

      {profilePop && (
        <>
          <div className="home-pop">
            <i
              onClick={() => setProfilePop(false)}
              className="fa-solid fa-xmark"
            ></i>
            <div className="popup-container">
              {user.firmName && (
                <>
                  <div className="wrapper">
                  <div className="shadow">
                  <h2>Broker Updation</h2>
                </div>
                    <div id="myForm" className="dance">
                      <div className="form form-steps">
                        <div className="top-forms">
                          <div className="top-form">
                            <div className="inner-form int-form2">
                              <input
                               className="brokerItem"
                                type="text"
                                placeholder="Name of the firm"
                                name="firmName"
                                value={details?.firmName || user.firmName}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="inner-form int-form2">
                              <input
                                className="brokerItem"
                                type="text"
                                placeholder="Name of  Authorized Person"
                                name="authorizedName"
                                value={details?.authorizedName || user.authorizedName}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="top-form">
                            <div className="inner-form int-form2">
                              <input
                                className="brokerItem"
                                type="text"
                                placeholder="city"
                                name="city"
                                value={details?.city || user.city}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="inner-form int-form2">
                              <input
                                className="brokerItem"
                                type="text"
                                placeholder="Mobile No."
                                name="mobile"
                                value={details?.mobile || user.mobile}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {user.individualName && (
                <>
                  <input
                    type="text"
                    placeholder="Name"
                    name="individualName"
                    value={details?.individualName || user.individualName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="City"
                    name="city1"
                    value={details?.city1 || user.city1}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Mobile"
                    name="mobile1"
                    value={details?.mobile1 || user.mobile1}
                    onChange={handleChange}
                  />
                </>
              )}

              <button className="brokerItem-btn" type="submit" onClick={() => updateProfile(user._id)}>
                Update
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BrokerItem;
