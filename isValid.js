const isValid = function (s) {
  const open = ['(', '{', '['];
  const close = [')', '}', ']'];
  const stack = [];
  for (let i of s.split('')) {
    if (open.includes(i)) {
      stack.push(i);
      console.log(stack);
    } else {
      if (stack.length === 0) return false;
      const last = stack[stack.length - 1];
      if (open[close.indexOf(i)] === last) stack.pop();
      else return false;
    }
  }
  if (stack.length !== 0) return false;
  return true;
};

console.log(isValid('([{}])'));
