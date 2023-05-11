var reverse = function (x) {
  var input = x.toString().split('');
  var overload = Math.pow(2, 31) - 1;
  if (parseInt(input.join('')) < 1) {
    var outputNagative = parseInt(input[0] + input.slice(1).reverse().join(''));
    return Math.abs(outputNagative) > overload ? 0 : outputNagative;
  } else {
    var output = parseInt(input.reverse().join(''));
    return output > overload ? 0 : output;
  }
};

console.log(reverse(-2147483648));
