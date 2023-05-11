var searchInsert = function (nums, target) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      result = i;
      continue;
    }
    if (target > nums[i] && target < nums[i + 1]) {
      result = i + 1;
      continue;
    }
    if (target >= nums[i] && i >= nums.length - 1) {
      result = i + 1;
      continue;
    }
  }
  return result;
};

console.log(searchInsert([1, 3, 5, 6], 2));
