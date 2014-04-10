$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x+sideLen, y);
    context.lineTo(x+sideLen, y+sideLen);
    context.lineTo(x, y+sideLen);
    context.lineTo(x, y)
    context.strokeStyle = color;
    context.stroke();
  };
  var drawCircle = function(x, y, radius, color) {
    context.beginPath();
      context.arc(x, y, radius, -Math.PI, Math.PI);
    context.closePath();
    context.strokeStyle = color;
    context.stroke();
  };

  var drawTriplet = function(x, y, color) {
    context.beginPath();
      context.arc()
  }
  // Write drawTriplet function here

  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  //---------------------------------------------------------------------------
  $('#p5').click(function() {
    drawSquare(200, 200, 100, 'red');
    drawCircle(250, 250, 50, 'blue');
    drawCircle(200, 250, 50, 'green');
    drawCircle(250, 200, 50, 'green');
    drawCircle(250, 300, 50, 'green');
    drawCircle(300, 250, 50, 'green');
  });
  //Write your code for p5-p11 here
  //

});
