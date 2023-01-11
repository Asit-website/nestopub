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
        localStorage.setItem('nestoToken', res.data.accesstoken);

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

  const editSchedule = async({id,client,date}) =>{
    try {
       const response = await fetch(`http://localhost:5000/api/editSchedule/${id}`,{
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify({client,date})
       });

       const data = await response.json();
       console.log(data);
       return data;
    } 
    
    catch (error) {
       console.log(error);
    }
  };


  const getProperties = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/getProperty`, {
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

  const postProperty = async ({content, price, category, location, area, description, parking, images, bedroom, guest, bathroom}) => {
    try {
      console.log(images);
      let formdata=new FormData();
      formdata.append('propertyContent',content);
      formdata.append('propertyPrice',price);
      formdata.append('category',category);
      formdata.append('location',location);
      formdata.append('propertyArea',area);
      formdata.append('propertyDescription',description);
      formdata.append('parking',parking);
      // formdata.append('images',JSON.stringify(images));
      if(images.length>0)
      {
        for(let i of images)
        {
          formdata.append('images',i);
        }
      }
      // formdata.append('images',images);
      formdata.append('bedroom',bedroom);
      formdata.append('Guest',guest);
      formdata.append('bathRoom',bathroom);

      const response = await fetch(`http://localhost:5000/api/registerProperty`, {
        method: "POST",
        headers: {
          
          "Authorization": token
        },
        body: formdata
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  // Web socket client
  var client;

  const state = {
    token: [token, setToken],
    BrokerApi: BrokerApi(token),
    IndividualApi: IndividualApi(),
    ClientApi: ClientApi(token),
    getVisits,
    postVisit,
    editClient,
    editSchedule,
    client,
    getProperties,
    postProperty
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
