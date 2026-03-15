import { v2 as cloudinary } from "cloudinary";
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

const uploadCloudinary = async (localFilePath)=>{
   try {
    if (!localFilePath) return null
    // Upload file to Cloudinary
      const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto"
    })
    // file has been uploaded successfully
    console.log("file is uploaded on cloudinary" , response.url);
    return response;
    
   } catch (error) {
    fs.unlinkSync(localFilePath) // remove the locally saved file as the upload operation got failed
    console.log("Error while uploading the file to cloudinary", error);
    return null
    
    
   }
}

export {uploadCloudinary}