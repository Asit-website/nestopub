import React from 'react'
const ClientsItem = ({client}) => {
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
                                        </div>
                                    </div>
                                    
    </>
  )
}

export default ClientsItem