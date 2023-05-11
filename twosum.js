var twoSum = function (nums, target) {
  var outputList = [];
  var loop = true;
  var i = 0;
  while (loop && i < nums.length) {
    for (j = i; j < nums.length; j++) {
      if (i < j && nums[i] + nums[j] == target) {
        outputList.push(i, j);
        loop = false;
        break;
      }
    }
    i++;
  }
  return outputList;
};

console.log(twoSum([0, 4, 3, 0], 0));
