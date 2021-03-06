const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Get products"
    })
})

router.post('/', (req, res, next) => {   
    res.status(200).json({
        message: "Post products"
    })
})

router.get('/:productId',(req,res,next)=>{
    const id=req.params.productId;
})

module.exports=router;