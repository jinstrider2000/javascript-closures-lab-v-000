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

  return {addBump, getBumps}

}
