function changecolor()
{
  var dd1=document.getElementById("div1");
  var dd2=document.getElementById("div2");
  dd1.className="purpleback";
  dd2.className="pinkback";
}
function makebox()
{
  var dd1 =document.getElementById("div1");
  //var dd2=document.getElementById("div2");
  //dd1.style.backgroundColor="white";
  var ctx = dd1.getContext("2d");
 
ctx.fillStyle="aqua";
  ctx.fillRect(10 ,10, 40, 40);
}
