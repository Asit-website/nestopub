import axios from 'axios';
import React,{useState,useEffect} from 'react';

const BuilderApi = () => {
    const [builder,setBuilder] = useState();
    const [callback,setCallback] = useState(false);
    const [result,setResult] = useState(0);
    const [page,setPage] = useState(1);
    useEffect(()=>{
       const getBuilder = async() =>{
          const res = await axios.get(`/api/getBuilder?limit=${page*5}`);
          setBuilder(res.data.builder);
          setResult(res.data.result)
       }
       getBuilder();
    },[callback,page])
  return{
     builder:[builder,setBuilder],
     callback:[callback,setCallback],
     page:[page,setPage],
     result:[result,setResult]
  }
}

export default BuilderApi