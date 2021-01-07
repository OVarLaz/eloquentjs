//Chapter 3:
//////////////////////////////////////////
let min = (a,b) => Math.min(a,b);

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//////////////////////////////////////////

function isEven(n) {
  if (n == 0) 
    return true; //is even
  else if (n == 1) 
    return false; // is odd
  else if (n < 0) 
    return isEven(-n); // change to positive recursive action
  else 
    return isEven(n - 2); // recursive action
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-12));
// → false

//////////////////////////////////////////

function countBs(string){
  let count = 0;
for(let i =0; i<string.length; i++) 
    if (string[i] === 'B')
      count++;
  
  return count;
}

function countChar(string, val){
  let count = 0;
for(let i =0; i<string.length; i++)
  if (string[i] === val)
      count++;
    
  return count;
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
