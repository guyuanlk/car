const express = require('express');
const bodyParser = require('body-parser');
/*引入路由模块*/
const index=require("./routes/index.route");
const headerFooter=require("./routes/header.footer");
const ES8Order=require("./routes/ES8_order");
var app = express();
var server = app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
//配置跨域
const cors=require("cors");
app.use(cors({
    origin:["http://127.0.0.1:5500",
"http://localhost:5500"],
credentials:true
}))
/*使用路由器来管理路由*/
app.use("/index",index);
app.use("/headerFooter",headerFooter);
app.use("/ES8_order",ES8Order)