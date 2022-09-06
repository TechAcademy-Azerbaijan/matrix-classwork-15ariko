// Use this matrices for solution

let matrix_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]; 

let matrix_2 = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1]
]; 

let sum = 0;
for (let i = 0; i < matrix_2.length; i++) {
  let row = matrix_2[i];
  for (let j = 0; j < row.length; j++) {
    const matrx = matrix_2[i][j];
    if (matrx === 1) {
      sum += matrix_1[i][j];
    }
  }
}
console.log(sum)
