const twoSum = (arr, goal) => {
  const memo = {};
  arr.forEach((elem) => {
    if (memo[elem]) {
      memo[elem]++;
    } else {
      memo[elem] = 1;
    }
  });

  for (let i = 0; i < arr.length; i++) {
    for (let key in memo) {
      if (Number(key) !== arr[i] && memo[key] === 1) {
        console.log(arr[i], key, goal);
        if (arr[i] + Number(key) === goal) {
          let idx2 = arr.indexOf(Number(key));
          return [i, idx2];
        }
      }
    }
  }
  return [];
};

module.exports = twoSum;
