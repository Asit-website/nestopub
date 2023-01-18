import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState';

const LoadMoreProperty = () => {
  const state = useContext(GlobalState);
  const [page,setPage] = state.page;
  const [result] = state.result;
  return (
  <>
 <div>
    {
      result < page*6 ? "" : <button onClick={()=> setPage(page+1)} className='load_more_prop'>Load more Properties</button>
    }
 </div>
     
  </>
  )
}

export default LoadMoreProperty