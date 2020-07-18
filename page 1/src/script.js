

function startGame() {
    myGamePiece = new component(30, 30, "#ffca28", 10, 120);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 400;
        this.canvas.height = 200;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
      stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();    
    myGamePiece.update();
}

function moveup() {
 var x= document.getElementById("write").innerHTML+" , up";
  document.getElementById("write").innerHTML =x;  
    myGamePiece.speedY = -1; 
}

function movedown() {
 var x= document.getElementById("write").innerHTML+" , down";
  document.getElementById("write").innerHTML =x;  
    myGamePiece.speedY = 1; 
}

function moveleft() {
 var x= document.getElementById("write").innerHTML+" , left";
  document.getElementById("write").innerHTML =x;  
    myGamePiece.speedX = -1; 
}

function moveright() {
  var x= document.getElementById("write").innerHTML+" , right";
  document.getElementById("write").innerHTML =x;    
  myGamePiece.speedX = 1; 
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}
function clearmove() {
   var x= document.getElementById("write").innerHTML+" , stop";
  document.getElementById("write").innerHTML =x;  
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}