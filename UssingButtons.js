function dochange()
{
  alert('Rainbow activated')
}
function myconform()
{
  
  var text=confirm("end world???!!!")
  if(text==1)
    {
      text="lol, you psychopath";
    }
  else{
    text="lost opportunity bitch";
  }
  document.getElementById("demo").innerHTML = text;
}
