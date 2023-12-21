const errorHandler = (err,req,res,next) =>{
    
    if(err.name === "ZodError" || err.name ==="ValidationError"){
        res.status(err.statusCode || 411).json({
            message:"Please enter valid inputs"
        })
    }
    
    console.log(`CustomHandler => ${err.name} ${err.statusCode} ${err.message}`)
    res.status(err.statusCode || 500).json({
        name:err.name,
        message:err.message
    })
}

export default errorHandler;