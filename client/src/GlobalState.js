import React,{createContext} from 'react';
import BrokerApi from './api/BrokerApi';

export const GlobalState = createContext();

export const DataProvider = ({children}) =>{

    const state = {
       BrokerApi:BrokerApi()
    }

    return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
}

