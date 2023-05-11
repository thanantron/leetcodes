var diagonalSum = function (mat) {
  let sumleftToRight = 0;
  let sumRightToleft = 0;
  let isOld = mat.length % 2 != 0;
  for (let i = 0; i < mat.length; i++) {
    if (isOld && i == (mat.length - 1) / 2) {
      sumleftToRight += mat[i][(mat.length - 1) / 2];
      continue;
    }
    for (let j = 0; j < mat.length; j++) {
      if (i == j) sumleftToRight += mat[i][j];
      if (i + j == mat.length - 1) sumRightToleft += mat[i][j];
    }
  }
  return sumleftToRight + sumRightToleft;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
