class Snapshot {
  constructor(array) {
    this.array = [...array];
  }

  restore() {
    return [...this.array];
  }
}

let array = [1, 2];
let snap = new Snapshot(array);
array[0] = 3;
array = snap.restore();
console.log(array.join("-"));
array.push(4);
array = snap.restore();
console.log(array.join("-"));
