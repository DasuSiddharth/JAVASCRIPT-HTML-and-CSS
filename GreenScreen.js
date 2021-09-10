var  fgimage = null;
var bgimage=null;

function upload1()
{
  var imgcanvas=document.getElementById("sid1");
  var fileinput=document.getElementById("fg");
  fgimage =new SimpleImage(fileinput);
  fgimage.drawTo(imgcanvas);
  
  
}
function upload2()
{
  var imgcanvas=document.getElementById("sid2");
  var fileinput=document.getElementById("bg");
  bgimage=new SimpleImage(fileinput);
  bgimage.drawTo(imgcanvas);
  
  }

function composite()
{
  if((fgimage==null) || !fgimage.complete());
  {
    alert("foreground not loaded");
    return;
  }
  if((bgimage==null) || !bgimage.complete());
  {
    alert("background not loaded");
    return;
  }
 var imgcanvas=document.getElementById("sid3");
 
outputimg= new SimpleImage(fgimage.getWidth(), fgimage.getHeight());
for( var pixel of fgimage.values())
{
    if(pixel.getGreen() > pixel.getRed()+pixel.getBlue())
    {
        var x=pixel.getX();
        var y= pixel.getY();
        var bgpixel= bgimage.getPixel(x,y);
        outputimg.setPixel(x,y,bgpixel);
    }
    else{
        outputimg.setPixel(pixel.getX(),pixel.getY(),pixel);
    }
}


  outputimg.drawTo(imgcanvas);
  
}
