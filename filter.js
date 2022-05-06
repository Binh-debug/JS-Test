let filterNumberFromArray = (arr) => {
  let index = arr.length - 1;
  while (index >= 0) {
    if (typeof arr[index] !== "number") {
      arr.splice(index, 1);
    }
    index--;
  }
};
let arr = [1, "a", "b", 2, true, [1, 2]];
filterNumberFromArray(arr);
console.log(arr);
