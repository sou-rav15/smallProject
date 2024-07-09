const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(errr))
    }
}

    export {asyncHandler}

// const asyncHandler=()=>{}
// const asyncHandler=(func)=>{asynch()=>{}}
    // const asyncHandler=(fun)=>async(req, res,next)=>{
    //     try {
    //         await fun(req,res, next)
    //     } catch (error) {
    //         res.status(err.code||500).json({
    //             succes:flag,
    //             message: err.message
    //         })
    //     }
    //}