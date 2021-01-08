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



//////////////////////////////////////////

