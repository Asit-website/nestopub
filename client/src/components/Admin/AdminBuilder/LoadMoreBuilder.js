import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
const LoadMoreBuilder = () => {
    const state = useContext(GlobalState);
    const [page,setPage] = state.BuilderApi.page;
    const [result] = state.BuilderApi.result;
  return (
   <>
     <div className='load'>
        {
            result < page*4 ? "" : <button  onClick={()=>setPage(page+1)}>Load More</button>
        }
    </div>
   </>
  )
}

export default LoadMoreBuilder