import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'

const LoadMoreBroker = () => {
    const state = useContext(GlobalState);
    const [page,setPage] = state.IndividualApi.page;
    const [result] = state.IndividualApi.result;
  return (
    <div className='load'>
        {
            result < page*4 ? "" : <button  onClick={()=>setPage(page+1)}>Load More</button>
        }
    </div>
  )
}

export default LoadMoreBroker