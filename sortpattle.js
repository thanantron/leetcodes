start = (list) => {
  var nums = list;
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  console.log(nums);
};

start([19, 5, 6, 1, 9, 0, 4, 6]);
