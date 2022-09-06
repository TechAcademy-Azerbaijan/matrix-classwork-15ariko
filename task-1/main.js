// Use this arrays for solution
let array_1 = [3, 1, 3, 4, 2, 4, 12]
let array_2 = [4, 15, 43, 1, 15, 1]

let arr = [];
for (let i = 0; i < array_1.length; i++) {
  const element = array_1[i];
  let exist = false;
  for (let j = 0; j < array_2.length; j++) {
    const element2 = array_2[j];
    if (element == element2) {
      exist = true;
      break;
    }
  }
  if (exist === false) {
    arr.push(element);
  }
}

console.log(arr.join(" "));
