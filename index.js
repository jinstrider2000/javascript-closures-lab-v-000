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

sharkCreator = createAnimal.bind(null,'Shark');
sharkWithFrickinLaserbeam = sharkCreator()('Laserbeam');
sharkWithFrickinCannon = sharkCreator()('Cannon');
