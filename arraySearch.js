let numberOfItems = (arr, item) => {
  let count = 0;
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      count += numberOfItems(element, item);
    } else if (element === item) {
      count++;
    }
  });
  return count;
};

let arr = [
  25,
  "apple",
  ["banana", "strawberry", "apple", 25, 25],
  ["banana", "banana", "banana"],
];

console.log(numberOfItems(arr, 25));
console.log(numberOfItems(arr, "apple"));
console.log(numberOfItems(arr, "banana"));
