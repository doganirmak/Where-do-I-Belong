function compare(a, b){
    if (a < b){return -1;}
    if (a > b){return 1;}
    if (a === b){return 0;}
  }
  
  function getIndexToIns(arr, num) {
    let sortedArr = arr.slice();
    sortedArr.sort(compare);
    let i = 0;
    for (i; num > sortedArr[i]; i++){
  
    }
    return i;
  }
  
  getIndexToIns([40, 60], 50);

  function mutation(arr) {
    let arr1 = arr[0].toLowerCase();
    let arr2 = arr[1].toLowerCase();
    for (let i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) < 0) {
        return false;
      }
    }
    return true;
  }
  
  mutation(["hello", "hey"]);


  function chunkArrayInGroups(arr, size) {
    let temp = [];
    let result = [];
  
    for (let a = 0; a < arr.length; a++) {
      if (a % size !== size - 1) temp.push(arr[a]);
      else {
        temp.push(arr[a]);
        result.push(temp);
        temp = [];
      }
    }
  
    if (temp.length !== 0) result.push(temp);
    return result;
  }