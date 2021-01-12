//Chapter 6:
//////////////////////////////////////////
class Vec{
    constructor(x,y){
      this.x = x;
      this.y = y;
    }
    plus(vec) {
      return new Vec(this.x+vec.x, this.y+vec.y);
    }
    minus(vec) {
      return new Vec(this.x-vec.x, this.y-vec.y);
    }
    get length(){
      return Math.sqrt(this.x**2 + this.y**2)
    }
  }
  
  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  // → Vec{x: 3, y: 5}
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  // → Vec{x: -1, y: -1}
  console.log(new Vec(3, 4).length);
  // → 5

//////////////////////////////////////////
class Group {
    constructor(){
      this.array = [];
    }
    has(val){
      return this.array.includes(val);
    }
    add(val){
      if(!this.has(val))
          return this.array.push(val);
    }
    delete(val){
      this.array = this.array.filter(n => n!==val); //map
    }
    static from(array) {
      let group = new Group;
      for (let val of array) {
        group.add(val);
      }
      return group;
    }
  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false

//////////////////////////////////////////

class Group {
    constructor(){
      this.array = [];
    }
    has(val){
      return this.array.includes(val);
    }
    add(val){
      if(!this.has(val))
          return this.array.push(val);
    }
    delete(val){
      this.array = this.array.filter(n => n!==val); //map
    }
    static from(array) {
      let group = new Group;
      for (let val of array) {
        group.add(val);
      }
      return group;
    }
  [Symbol.iterator]() {
      return new GroupIterator(this);
    }
  }
  
  class GroupIterator {
    constructor(group) {
      this.group = group;
      this.iter = 0; //-1
    }
  
    next() {
      if (this.iter >= this.group.array.length) 
        return {done: true};
      /*
      this.iter++;
      return {value:this.group.array[this.iter], done: false};
      */
     let res = {value: this.group.array[this.iter],
        done: false};
      this.iter++;
      return res;
    }
  }
  
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c

//////////////////////////////////////////

let map = {one: true, two: true, hasOwnProperty: true};
map.hasOwnProperty = function() {
return this.hasOwnProperty}
console.log(Object.hasOwnProperty.call(map,"one")); // use callback action with call
// → true