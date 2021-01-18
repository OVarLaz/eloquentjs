//Chapter 10:
////////////////////////////////////////////////////////////////////////////////////
async function locateScalpel(nest) {
  let source = nest.name; 
  const name = "scalpel";
  while(1){
  	let request = await anyStorage(nest, source, name);
    if (request == source)
      return source;
    source = request;
  }
}

function locateScalpel2(nest) {
  let source = nest.name; 
  const name = "scalpel";
  function getLocateScalpel(source){
    return anyStorage(nest, source, name)
      .then(request => request == source ? source : getLocateScalpel(request));
  }
  return getLocateScalpel(source);
}

locateScalpel(bigOak).then(console.log);
// → Butcher's Shop
locateScalpel2(bigOak).then(console.log);

////////////////////////////////////////////////////////////////////////////////////

function Promise_all(promises) {
  return new Promise((resolve, reject) => {  
    let results = [], tmp = promises.length;
    for (let i = 0; i < tmp; i++) {
      promises[i]
        .then(result => {
          results[i] = result; //sort
          i == tmp-1 && resolve(results);
      	})
        .catch(reject);
    }
    if (tmp == 0) resolve(results); // []
    
  });
}

// Test code.
Promise_all([]).then(array => {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
  .then(array => {
    console.log("We should not get here");
  })
  .catch(error => {
    if (error != "X") {
      console.log("Unexpected failure:", error);
    }
  });


////////////////////////////////////////////////////////////////////////////////////

