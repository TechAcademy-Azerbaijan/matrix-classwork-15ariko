// Use this matrix for solution

let matrix = [
    [134, 475, 30, 424],
    [303, 151, 419, 235],
    [248, 166, 90, 42],
    [318, 237, 184, 36]
];

let sum_1 = 0;
let sum_2 = 0;
for (let i = 0; i < matrix.length; i++) {
    let element = matrix[i][matrix[i].length - 1] - i;
  let element_1 = matrix[i][i];
  sum_1 += element_1;
  console.log(element);
}
