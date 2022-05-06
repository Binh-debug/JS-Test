let findShortest = (vectors) => {
  let arrayObject = [];

  let total = [];
  for (let i = 0; i < vectors.length; i++) {
    let sum = vectors[i].reduce((accumulator, element) => {
      return (accumulator += Math.pow(element, 2));
    }, 0);
    total = [...total, sum];
    arrayObject = [
      ...arrayObject,
      {
        vector: vectors[i],
        total: sum,
      },
    ];
  }

  let minValue = Math.min(...total);

  let arrayObjectMin = arrayObject.filter((vector) => {
    return vector.total === minValue;
  });

  let random = Math.floor(Math.random() * arrayObjectMin.length);
  let result = arrayObjectMin[random].vector;
  console.log(result);
};
let vectors = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
];

findShortest(vectors);
