var lengthOfLongestSubstring = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let newstring = '';
    for (let j = i; j < s.length; j++) {
      if (newstring.includes(s[j])) {
        break;
      }
      newstring += s[j];
    }

    if (count < newstring.length) count = newstring.length;
  }
  return count;
};

console.log(lengthOfLongestSubstring('pwwkew'));
