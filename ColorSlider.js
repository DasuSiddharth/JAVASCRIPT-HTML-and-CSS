function changecolor()
{
  var dd1=document.getElementById("div1");
  
  dd1.className="green";
}

function docolor()
{
  var dd1 = document.getElementById("div1");
  var colorinput= document.getElementById("clr");
  var color=colorinput.value;
  dd1.style.backgroundColor= color;
}
function dosquare()
{
  var dd1=document.getElementById("div1");
var sizeinput=document.getElementById("scale");
  var size= sizeinput.value;
  var ctx= dd1.getContext("2d");
  ctx.clearRect(0,0,dd1.width,dd1.height);
  ctx.fillStyle="yellow";
  ctx.fillRect(10,10,size,size)
}
