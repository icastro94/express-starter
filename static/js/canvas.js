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
 	context.strokeStyle = 'green'
  context.strokeRect(50, 100, 75, 25)
 });

 $('#p7').click(function() {
  context.fillStyle = 'red'
  context.beginPath()
    context.arc(80, 300, 40, Math.PI, -Math.PI);
  context.closePath()
  context.fill();
 });

 $('#p8').click(function() {
  context.fillStyle = 'yellow'
  context.strokeStyle = 'blue'
  context.strokeRect(300, 150, 40, 40)
  context.fillRect(300, 150, 40, 40)
 });
 
 $('#p9').click(function() {
  context.strokeStyle = 'black'
  for ( var i=1; i<6; i++) {
    context.strokeRect(100 + i * 50, 400, 50, 50)
  }
 });

 $('#p10').click(function() {
  context.strokeStyle = 'black'
  for (var i=1; i<101; i++) {
    context.strokeRect(-5 + i * 5, 470, 5, 5)
  }
 });
  //Write your code for p1-p12 here
  //

});
