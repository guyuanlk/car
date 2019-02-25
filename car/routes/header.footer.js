const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/header",(req,res)=>{
    var sql=`select * from header_images `;
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
        res.writeHead(200,{
          "Access-Control-Allow-Origin":"*"
        });
        res.write(JSON.stringify(result))
        res.end();
      })

})
module.exports=router;