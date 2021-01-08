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

function arrayToList(array)
{
  if (array.length == 0)
    return null;
  return {value: array.shift(), rest: arrayToList(array)}; 
}
function listToArray(list)
{
  let array = [];
  for (let node = list; node; node = node.rest) //hint: assign son value
    array.push(node.value)  
  return array;
}
function prepend(val, list)
{
  return {value: val, rest: list};
}
function nth(list, n)
{
  let tmp = 0;
  for (let node = list; node; node = node.rest)
  {    
    if(tmp==n)
      return node.value;
    tmp++;
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

//////////////////////////////////////////

function deepEqual(a, b)
{
  if(a===b)
    return true;
  if((typeof a !== "object") || (typeof b !== "object") || 
     a === null || b === null)
    return false;
  for (let key of Object.keys(a))
    return deepEqual(a[key], b[key])
}

let obj = {here: {is: "an"}, object: 2};
console.log(typeof obj);
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true