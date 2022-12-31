import React, { createContext, useEffect, useState } from 'react';
import BrokerApi from './api/BrokerApi';
import IndividualApi from './api/IndividualApi';
import ClientApi from './api/ClientApi';
import axios from "axios";
export const GlobalState = createContext();
export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstlogin");
    if (firstLogin) {
      const refreshToken = async () => {
        // refreshtoken cookie wala hai
        const res = await axios.get("/api/refresh_token");
        // console.log(res.data.accesstoken);
        setToken(res.data.accesstoken); // accesstoken ... refresh token ke andar milta hai

        setTimeout(() => {
          refreshToken();
        }, 10 * 60 * 1000);

      };

      refreshToken();
    }
  }, []);

  const getVisits = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/getScheduledClients`, {
        method: "GET",
        headers: {
          "Authorization": token
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const postVisit = async (client, date) => {
    try {
      const response = await fetch(`http://localhost:5000/api/postScheduledClients`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify({ client, date })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const editClient = async ({ id, BuyId, BuyName, BuyerMobile, BuyerLocation, BuyerBudget, BuyerBhk, BuyerImages }) => {
    try {
      const response = await fetch(`http://localhost:5000/api/editClient/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify({ BuyId, BuyName, BuyerMobile, BuyerLocation, BuyerBudget, BuyerBhk, BuyerImages })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const state = {
    token: [token, setToken],
    BrokerApi: BrokerApi(token),
    IndividualApi: IndividualApi(),
    ClientApi: ClientApi(token),
    getVisits,
    postVisit,
    editClient
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
