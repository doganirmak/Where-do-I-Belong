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