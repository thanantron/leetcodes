var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push('');
  }

  let currentRow = 0;
  let upDown = false;
  for (let i = 0; i < s.length; i++) {
    rows[currentRow] += s[i];
    if (currentRow === 0 || currentRow === numRows - 1) {
      upDown = !upDown;
    }
    currentRow += upDown ? 1 : -1;
  }
  console.log(rows);
  let result = '';
  for (let i = 0; i < numRows; i++) {
    result += rows[i];
  }
  return result;
};

console.log(convert('PAYPALISHIRING', 4));
