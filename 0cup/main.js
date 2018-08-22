//导航栏固定
window.onscroll = function() {
    var sy=window.scrollY
    nav.style.top = sy + "px";
    if (sy > 100) { document.getElementById("logo").style.height = "75px"; document.getElementById("toplink").style.height = "75px"; }
    else { document.getElementById("logo").style.height = 200 - 1.25*sy + "px"; document.getElementById("toplink").style.height = 150 - 0.75*sy + "px"; }
} 
//中英文切换
function eng()
{
    whu.innerText = "WELCOME TO WUHAN UNIVERSITY";
    whu.style.fontSize = "20px";
}
function chn() {
    whu.innerText = "武汉大学迎新网";
    whu.style.fontSize = "25px";
}
//搜索框
function search()
{
    wd.value="site:whu.edu.cn "+wd.value;
    form.submit();
    wd.value="";
}


//幻灯片
var i=0,j = -1;
var changeppt=setInterval("change();", 6000);
change();
function change()
{
    j+=1;j%=6;
    document.getElementById("ppt" + i).style.zIndex = 0;
    document.getElementById("ppt" + i).style.opacity = 0;
    document.getElementById("icon" + i).style.zoom = 1;
    document.getElementById("ppt" + j).style.zIndex = 1;
    document.getElementById("ppt" + j).style.opacity = 1;
    document.getElementById("icon" + j).style.zoom = 0.95;
    i = j;
}
function skip(x)
{
    changeppt = clearInterval(changeppt);
    j = x-1;
    changeppt = setInterval("change();", 6000);
    change();
}


//移动黑板
var preventmove = 1;
function moveboard()
{
    if(preventmove){
        var divx;
        divx = parseFloat(div1.style.left);
        if (divx < 25) div1.style.left="50%";
        else div1.style.left = "0";
    }
}
