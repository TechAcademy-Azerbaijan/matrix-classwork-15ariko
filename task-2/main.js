// Use this array for solution
let array = [3, 5, -7, 7, 5, -9, -4]

let arr = [];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  let exist = false;

  for (let j = i + 1; j < array.length; j++) {
    const element1 = array[j];
    if (element == element1) {
      exist = true;
      break;
    }
  }
  if (exist === false) {
    arr.push(array[i]);
  }
}
console.log(arr.length);
