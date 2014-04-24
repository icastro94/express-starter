$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  var balls = [];
  var b0 = {
    x: 20,
    y: 20,
    r: 10,
    vx: 2,
    vy: 2,
  };
  var b1 = {
    x: 60,
    y: 60,
    r: 15,
    vx: 2,
    vy: 2,
  };
  var b2 = {
    x: 95,
    y: 95,
    r: 12,
    vx: 2,
    vy: 2,
  };
  balls.push(b0);
  balls.push(b1);
  balls.push(b2);
  
  // Run an interation of the game
  var updateGame = function() {
    for(var i = 0; i < balls.length; i++) {
      context.fillStyle = "red";
      context.beginPath()
        context.arc(balls[i].x, balls[i].y, balls[i].r, Math.PI, -Math.PI);
      context.closePath()
      context.fill(); 
    };
  setTimeout(updateGame, 10);
  };


  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
  });

  updateGame();
});
