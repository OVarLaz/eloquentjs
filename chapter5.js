//Chapter 5:
//////////////////////////////////////////
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.

console.log(arrays.reduce((n,m) => n.concat(m)))
// → [1, 2, 3, 4, 5, 6]

//////////////////////////////////////////

function loop(val,test,update,action)
{
  if(!test(val)) return false;
  action(val);
  loop(update(val),test,update,action)
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1


//////////////////////////////////////////

function every(array, test) {
  for(val of array)
    if(!test(val)) return false;
  return true;
}
console.log(([2, 4, 16].map( n => n < 10)).reduce((n,m) => n===m));
//no works with empty array

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

//////////////////////////////////////////

