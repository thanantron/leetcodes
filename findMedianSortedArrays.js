var findMedianSortedArrays = function (nums1, nums2) {
  let merge = [...nums1, ...nums2].sort((a, b) => a - b);
  let length = merge.length;
  if (length % 2 === 0) {
    return (merge[length / 2 - 1] + merge[length / 2]) / 2;
  }
  return merge[(length - 1) / 2];
};

console.log(findMedianSortedArrays([1, 3, 4], [2, 5, 7]));
