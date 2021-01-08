//Chapter 3:
//////////////////////////////////////////
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

function reverseArray(array)
{
  let newArray = [];
  for(let i=array.length-1; i>=0; i--)
    newArray.push(array[i]);
  return newArray;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) // takes the middle like a base
  { 
    let old = array[i]; // temp variable first
    array[i] = array[array.length - 1 - i]; //switch first by last
    array[array.length - 1 - i] = old; // switch last by temp, so first
  }
  return array; // is necessary return the input parameter
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


//////////////////////////////////////////



