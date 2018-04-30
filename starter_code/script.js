window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    // console.log("starting the game");
    createGameBoard();
  }

  function createGameBoard(){
    // console.log("creating the game");
    var theCanvas = document.getElementById("game-board");
    var ctx = theCanvas.getContext("2d");

    ctx.fillStyle = "green";
    ctx.fillRect(0,0,500,600);
    ctx.fillStyle = "grey";
    //            x  y  width height
    //            |  |   |    |
    ctx.fillRect(50, 0, 400, 600);

    ctx.fillStyle = "white";
    ctx.fillRect(60, 0, 10, 600);
    //  (500-50-10-10)  y  width of white line
    //            ^     ^   ^   -------------------->height of white line
    //            |     |   |   |
    ctx.fillRect(430,   0, 10, 600);


    // dashed middle line:
    ctx.lineWidth = "10";
    //      height of the line
    //               |    |---------> empty space between lines
    ctx.setLineDash([40, 20]);
    ctx.strokeStyle = "white";
    // canvas width lineWidth
    //        ^     ^
    //        |     |
    // 245= (500 - 10)/2
    ctx.moveTo(245, 600);
    ctx.lineTo(245, 0);
    ctx.stroke();



  }





};
