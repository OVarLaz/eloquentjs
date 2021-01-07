//Chapter 3:
//////////////////////////////////////////
// Your code here.
function range(start, end, step=1)
{
  let list = [], tmp = start;
  /*
  for(let i=start; i<=end; i+=step)
    list.push(i)
   */
  while(tmp !== end+step)
  {
    list.push(tmp);
    tmp += step;
  }
  return list;
}

function sum(list)
{
  let val = 0;
  for(let n of list)
    val += n;
  return val;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

//////////////////////////////////////////



//////////////////////////////////////////



