export const imageUpload = async(images) =>{
    // image ka ek array banao 
      let imgArr = []; 
      for(const item of images){
         const formData = new FormData(); // formData = newFormData krna bahut important hai
          formData.append("file",item)
         formData.append("upload_preset", "rku4moho");
         formData.append("cloud_name","ecommerce-website")
  
         const res = await fetch("https://api.cloudinary.com/v1_1/ecommerce-website/upload",{
           method: "POST",
           body: formData
         })
  
         const data = await res.json();
         imgArr.push({public_id: data.public_id, url: data.secure_url});
      }
  
      return imgArr;
  }