const errorMiddlewareSecond = ((req,res,next)=>{
  res.status(404).json({
    success:false,  
    message:"The url is not found.Please check the route and try again"
  })
})

export default errorMiddlewareSecond; 