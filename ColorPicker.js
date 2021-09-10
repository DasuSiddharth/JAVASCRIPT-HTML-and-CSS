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
