// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str){
    let strArray = str.split(" ");
    let reversedArray = strArray.reverse();
    let newString = reversedArray.join(" ");
    return newString;;
  }