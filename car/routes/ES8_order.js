const express=require("express");
const router=express.Router();
const pool=require("../pool");
//查询省份
router.get("/ES8_order",(req,res)=>{
    var sql=`select * from provincial `;
    pool.query(sql,[],(err,result)=>{
        if(err) throw err
        res.send(result);
        res.end();
      })

})
//查询城市
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
//提交
router.get("/submit",(req,res)=>{
  var es8_name=req.query.es8_name;
  var es8_phone=req.query.es8_phone;
  var es8_Provincial=req.query.es8_Provincial;
  var es8_city=req.query.es8_city;
  var sql = "INSERT INTO es8_user VALUES";
     sql+="(null,?,?,?,?)";
  pool.query(sql,[es8_name,es8_phone,es8_Provincial,es8_city],(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"提交成功"});
    }else{
      res.send({code:-1,msg:"提交失败"});
    }
    
  })
})