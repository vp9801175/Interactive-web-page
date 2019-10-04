let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');

let curretlyPlaying = true;

const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let numClosedDoors = 3;

function isBot(door) {
  if(door.src === botDoorPath)
    return true;
  else
    return false;
}

const isClicked = (door)=>  {
  if(door.src === closedDoorPath)
    return false;
  else
    return true;
};

function playDoor(door) {
  numClosedDoors--;
  if(numClosedDoors === 0)
  {
    gameOver();
  }
  else if(isBot(door) === true && numClosedDoors ===2)
    {
      gameOver('win');
    }
    else 
      gameOver();
};

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor === 0)
   { 
     openDoor1=botDoorPath;
     openDoor2=beachDoorPath;
  	 openDoor3=spaceDoorPath;
   }
  else if(choreDoor === 1)
    {
     openDoor1=beachDoorPath;
     openDoor2=botDoorPath;
  	 openDoor3=spaceDoorPath;
    }
  else if(choreDoor === 2)
   { 
     openDoor1=spaceDoorPath;
     openDoor2=beachDoorPath;
     openDoor3=botDoorPath;
   }
};


      doorImage1.onclick = () => {
        if(isClicked(doorImage1) === false && curretlyPlaying === true)
    	{
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
  };


      doorImage2.onclick = () => {
        if(isClicked(doorImage2) === false && curretlyPlaying === true)
      {
      	doorImage2.src = openDoor2;
    	  playDoor(doorImage2);
      }
  };


      doorImage3.onclick = () => {
        if(isClicked(doorImage3) === false && curretlyPlaying === true)
      {
    	  doorImage3.src = openDoor3;
    	  playDoor(doorImage3);
    }
  };

randomChoreDoorGenerator();
function startRound() {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
}

const gameOver = status => {
  if(status === 'win')
    {
      startButton.innerHTML = 'You win! Play again?';
    }
  else
    {
      startButton.innerHTML = 'Game Over! Play again?';
    }
  currentlyPlaying = false;
};
