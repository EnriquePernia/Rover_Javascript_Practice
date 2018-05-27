// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog:[0,0]
}
// ======================
function turnLeft() {
  switch (rover.direction){
    case "N":
      rover.direction="W";
      rover.x-=1;
      break;
    case "S":
      rover.direction="E";
      rover.x+=1;
      break;
    case "E":
      rover.direction="N";
      rover.y+1;
      break;
    case "W":
      rover.direction="S";
      rover.y-=1;
      break;
    default:
      console.log("Error, direccion erronea")
  }
   console.log("turnLeft was called, facing: "+rover.direction+" x:"+rover.x+" y:"+rover.y);
}

function turnRight() {
  switch (rover.direction){
    case "N":
      rover.direction="E";
      rover.x+=1;
      break;
    case "S":
      rover.direction="W";
      rover.x-=1;
      break;
    case "E":
      rover.direction="S";
      rover.y-=1;
      break;
    case "W":
      rover.direction="N";
      rover.y+=1;
      break;
    default:
      console.log("Error, direccion erronea")
  }
  console.log("turnRight was called facing:"+rover.direction+" x:"+rover.x+" y:"+rover.y);
}

function moveForward() {
  switch (rover.direction){
    case "N":
      rover.direction="N";
      rover.y+=1;
      break;
    case "S":
      rover.direction="S";
      rover.y-=1;
      break;
    case "E":
      rover.direction="E";
      rover.x+=1;
      break;
    case "W":
      rover.direction="W";
      rover.x-=1;
      break;
    default:
      console.log("Error, direccion erronea")
  }
  console.log("moveForward was called facing:"+rover.direction+" x:"+rover.x+" y:"+rover.y);
}


function moveSequence(string){
  for(i=0;i<string.length;i+=1){
    switch (string[i]){
      case "f":
        moveForward(rover);
      break;
      case "r":
        turnRight(rover);
      break;
      case "l":
        turnLeft(rover);
      break;
      default:
        console.log("Error, string no valido");
    }
    rover.travelLog.push(rover.x);
    rover.travelLog.push(rover.y);
    
  }
  console.log(rover.travelLog);

}