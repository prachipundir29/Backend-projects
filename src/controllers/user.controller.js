import { asyncHandler } from '../utils/asyncHnadler.js';
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.model.js';
import { uploadCloudinary} from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/ApiResponse.js';

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  // validations -not empty
  // check if user already exists:  username, email
  // check for images, check for avtar
  // upload them to cloudinary and get the url
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return res

  const { fullName, email, username, password } = req.body;
  console.log('fullName:', fullName);
  console.log('email:', email);
  console.log('password:', password);

  // if (fullName === "") {
  //     throw new ApiError("fullName is required", 400)
  // }  simple method check for empty string

  // advanced method for check empty string and undefined and null
  if (
    [fullName, email, username, password].some((field) => field?.trim() === '')
  ) {
    throw new ApiError(400, 'All fields are required');
  }

  const existedUser = User.findOne({
    $or: [{ email }, { username }],
  });
  if (existedUser) {
    throw new ApiError(409, 'User already exists with this email or user');
  }

   const avatarLocalPath = req.files?.avatar[0]?.path;
   const coverImageLocalpath = req.files?.coverImage[0]?.path;

   if (!avatarLocalPath) {
     throw new ApiError(400, "Avatar is required")
   }

  const avatar =await uploadCloudinary(avatarLocalPath)
    const coverImage = await uploadCloudinary(coverImageLocalpath)

    
if(!avatar){
       throw new ApiError(400, "Avatar is required")

}

  const user = await User.create({
   fullName,
   avatar: avatar.url,
   coverImage: coverImage?.url || "",
   email,
   password,
   username: username.toLowerCase()
})

   const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
   )

   if(!createdUser){
    throw new ApiError(500, "User not created successfully")
   }

   res.status(201).json(
    new ApiResponse(200, createdUser, "User registered successfully")
   )

});


export { registerUser };
