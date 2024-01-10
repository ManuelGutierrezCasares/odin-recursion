//  Assignment 1
//  A. Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

// Solution A.1: Dynamic Programming Fibonacci
function fibs(number){
  let first = 0;
  let second = 1;
  let third = 0;
  const result = [first, second]

  for(let i = 2;i < number; i++){
    third = first + second;
    first = second;
    second = third;
    result.push(third);
  }
  return result;
}
console.log(fibs(8))
//  Solution A.2: Another solution
// function fibsSta(number){
//   let result = [];
//   for (let i = 0; i < number; i++){
//     if (i === 0) result.push(0);
//     if (i === 1 || i === 2 ) result.push(1);
//     if (i > 2) result.push(result[i-1] + result[i-2]);
//   }
//   return result;
// }
// console.log(fibsSta(8))


//  B. Now write another function fibsRec which solves the same problem recursively.
function fibsRec(number){
  if (number <= 2) return [0, 1];

  const res = fibsRec(number - 1);
  res.push(res[res.length - 1] + res[res.length - 2])

  return res;
}
console.log(fibsRec(8))