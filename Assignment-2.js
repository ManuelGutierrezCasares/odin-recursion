//  Assignment 2
//  Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology. An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

function mergeSort (arr){
  let result = [];
  if (arr.length === 1){
    return arr[0];
  }
  let left = mergeSort(arr.slice(0,arr.length/2));
  let right = mergeSort(arr.slice(arr.length/2));

  while(right.length && left.length){
    if (right[0] <= left[0]){
      result.push(right[0]);
      right.shift();
    }else if(right[0] > left[0]){
      result.push(left[0]);
      left.shift();
    }
  }
  let flag = false;
  if(right.length && Number.isInteger(left)){
    while(right.length){
      if(left <= right[0]){
        flag = true;
        result.push(left);
        result = result.concat(right);
        right = [];
      }else if (left > right[0]){
        result.push(right[0]);
        right.shift();
      }
    }
    if (!flag){
      result.push(left);
    }
  }

  if(left.length && Number.isInteger(right)){
    while(left.length){
      if(right <= left[0]){
        flag = true;
        result.push(right);
        result = result.concat(left);
        left = [];
      }else if (right > left[0]){
        result.push(left[0]);
        left.shift();
      }
    }
    if (!flag){
      result.push(left);
    }
  }
  
  if(left.length){
    result = result.concat(left);
  }
  if(right.length){
    result = result.concat(right);
  }

  if (Number.isInteger(left) && Number.isInteger(right)){
    if (left >= right){
      result.push(right,left);
    }else{
      result.push(left,right);
    }
  }

  return result;
}

const test1 = [3, 2, 1, 13, 8, 5, 0, 1];
const test2 = [105, 79, 100, 110];
const test3 = [4, 6, 1, 3, 2];
const test4 = [5, 4, 3, 2, 1];
console.log(mergeSort(test1), mergeSort(test2), mergeSort(test3), mergeSort(test4));
