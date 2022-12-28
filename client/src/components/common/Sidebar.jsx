import React,{useState} from 'react'
import Clientspop from '../ClientsPop/Clientspop';
import { Link } from 'react-router-dom';
import Help from './Help';

const Sidebar = () => {
    const [popAdd,setPopAdd] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar=()=>{
        document.querySelector('.broker-home11').classList.toggle('sideOpen');
        document.querySelector('.broker-home12').classList.toggle('sideOpen1');
    };

    return (
        <>
             <div className="broker-soc">
            <i onClick={toggleSidebar} className="fa-solid fa-bars"></i>
            </div>
            <div className="broker-home11">
                <div className="broker-home111 mb-8">
                    <div onClick={() => setPopAdd(true)} className="broker-home-btn0 flex items-center cursor-pointer">
                        <div className="broker-add">
                            +
                        </div>
                        <p>Add New Client</p>
                    </div>
                </div>
                <div className="broker-home111 broker-home111a mb-7 cursor-pointer">
                    <div className="flex">
                        <img src="/static/images/grid_view.png" alt="" />
                        <Link to="/brokerProfile"><p className='ml-4'>DashBoard</p></Link>
                    </div>
                </div>
                <div className="broker-home111 broker-home111a mb-7 cursor-pointer">
                    <div className="flex">
                        <img src="/static/images/Path11488.png" alt="" />
                        <Link to="/brokerProperty"><p className='ml-4'>Properties</p></Link>
                    </div>
                </div>
                <div className="broker-home111 broker-home111a mb-7 cursor-pointer">
                    <div className="flex">
                        <img src="/static/images/Group19843.png" alt="" />
                        <Link to="/brokerProfile/customerManagement"><p className='ml-4'>Customer Management</p></Link>
                    </div>
                </div>
                <div className="broker-home111 broker-home111a mb-7 cursor-pointer">
                    <div className="flex">
                        <img src="/static/images/Path11515.png" alt="" />
                        <Link to="/brokerProfile/visitManagement"><p className='ml-4'>Visit Management</p></Link>
                    </div>
                </div>
                <div className="broker-home111 broker-home111a mb-7 cursor-pointer">
                    <div className="flex">
                        <img src="/static/images/Path11546.png" alt="" />
                        <Link to="/brokerProfile/paymentHistory"><p className='ml-4'>Payment History</p></Link>
                    </div>
                </div>
                <div className="broker-home111 broker-home111a mb-7 cursor-pointer">
                    <div className="flex">
                        <img src="/static/images/Group19872.png" alt="" />
                        <p className='ml-4'>Raise request for Loan support</p>
                    </div>
                </div>

                 <Help/>
            </div>
          
            {
               popAdd && <Clientspop setPopAdd={setPopAdd}/>
            }
        </>
    )
}

export default Sidebar;
