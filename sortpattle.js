start = (list) => {
  var nums = list;
  // for (var i = 0; i < nums.length; i++) {
  //   for (var j = 0; j < nums.length; j++) {
  //     if (nums[i] < nums[j]) {
  //       var temp = nums[i];
  //       nums[i] = nums[j];
  //       nums[j] = temp;
  //     }
  //   }
  // }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        // Swap elements
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  console.log(nums);
};

start([19, 5, 6, 1, 9, 0, 4, 6]);
