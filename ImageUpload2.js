var ogimage
var grayimage;

function upload(){
  var img2canvas=document.getElementById("sid2");
  var imgcanvas= document.getElementById(
"sid");
  var fileinput=document.getElementById("finput");
 ogimage= new SimpleImage(fileinput);
   grayimage= new SimpleImage(fileinput);
grayimage.drawTo(imgcanvas);
 ogimage.drawTo(img2canvas);

}
function makegray()
{
  for (var px of grayimage.values())
    {
      var avg=(px.getRed()+px.getGreen()+px.getBlue())/3;
      px.setRed(avg);
      px.setGreen(avg);
      px.setBlue(avg);
    }
  var imagecan=document.getElementById("sid");
  grayimage.drawTo(imagecan);
}
