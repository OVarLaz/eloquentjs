//Chapter 7:
////////////////////////////////////////////////////////////////////////////////////
function steps(state, robot, memory)
{
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0)
      return turn;
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let total = {r1:0,r2:0, total:100};
  for(let i=0; i<total.total; i++)
  {
    let state = VillageState.random();
    total.r1 += steps(state, robot1, memory1);
    total.r2 += steps(state, robot2, memory2);
  }
  console.log(`
	robot 1 -> ${total.r1/total.total} 
	robot 2 -> ${total.r2/total.total}
`); //avg
}
/*
function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}
*/
compareRobots(routeRobot, [], goalOrientedRobot, []);
// → robot 1 -> 17.76 
// → robot 2 -> 15.04

////////////////////////////////////////////////////////////////////////////////////

function improveGoalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
      //let parcel = parcels[0];
      let routes = parcels.map(parcel => { //get all routes 
        if (parcel.place != place) {
          return {route:findRoute(roadGraph, place, parcel.place),
                  pickUp: true}; //assign a value to determine a condition when if the parcel was pick up
        } else {
          return {route: findRoute(roadGraph, place, parcel.address),
                  pickUp: true};
        }
      });
      function score({route, pickUp}) {
        return (pickUp ? 0.5 : 0) - route.length; // verify the score according to the range value
      }
      route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route; // gets only one route
    }
    return {direction: route[0], memory: route.slice(1)};
  }
  /*
  function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
      let parcel = parcels[0];
      if (parcel.place != place) {
        route = findRoute(roadGraph, place, parcel.place);
      } else {
        route = findRoute(roadGraph, place, parcel.address);
      }
    }
    return {direction: route[0], memory: route.slice(1)};
  }
  */
  compareRobots(improveGoalOrientedRobot, [], goalOrientedRobot, []);
  runRobotAnimation(VillageState.random(), improveGoalOrientedRobot, []);

////////////////////////////////////////////////////////////////////////////////////
class PGroup {
    constructor(array){ //instead of static method from
        this.array = array;
      }
      has(val){
        return this.array.includes(val);
      }
      add(val){
        if(this.has(val))
          return this;
        return new PGroup(this.array.concat([val]));
      }
      delete(val){
        if(!this.has(val))
          return this;
        return new PGroup(this.array.filter(n => n!==val)); //map
      }
    /*
    static empty(){
    return new PGroup([]);
    }
      */
  }
  
  PGroup.empty = new PGroup([]);
  
  let a = PGroup.empty.add("a");
  let ab = a.add("b");
  let b = ab.delete("a");
  
  console.log(b.has("b"));
  // → true
  console.log(a.has("b"));
  // → false
  console.log(b.has("a"));
  // → false

