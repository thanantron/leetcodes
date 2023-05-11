var maxUncrossedLines = function (nums1, nums2) {
  //   let point1 = -1;
  //   let point2 = -1;
  //   let output = 0;

  //   for (let i = 0; i < nums1.length; i++) {
  //     for (let j = 0; j < nums2.length; j++) {
  //       if (nums1[i] == nums2[j] && i != point1 && j >= i) {
  //         point1 = i;
  //         point2 = j;
  //         console.log(i, j);
  //         output++;
  //       }
  //     }
  //   }
  //   return output;
  const dp = Array(nums1.length)
    .fill('')
    .map((_) => Array(nums2.length).fill(0));

  for (let a = 0; a < nums1.length; a++) {
    for (let b = 0; b < nums2.length; b++) {
      dp[a][b] =
        nums1[a] === nums2[b]
          ? (dp[a - 1]?.[b - 1] ?? 0) + 1
          : Math.max(dp[a][b - 1] ?? 0, dp[a - 1]?.[b] ?? 0);
    }
  }
  return dp.at(-1).at(-1);
};

console.log(maxUncrossedLines([1, 1, 2, 1, 2], [1, 3, 2, 3, 1]));
