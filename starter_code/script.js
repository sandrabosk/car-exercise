window.onload = function() {

  function interval(){
    setInterval(updateCanvas, 100);
  }


  document.getElementById("start-button").onclick = function() {
    interval(); 
    startGame();
  };

  function startGame() {
    // console.log("starting the game");
    createGameBoard();
    drawCar();
  }

  var theCanvas = document.getElementById("game-board");
  var ctx = theCanvas.getContext("2d");

  function createGameBoard(){
    // console.log("creating the game");

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
    // score:
    ctx.font = "50px Helevetica";
    ctx.fillStyle = "pink";
    //                   score x   y 
    ctx.fillText("Score: "+ board.score, 0, 50 );
  }


  var carImage = new Image();
  carImage.src = "images/car.png";

  var car = {
    width: 50,
    height: 80,
    // 220 = (245- (50/2))
    x:220,
    // 520 = canvas.height(600) - car.height(80)
    y: 520,
    moveLeft: function(){
      // console.log("x before: ", this.x)
      if(this.x > 60){
        this.x -=10;
      }
      // console.log("x after: ", this.x)
    },
    moveRight: function(){
      if(this.x < 400){
        this.x +=10
      }
    }
  }

  function drawCar(){
      ctx.drawImage(carImage, car.x, car.y, car.width, car.height);
  }

  var myObstacles = [];
  var board = {
    score: 0,
    frames: 0
  }

  document.onkeydown = function(e){
    if(e.keyCode === 37){
      car.moveLeft();
    } else if(e.keyCode === 39){
      car.moveRight();
    } else {
      console.log("What are you doing?")
    }

    createGameBoard();
    drawCar();
    for(var i = 0; i < myObstacles.length; i++){
      myObstacles[i].createObstacle();
      myObstacles[i].y +=10;
    }
  }

  function Obstacle(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.createObstacle = function(){
      ctx.fillStyle = "yellow";
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }

  }

  function updateCanvas(){
    ctx.clearRect(0, 0, 500, 600);
    createGameBoard();
    drawCar();
    board.frames ++;
    // give me a new obstacle every 60 frames and start now
    // if this was equal to 0, we would have to wait 60 frames to see
    // our first obstacle
    if (board.frames % 60 === 1){
      obstacleX = 60 + Math.floor(Math.random() * 300);
      obstacleY = 0;
      obstacleWidth = 100;
      obstacleHeight = 20;
      myObstacles.push(new Obstacle(obstacleX, obstacleY, obstacleWidth, obstacleHeight));  
    }
   
    for(var i = 0; i < myObstacles.length; i++){
      // console.log(myObstacles)
      myObstacles[i].createObstacle();
      myObstacles[i].y += 10;
    }

    if(myObstacles[i].y > 600){
      myObstacles.splice(i, 1);
      board.score++;
    }


  }







 






};
