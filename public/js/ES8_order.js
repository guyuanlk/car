$(".my-header").load("header.html");
$(".my-footer").load("footer.html");
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
//封装省级城市和城市点击隐藏显示
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
//封装省份的点击事件
function pil(i){
    //查询城市
    var div=document.querySelector("#city1");
    div.innerHTML="";
     var ci=document.getElementById("city");
     ci.innerHTML="用车城市";
     //根据省份查询城市
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
    $("#Provincial").removeClass("ui-select-title-img2").addClass("ui-select-title-img");
    
}
//封装城市的点击事件
function city(n){
    var c=$(`#${n}`).html();
    $("#city").text(c);
    $("#city1").css("display","none");
    $("#city").removeClass("ui-select-title-img2").addClass("ui-select-title-img");
}
//封装验证弹窗
function PopUps(n){
    var pop=document.getElementById("Pop-ups")
        pop.innerHTML=n
        pop.style.cssText="display:block;"
    setTimeout(function(){
        pop.style.cssText="display:none;"
    },2000)
    
}
//点击提交按钮验证并提交
$("#btnn").click(function(){
    var name=$("#name").val();
    var phone=$("#phone").val();
    var sms_code=$("#sms_code").val();
    var Provincial=$("#Provincial").html();
    var city=$("#city").html();
    var phone_reg=/^1[34578]\d{9}$/;
    var sms_code_reg=/^\d{6}$/;
    if(!name){
        var n="请输入您的完整姓名。";
        PopUps(n);
    }else if(!phone){
        n="请输入您的手机号码";
        PopUps(n);
    }else if(!(phone_reg.test(phone))){
        n="您输入的手机号码有误，请重新输入"
        PopUps(n);
    }else if(!sms_code){
        n="请输入验证码";
        PopUps(n);
    }else if(!sms_code_reg.test(sms_code)){
        n="验证码输入有误，请重新输入";
        PopUps(n);
    }else if(Provincial=="用车省份"){
        n="请选择用车省份";
        PopUps(n);
    }else if(city=="用车城市"){
        n="请选择用车城市";
        PopUps(n);
    }else{
        //发送提交请求
        $(function(){
            $.ajax({
                url:`http://127.0.0.1:3000/ES8_order/submit?es8_name=${name}&es8_phone=${phone}&es8_Provincial=${Provincial}&es8_city=${city}`,
                type:"get",
                dataType:"json",
                success:function(data){
                   n=data.msg;
                    PopUps(n);
                    setTimeout(function(){
                        window.location.reload();
                    },2000);
                }
            })
        })
    }
})
