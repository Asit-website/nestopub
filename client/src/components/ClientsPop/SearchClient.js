import axios from 'axios';
import React,{useContext, useState} from 'react'
import { GlobalState } from '../../GlobalState';
import ClientCard from './ClientCard';

const SearchClient = () => {
    const [search, setSearch] = useState("");  
    const [users, setUsers] = useState([]);
    const state = useContext(GlobalState);
    const [token] = state.token;
    const handleSearch = async(e) =>{
        e.preventDefault();
        if(!search) return;
        try {
            const res = await axios.get(`/api/search?BuyName=${search}`,{
                headers: {Authorization:token}
            });

            setUsers(res.data.client1);
        } 
        
        catch (error) {
            alert(error.response.data.msg);
        }
    }
  return (
    <>
         <form onKeyUp={handleSearch}>
                  <label htmlFor="head2-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input required type="text" id="head2-search" className="block w-full p-4 py-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..."  value={search} 
                     onChange={(e) =>
          setSearch(e.target.value.toLowerCase().replace(/ /g, ""))
        }
                     />
                  </div>
                </form>

                <div className="usercard">
                    {
                        search &&
                        users.map((user1)=>{
                            return (
                                <ClientCard key={user1._id} user1={user1}/>
                            )
                        })
                    }
                </div>
    </>
  )
}

export default SearchClient