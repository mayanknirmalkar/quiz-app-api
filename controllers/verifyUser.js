import asyncHandler from "express-async-handler";


const verifyUser = asyncHandler((req,res) =>{

    res.status(200).json({
        data:req.user,
        message:"user is verified"
    })

})

export default verifyUser;