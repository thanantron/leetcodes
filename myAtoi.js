var myAtoi = function (s) {
  let length = s.length;
  let result = 0;
  let i = 0;
  while (s[i] === ' ') {
    i++;
  }
  let positive = s[i] === '+';
  let negative = s[i] === '-';

  positive ? i++ : i;
  negative ? i++ : i;

  while (i < length && s[i] >= '0' && s[i] <= '9') {
    result = result + s[i];
    i++;
  }
  result = negative ? -result : result;
  result = result > 2147483647 ? 2147483647 : result;
  result = result < -2147483648 ? -2147483648 : result;
  return parseInt(result);
};

console.log(myAtoi(' and 987'));
