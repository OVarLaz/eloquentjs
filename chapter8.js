//Chapter 8:
////////////////////////////////////////////////////////////////////////////////////
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  const debug = Math.random();
  console.log(debug)
  if (debug < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      console.log(e)
      if (!(e instanceof MultiplicatorUnitFailure)) {// if goes with an error (!) avoid it and continue until its return a good answer
        throw e;
      }
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64

////////////////////////////////////////////////////////////////////////////////////

const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  
    if(!box.locked) // if is unlocked then push and finish or make body action
      return body();
  	box.unlock(); // unlocked
    try {
      return body(); // insert
    } finally {
      //console.log(box.content); 
      box.lock(); // then lock to avoid other entries
    }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
console.log(box.content);
// → true


