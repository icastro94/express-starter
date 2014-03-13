$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  //---------------------------------------------------------------------------
 $('#p1').click(function() {
  	context.strokeRect(1, 1, 100, 50);
  });
 $('#p2').click(function() {
 	context.strokeRect(20, 150, 100, 100);
  });
 $('#p3').click(function() {
 	context.beginPath()
 		context.arc(200, 200, 50, 0, Math.PI);
 	context.closePath()
 	context.stroke()
  });
 $('#p4').click(function() {
 	context.beginPath()
 		context.arc(300, 75, 50, Math.PI, -Math.PI);
 	context.closePath()
 	context.stroke()
 });
 $('#p5').click(function() {
 	context.moveTo(300, 300);
 	context.lineTo(250, 250);
 	context.strokeStyle = 'black';
 	context.stroke();
 });
 
 $('#p6').click(function() {
 	context.fillRect(50, 300, 75, 25)
 });
  //Write your code for p1-p12 here
  //

});
