
import React from 'react';
const ClientsItem = ({ client, editClient }) => {
    return (
        <>
            <div className="broker-home-table flex">
                <div className="broker-home-table1 broker-home-table11 flex items-center">
                    <img className='mr-1.5 tighup' src={client.BuyerImages.url} alt="" />
                    <p>{client.BuyName}</p>
                </div>
                <div className="broker-home-table1 broker-home-table11 flex items-center">
                    <img className='mr-1.5' src="/static/images/Path11489.png" alt="" />
                    <p>{client.BuyerLocation}</p>
                </div>
                <div className="broker-home-table1 broker-home-table11 flex items-center">
                    <img className='mr-1.5' src="/static/images/Path11490.png" alt="" />
                    <p>{client.BuyerBhk}</p>
                </div>
                <div className="broker-home-table1 broker-home-table11 flex items-center">
                    <img className='mr-1.5' src="/static/images/Path11488(1).png" alt="" />
                    <p>{client.BuyerBudget}</p>
                </div>
                <div className="broker-home-table1 flex items-center">
                    <div className="cursor-pointer broker-home-pill flex justify-center items-center ml-4">
                        <img src="/static/images/Vector.png" alt="" />
                    </div>
                    <div className="cursor-pointer broker-home-pill flex justify-center items-center ml-4">
                        <img src="/static/images/Vector(1).png" alt="" />
                    </div>
                    <div className="cursor-pointer broker-home-pill flex justify-center items-center ml-4">
                        <img src="/static/images/Group.png" alt="" />
                    </div>
                    <div onClick={()=>{
                        editClient(client);
                    }} className="cursor-pointer broker-home-pill flex justify-center items-center ml-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ClientsItem