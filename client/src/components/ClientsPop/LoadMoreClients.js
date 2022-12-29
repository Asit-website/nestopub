import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState'

const LoadMoreClients = () => {
    const state = useContext(GlobalState);
    const [page,setPage] = state.ClientApi.page;
    const [result] = state.ClientApi.result
  return (
    <div className='load'>
        {
            result < page*5 ? "" : <button  onClick={()=>setPage(page+1)}>Load More</button>
        }
    </div>
  )
}

export default LoadMoreClients