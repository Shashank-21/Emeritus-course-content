let towerA = { tower: [4, 3, 2, 1], name: "towerA" };
let towerB = { tower: [], name: "towerB" };
let towerC = { tower: [], name: "towerC" };
let towers = { A: towerA, B: towerB, C: towerC };
function moveDisk(source, target) {
  const diskNumber = source.tower.pop();
  target.tower.push(diskNumber);
  console.log(`Move disc ${diskNumber} from ${source.name} to ${target.name}:`);
}
function moveDisks(n, source, target, spare) {
  if (n === 1) {
    // Move the disk from the source to the target
    // Log the towers to the console
    // Return from the function
  }
  // Implement the recursive logic here.
  // First you move n-1 disks from source to the spare, using target as your spare tower

  //Call the moveDisk() function with the source and the target towers

  // Log the towers to the console

  // At last, you move the n-1 disks from the spare to the target using the source as your spare tower
}

//Don’t change anything beyond this point
function hanoi(callback, towers) {
  callback(towers.A.tower.length, towers.A, towers.C, towers.B);
  return towers;
}

hanoi(moveDisks, towers);

module.exports = { moveDisks, hanoi, towers };
