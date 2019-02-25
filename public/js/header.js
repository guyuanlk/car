$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/headerFooter/header",
        type:"get",
        dataType:"json",
        success:function(data){
            var p=data[2];
            var html=`<li>
            <img src="${p.img_url}" alt=""><p>车</p>
            <ul>
                <li>量产车</li>
                <li><a href="#"><span>ES6</span></a></li>
                <li><a href="#"><span>ES8</span></a></li>
                <li><a href="#"><span>EP9</span></a></li>
                <li>概念车</li>
                <li><a href="#"><span>EVE</span></a></li>
            </ul>
        </li>
        <li>
            <img src="${p.img_url}" alt=""><p>服务</p>
            <ul>
                <li><a href="#"><span>NIO House</span></a></li>
                <li><a href="#"><span>NIO Power</span></a></li>
                <li><a href="#"><span>NIO Service</span></a></li>
            </ul>
        </li>
        <li><a href="#"><span>Nio Life</span></a></li>
        <li><a href="#"><span>电动方程式</span></a></li>
        <li>
            <img src="${p.img_url}" alt=""><p>蔚来</p>
            <ul>
                <li><a href="#"><span>新闻</span></a></li>
                <li><a href="#"><span>关于蔚来</span></a></li>
                <li><a href="#"><span>加入我们</span></a></li>
                <li><a href="#"><span>投资者关系</span></a></li>
            </ul>
        </li> `;
        var div=document.querySelector("#html");
        
        }
    })
})
