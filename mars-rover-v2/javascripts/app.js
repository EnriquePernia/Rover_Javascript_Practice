// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog:[0,0],
  prohibido:[]//Variable que contiene las direcciones en las que no se puede mover el rover
}
// ======================
function turnLeft() {
  switch (rover.direction){
    case "N":
      rover.direction="W";
      break;
    case "S":
      rover.direction="E";
      break;
    case "E":
      rover.direction="N";
      break;
    case "W":
      rover.direction="S";
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
      break;
    case "S":
      rover.direction="W";
      break;
    case "E":
      rover.direction="S";
      break;
    case "W":
      rover.direction="N";
      break;
    default:
      console.log("Error, direccion erronea")
  }
  console.log("turnRight was called facing:"+rover.direction+" x:"+rover.x+" y:"+rover.y);
}

function moveForward() {
  switch (rover.direction){
    case "N":
      rover.y-=1;
      break;
    case "S":
      rover.y+=1;
      break;
    case "E":
      rover.x+=1;
      break;
    case "W":
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
          if(contains(rover.prohibido,rover.direction)!=null){
           console.log("direccion prohibida");
           break;
          }
          moveForward(rover);
       break;
       case "r":
         turnRight(rover);
         if(contains(rover.prohibido,rover.direction)!=null){
           console.log("direccion prohibida");
           break;
          }
          moveForward(rover);
       break;
       case "l":
          turnLeft(rover);
          if(contains(rover.prohibido,rover.direction)!=null){
            console.log("direccion prohibida");
            break;
         }
         moveForward(rover);
       break;
       default:
          console.log("Error, string no valido");
     }
     rover.travelLog.push(rover.x);
     rover.travelLog.push(rover.y);
     outOfTheGrid();
    } 
    console.log(rover.travelLog);
  }
 



function outOfTheGrid(){//Si el rover se encuentra en el limite, se manda un aviso
  var nProhibido=contains(rover.prohibido,"N");
  var sProhibido=contains(rover.prohibido,"S");
  var eProhibido=contains(rover.prohibido,"E");
  var wProhibido=contains(rover.prohibido,"W");
  switch(rover.x){
    case 10:
      if(eProhibido!=null){
      break;
      }
      rover.prohibido.push("E");
    break;
    case -10:
      if(wProhibido!=null){
       break;
      }
      rover.prohibido.push("W");
    break;
    default:
    if(eProhibido==null && wProhibido==null){
      break;
     }
     else if(eProhibido!=null){
     prohibido.splice(eProhibido,1);
      break;
     }
     else if(wProhibido!=null){
      prohibido.splice(wProhibido,1);
       break;
      }
  }
  switch(rover.y){
    case -10:
      if(nProhibido!=null){
      break;
      }
      rover.prohibido.push("N");
    break;
    case 10:
      if(sProhibido!=null){
      break;
      }
      rover.prohibido.push("S");
    break;
    default:
    if(nProhibido==null && sProhibido==null){
      break;
     }
     else if(nProhibido!=null){
     prohibido.splice(nProhibido,1);
      break;
     }
     else if(sProhibido!=null){
      prohibido.splice(sProhibido,1);
       break;
      }
  }
}

function contains(array,direccion){//Comprobamos si la direccion esta en un array
  for(var j=0;j<array.length;j+=1){
    if(array[j]==direccion){
      return j;
    }
  }
  return null;
}