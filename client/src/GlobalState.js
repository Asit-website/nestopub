import React,{createContext,useEffect,useState} from 'react';
import BrokerApi from './api/BrokerApi';
import IndividualApi from './api/IndividualApi';
import ClientApi from './api/ClientApi';
import axios from "axios";
export const GlobalState = createContext();
export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false);

    useEffect(() => {
        const firstLogin = localStorage.getItem("firstlogin");
        if (firstLogin) {
          const refreshToken = async () => {
            // refreshtoken cookie wala hai
            const res = await axios.get("/api/refresh_token");
            setToken(res.data.accesstoken); // accesstoken ... refresh token ke andar milta hai
    
            setTimeout(() => {
              refreshToken();
            }, 10 * 60 * 1000);
    
          };
          
          refreshToken();
        }
      }, []);
    

    const state = {
       token: [token, setToken],
       BrokerApi:BrokerApi(token),
       IndividualApi:IndividualApi(),
       ClientApi:ClientApi(token)
    }

    return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
}

