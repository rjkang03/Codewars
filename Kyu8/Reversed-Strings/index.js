// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    let backwardStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      let currLetter = str[i];
      backwardStr += currLetter;
    }
    return backwardStr;
  }