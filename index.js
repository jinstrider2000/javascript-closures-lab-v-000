const app = "I don't do much."

function bumpCounter()
{
  let counter = 0;

  function addBump()
  {
    return counter++;
  }

  function getBumps()
  {
    return counter;
  }

  return {addBump, getBumps};

}

function createAnimal(animalType)
{
  return (deadlyDevice) => {return {animalType, deadlyDevice};}
}

var sharkCreator = createAnimal.bind(null,'Shark');
var sharkWithFrickinLaserbeam = sharkCreator()('Laserbeam');
var sharkWithFrickinCannon = sharkCreator()('Cannon');
