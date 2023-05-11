var spiralOrder = function (matrix) {
  let result = [];
  let middle = [];
  if (matrix.length === 1 || 0) return [...matrix[0]];
  result.push(...matrix[0]);
  for (let i = 0; i < matrix.length; i++) {
    if (i == 0 || i == matrix.length - 1) continue;
    result.push(matrix[i][matrix[i].length - 1]);
    if (i + (1 % 2) == 0) middle.push(...matrix[i].slice(0, -1));
  }
  result.push(...matrix[matrix.length - 1].reverse());
  result = [...result, ...middle];
  return result;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
