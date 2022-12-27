import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className="broker-home11">
                <div className="broker-home111 mb-8">
                    <div className="broker-home-btn0 flex items-center cursor-pointer">
                        <div className="broker-add">
                            +
                        </div>
                        <p>Add New Client</p>
                    </div>
                </div>
                <div className="broker-home111 broker-home111a mb-7 cursor-pointer">
                    <div className="flex">
                        <img src="/static/images/grid_view.png" alt="" />
                        <p className='ml-4'>DashBoard</p>
                        
                    </div>
                </div>
                <div className="broker-home111 broker-home111a mb-7 cursor-pointer">
                    <div className="flex">
                        <img src="/static/images/Path11488.png" alt="" />
                        <Link  to="/brokerProperty"><p className='ml-4'>Properties</p></Link>
                    </div>
                </div>
                <div className="broker-home111 broker-home111a mb-7 cursor-pointer">
                    <div className="flex">
                        <img src="/static/images/Group19843.png" alt="" />
                        <p className='ml-4'>Customer Management</p>
                    </div>
                </div>
                <div className="broker-home111 broker-home111a mb-7 cursor-pointer">
                    <div className="flex">
                        <img src="/static/images/Path11515.png" alt="" />
                        <p className='ml-4'>Visit Management</p>
                    </div>
                </div>
                <div className="broker-home111 broker-home111a mb-7 cursor-pointer">
                    <div className="flex">
                        <img src="/static/images/Path11546.png" alt="" />
                        <p className='ml-4'>Payment History</p>
                    </div>
                </div>
                <div className="broker-home111 broker-home111a mb-7 cursor-pointer">
                    <div className="flex">
                        <img src="/static/images/Group19872.png" alt="" />
                        <p className='ml-4'>Raise request for Loan support</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;
