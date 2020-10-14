function linearSearch(arr, val) {
  let index =  -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      index = i;
    }
  }
  return index;
}

function linearSearchRecursive(arr, val) {
  if (arr.length === 0) 
  {return -1;
  } else if (arr[0] === val) {
    return 0;
  } else {
    let res = linearSearchRecursive(arr.slice(1), val)
    if (res < 0) {
      return res
    } else {
      return res + 1
    }
  }
}


function bSearch(array, value, l, r) {
if (l > r) return -1;

var midPoint = Math.floor((l + r) / 2);

if (value == array[midPoint])
    return midPoint;

else if (value > array[midPoint])
    return bSearch(array, value, midPoint + 1, r);

else
    return bSearch(array, value, l, midPoint - 1);
}

function binarySearchRecursive(array, value) {
    return bSearch(array, value, 0, array.length);
}

function binarySearch(arr, val) {
  let startPoint = 0;
  let endPoint = arr.length - 1;
  
  while(startPoint <= endPoint) {
  let midPoint = Math.floor((startPoint + endPoint) / 2)
    if(arr[midPoint] === val) {
      return midPoint
    }
    if(val > arr[midPoint]) {
      startPoint = midPoint + 1;
    } 
    if(val < arr[midPoint]) {
      endPoint = midPoint - 1;
    } 
  }
  return -1
}