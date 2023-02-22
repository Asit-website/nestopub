import React,{useContext, useState,useEffect} from 'react';
import { GlobalState } from '../../../GlobalState';
import axios from 'axios';
import AdminMenu from '../AdminMenu';
const AddBuilder = ({setAuthFlag,setAlert}) => {
    useEffect(()=>{
        setAuthFlag(false);
      },[]);
    const state = useContext(GlobalState);
    const [callback,setCallback] = state.BuilderApi.callback;
    const [builderDetails,setBuilderDetails] = useState({
        builderName:"",
        builderPhone:"",
        builderEmail:"",
        role:2
     });

     const [images, setImages] = useState(false);
  
     const handleBuilderInput = (e) =>{
        setBuilderDetails({...builderDetails,[e.target.name]: e.target.value})
     }

     const handleUpload = async (e) => {
      e.preventDefault();
      try {
        const file = e.target.files[0];
        if (!file) return alert("Files doesnt exit");
        if (file.size > 1024 * 1024)
          return alert("size to large")
 
        if (file.type !== 'image/jpeg' && file.type !== 'image/png')
          return alert("File Format is incorrect")
 
        let formData = new FormData();
        formData.append('file', file);
        const res = await axios.post('/api/upload', formData)
        setImages(res.data);
        setAlert("success",res.data.msg);
      }
 
      catch (error) {
         setAlert("error",error.response.data.msg)
      }
    };
 
    const handleDestroy = async () => {
      try {
        await axios.post(
          "/api/destroy",
          { public_id: images.public_id }
        );
        setImages(false);
      } catch (error) {
        setAlert("error",error.response.data.msg);
      }
    };
 
 
    const styleUploads = {
      display: images ? "block" : "none",
    };
 
  
     const handleBuilder = async(e) =>{
          e.preventDefault();
        try {
           let resp = await axios.post("/api/registerBuilder", { ...builderDetails,images });
               localStorage.setItem('nestoBroker', JSON.stringify(resp.data.user));
               localStorage.setItem("firstlogin", true);
               setAlert("success",resp.data.msg);
               setCallback(!callback);
                setBuilderDetails({
                 builderName:"",
                 builderPhone:"",
                 builderEmail:"",
              });
              setImages(false);
        } 
        catch (error) {
          setAlert("error",error.response.data.msg);
        }
     }
  return (
     <>
       <AdminMenu/>
        <div  className="builderRegister mt-4  text-center">
      
        <form onSubmit={handleBuilder}>
           <input type="text" placeholder='name' value={builderDetails.builderName}
           onChange={handleBuilderInput} name="builderName" required />
           <br />
           <input className='mt-3' type="text" placeholder='phone' value={builderDetails.builderPhone}
            onChange={handleBuilderInput} name="builderPhone" required />
             <br />
           <input className='mt-3' type="text" placeholder='email' value={builderDetails.builderEmail}
            onChange={handleBuilderInput} name="builderEmail" required />
            <input hidden placeholder='role'   type="text" value={builderDetails.role} onChange={handleBuilderInput}
            name="role"  />
            <br />
            <input 
            onChange={handleUpload}
            name='file' 
            id='file_up' 
            className='mt-3 volor' 
            type="file" 
            placeholder='upload profile pic'
             />
                  <div  id="file_img1" style={styleUploads} >
                            <img src={images ? images.url : ''} alt="not" />
                            <span onClick={handleDestroy}>X</span>
                          </div>
            <br />
            <br />
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>
        </form>
    </div>
     </>
  )
}

export default AddBuilder