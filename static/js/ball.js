$(document).ready(function() {
//initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  //PUT STUFF HERE
  
  var ball = {
    x: 20,
    y: 20,
    r: 20,
    vx: 2,
    vy: 1,
  };
//run an iteration of the game
  var updateGame = function() {
      context.fillStyle = "black";
      context.fillRect(0, 0, width, height);

      context.fillStyle = "red";
      context.beginPath()
       context.arc(ball.x, ball.y, ball.r, Math.PI, -Math.PI);
      context.closePath()
      context.fill();
    
    if (ball.x + .5*ball.r >= width) {
      ball.vx = -ball.vx
    } else {};

    if (ball.x - .5*ball.r <= 0) {
      ball.vx = -ball.vx
    } else {};

    if (ball.y + .5*ball.r >= height) {
      ball.vy = -ball.vy
    } else {};

    if (ball.y - .5*ball.r <= 0) {
      ball.vy = -ball.vy
    } else {};
   
    ball.x = ball.x + ball.vx;
    ball.y = ball.y + ball.vy;
  setTimeout(updateGame, 10);
  
  };
  updateGame();
});
