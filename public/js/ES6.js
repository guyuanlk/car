$(".my-header").load("header.html");
$(".my-header2").load("header.1.html");
$(".my-footer").load("footer.html");
/*2f视频 */
var vplay=document.getElementsByClassName("btn-1")[0];
var video=document.getElementsByClassName("v-2f")[0];
var vPsition=document.getElementsByClassName("v-position")[0];
var vClear=document.getElementsByClassName("v-clear")[0];
vplay.onclick=function(){
    vPsition.style.cssText="display:block;";
    video.play();
};
vClear.onclick=function(){
    video.pause();
    vPsition.style.cssText="display:none;";
}
