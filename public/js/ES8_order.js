$(".my-header").load("header.html");

//查询省
$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/ES8_order/ES8_order",
        type:"get",
        dataType:"json",
        success:function(data){
            var div=document.querySelector("#Provincial1");
            for(var i=0;i<=data.length-1;i++){
                var html=`<div id="${data[i].pid}" onclick="pil(${data[i].pid})">${data[i].Provincial}</div>`;
                div.innerHTML+=html;
                bnt=data[i].pid;
            }
        }
    })
})
//封装点击隐藏显示
function hide(f1,f2){
    $(f1).click(function(){
        if($(f2).css("display")=="none"){
            $(f2).css("display","block");
            $(f1).removeClass("ui-select-title-img").addClass("ui-select-title-img2");
        }else{
            $(f2).css("display","none");
            $(f1).removeClass("ui-select-title-img2").addClass("ui-select-title-img");
        }
    })
}
hide("#Provincial","#Provincial1");
hide("#city","#city1");
function pil(i){
    //查询城市
    var div=document.querySelector("#city1");
    div.innerHTML="";
     var ci=document.getElementById("city");
     ci.innerHTML="用车城市";
    $(function(){
        $.ajax({
            url:`http://127.0.0.1:3000/ES8_order/order_city?pid=`+i,
            type:"get",
            dataType:"json",
            success:function(data){
                for(var n=0;n<=data.length-1;n++){
                    var html=`<div id="${data[n].cid+100}" onclick="city(${data[n].cid+100})">${data[n].city}</div>`;
                    div.innerHTML+=html;
                }
            }
        })
    })
    var n=$(`#${i}`).html();
    $("#Provincial").text(n);
    $("#Provincial1").css("display","none");
}
function city(n){
    var c=$(`#${n}`).html();
    console.log(c);
    $("#city").text(c);
    $("#city1").css("display","none");
}
$(".my-footer").load("footer.html");
