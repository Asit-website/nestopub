import React,{useState,useEffect} from 'react';
import car from '../../images/Car.png'
import bathtub from '../../images/Bathtub.png'
import zoomout from '../../images/ArrowsOut.png'
import share from '../../images/ShareNetwork.png'
import wishlist from '../../images/Heart.png'
import axios from 'axios';
import ShareModal from '../Property/ShareModal'
import { BASE_URL } from '../../utils/config';
import { NavLink } from 'react-router-dom';

const PropertyItem = ({val,token,callback,setCallback,setAlert}) => {
    const [isEdit,setIsEdit] = useState(false);
    const [editData,setEditData] = useState({});

    const [popAdmin,setPopAdmin] = useState(false);
    const [isShare,setIsShare] = useState(false);
    const deleteProperty = async() =>{
        try {
          
            if(window.confirm("do you want to delete this property")){
                const res = await axios.delete(`/api/deleteProperty/${val._id}`,{
                    headers: { Authorization: token },
                 });
    
                 
                    setAlert("error",res.data.msg);
                    setCallback(!callback);
            }
               
        } 
        
        catch (error) {
            setAlert("error",error.response.data.msg);
        }
       
    }


    const [value, setValue] = useState({
        propertyContent: '',
        propertyPrice: '',
        category: '',
        location: '',
        propertyArea: '',
        propertyDescription: '',
        parking: '',
        images: '',
        bedroom: '',
        Guest: '',
        bathRoom: '',
        bhk:''
    });

    useEffect(()=>{
      if(isEdit){
          console.log(editData);
          setValue({
            id:editData._id,
            propertyContent:editData.propertyContent,
            propertyPrice:editData.propertyPrice,
            category:editData.category,
            location:editData.location,
            propertyArea:editData.propertyArea,
            propertyDescription:editData.propertyDescription,
            parking:editData.parking,
            images:editData.images,
            bedroom:editData.bedroom,
            Guest:editData.Guest,
            bathRoom:editData.bathRoom,
            bhk:editData.bhk
          })
      }
    },[editData])

  

    const handleChange = (e) => {
        if (e.target.name === 'images') {
            setValue({ ...value, [e.target.name]: e.target.files });
        }
        else {
            setValue({ ...value, [e.target.name]: e.target.value });
        }
    };

   

    const handleEdit = async() =>{
        if(isEdit){
           try {
               const res = await axios.patch(`/api/editProperty/${val._id}`,{...value},{
                   headers:{Authorization:token}
               })
               setAlert("success",res.data.msg);
               setCallback(!callback);
           } 
           
           catch (error) {
            setAlert("error",error.response.data.msg);
           }
        }
   }


   
    
  return (
     <>
        <div key={val._id} className="first-property">
                                    <div className='similar-properties-card similar2'>
                                    <NavLink to={`/detail/${val._id}`}>
                                            <div className='sp-card-img'>
                                                <img src={val.images[0]} alt="" />
                                            </div>
                                            </NavLink>
                                        <div className='sp-card-detail'>
                                            <p className='sp-card-text'>{val.propertyContent}</p>
                                            <p className='sp-card-price'>&#8377; {val.propertyPrice}</p>
                                            <div className='property-props flex'>
                                                <div className='property-prop flex'>
                                                    <img src={car} />
                                                    <p>{val.parking}</p>
                                                </div>
                                                <div className='property-prop  flex'>
                                                    <img src={bathtub} />
                                                    <p>{val.bathRoom}</p>
                                                </div>
                                                <div className='property-prop  flex'>
                                                    <img src={zoomout} />
                                                    <p>{val.propertyArea} ft</p>
                                                </div>
                                                <i onClick={()=> deleteProperty(val._id)} className="fa-solid fa-trash cursor-pointer"></i>
                                                <i onClick={()=>{
                                                    setPopAdmin(true);
                                                    setIsEdit(true);
                                                    setEditData(val);
                                                }} className="fa-solid fa-pen-to-square cursor-pointer"></i>
                                            </div>
                                            <div className='sp-broker-sec flex'>
                                                <div className='sp-broker-img flex'>
                                                    <img src={JSON.parse(val.user).images.url} />
                                                    <p>{JSON.parse(val.user).name}</p>    
                                                </div>
                                                <div className='sp-actions flex'>
                                                    <div onClick={()=> setIsShare(true)} className='flex action-box cursor-pointer'>
                                                        <img src={share} />
                                                    </div>
                                                    <div className='flex action-box'>
                                                        <img src={wishlist} />
                                                    </div>
                                                    {/* <div className='flex action-box'>
                                                        <img src={addProperty} />
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {
                                     isShare && <ShareModal setIsShare={setIsShare} url = {`${BASE_URL}/detail/${val._id}`}/>
                                }

                                {
            popAdmin && (
                
                <>
                    <div className='home-pop'>
                    <i onClick={() => setPopAdmin(false)} className="fa-solid fa-xmark"></i>
                         <div className="popup-container">
                         <div className="admin-properties px-28 my-5">
                <h4 className='my-4 text-xl'>Edit a Property</h4>
              
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="propertyContent" id="propertyContent" onChange={handleChange} value={value?.propertyContent} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="propertyContent" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Content</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="propertyPrice" id="price" onChange={handleChange} value={value?.propertyPrice} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a category</label>
                        <select name="category" id="category" onChange={handleChange} value={value?.category} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a country</option>
                            <option value="buy">Buy</option>
                            <option value="sell">Sell</option>
                            <option value="rent">Rent</option>
                        </select>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="location" id="location" onChange={handleChange} value={value?.location} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="location" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="propertyArea" id="area" onChange={handleChange} value={value?.propertyArea} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="area" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Area</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="propertyDescription" id="description" onChange={handleChange} value={value?.propertyDescription} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="parking" id="parking" onChange={handleChange} value={value?.parking} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="parking" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Parking</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="file" multiple name="images" id="images" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="images" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Images</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="bedroom" id="bedroom" onChange={handleChange} value={value?.bedroom} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="bedroom" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bedroom</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="Guest" id="guest" onChange={handleChange} value={value?.Guest} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="guest" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Guest</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="bathRoom" id="bathroom" onChange={handleChange} value={value?.bathRoom} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="bathroom" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bathroom</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="bhk" id="bhk" onChange={handleChange} value={value?.bhk} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="bhk" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bhk</label>
                        </div>
                    </div>
                    <button onClick={()=>{
                        handleEdit(val._id);
                        setPopAdmin(false);
                    }} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
               
            </div>
                         </div>
                    </div>
                </>
            )
          }
     </>
  )
}

export default PropertyItem