$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  var numBalls = 8;
  var balls = [];
  for(i = 0; i < numBalls; i++) {
    var b = {
      x: width * Math.random(),
      y: height * Math.random(),
      r: 16,
      vx: (Math.random() * 5) + 1,
      vy: (Math.random() * 5) +1,
   };
   balls.push(b)
  };
    // Run an interation of the game
  var updateGame = function() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    for(var i = 0; i < balls.length; i++) {
      context.fillStyle = "red";
      context.beginPath()
        context.arc(balls[i].x, balls[i].y, balls[i].r, Math.PI, -Math.PI);
      context.closePath()
      context.fill(); 
    if (balls[i].x + .5*balls[i].r > width) {
      balls[i].vx = -balls[i].vx
    } else {};
    
    if (balls[i].x - .5*balls[i].r < 0) {
      balls[i].vx = -balls[i].vx
    } else {};

    if (balls[i].y + .5*balls[i].r > height) {
      balls[i].vy = -balls[i].vy
    } else {};

    if (balls[i].y - .5*balls[i].r < 0) {
      balls[i].vy = -balls[i].vy
    } else {};
   
    balls[i].x = balls[i].x + balls[i].vx;
    balls[i].y = balls[i].y + balls[i].vy;

    };

  requestAnimationFrame(updateGame);
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
