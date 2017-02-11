function forLoop(array) {
  for (let i = 0;  i < 25; i++)
      {
        if(i === 1){
          array.push(`I am ${i} strange loop.`);
      }//if for just '1', could be more succinct?
        else{
          array.push(`I am ${i} strange loops.`); //i = 0, and i= 2-25 loop
      }
    }
  return array;
}

function whileLoop(n) {
  while ( n > 0) {
    console.log(--n);
  }
  return "done";
}

function doWhileLoop(array) {

    function maybeTrue() {
      return Math.random() >= 0.5;//50-50 true false
    }

    do {
      array.pop();
      /** should I use destructive or non-destructive?
      Post-Solution: use slice as well
      do {
      array = array.slice(1)
      } while (array.length > 0 && maybeTrue())

      return array**/
    } while (array.length > 0 && maybeTrue());//while array has elements and maybeTrue returns only true

    return array;
}
