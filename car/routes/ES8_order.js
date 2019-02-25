const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/ES8_order",(req,res)=>{
    var sql=`select * from provincial `;
    pool.query(sql,[],(err,result)=>{
        if(err) throw err
        res.send(result);
        res.end();
      })

})
router.get("/order_city",(req,res)=>{
  var pid=req.query.pid;
  var sql=`select * from city where pid=? ORDER BY cid ASC`;
  pool.query(sql,[pid],(err,result)=>{
    if(err)throw err
    res.send(result);
    res.end();
  })
})
module.exports=router;