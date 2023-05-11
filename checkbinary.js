var findIntegers = function (n) {
  //   console.log(Number(n).toString(2));
  //   var count = 0;
  //   for (var i = 0; i <= n; i++) {
  //     var convert = i.toString(2);
  //     if (convert.includes('11')) continue;
  //     count++;
  //   }
  //   return count;
  let dp = (len) => {
    console.log('len', len);
    if (len < 0) return 0;
    if (!len) return 1;
    let _0x = 1;
    let _1x = 1;
    while (--len) [_0x, _1x] = [_0x + _1x, _0x];
    return _0x + _1x;
  };

  let binary = n.toString(2);
  console.log(binary);
  let count = 0;
  let is_prev_one = false;
  for (let i = 0; i < binary.length; i++) {
    console.log(binary[i]);
    if (binary[i] === '0') {
      is_prev_one = false;
      continue;
    }
    count += dp(binary.length - i - 1);
    if (is_prev_one) return count;
    is_prev_one = true;
  }
  return count + 1;
};

console.log(findIntegers(100000000));
