//Chapter 2:
//////////////////////////////////////////
let value = '';
for(let i = 0; i < 7; i++)
{
  value += '#';
  console.log(value);
}
//////////////////////////////////////////
const endNumber = 100;
for(let i = 1; i <= endNumber; i++)
{
  if (i % 5 == 0 && i % 3 == 0)
    console.log('FizzBuzz');
  else if(i % 3 == 0)
    console.log('Fizz');
  else if (i % 5 == 0 )
    console.log('Buzz');
  else
    console.log(i)
}
//////////////////////////////////////////
const size = 8;
for(let i = 0; i < size; i++)
{
  let value = '';
  for(let j = 0; j < size; j++)
  {
    if (i % 2 == 0 && j % 2 == 0)
    	value += ' ';
    else if (i % 2 != 0 && j % 2 != 0)
    	value += ' ';
    else
      value += '#';
  } 
  console.log(value);
} 