var longestCommonPrefix = function (strs) {
  var answer = '';
  for (var i = 0; i < strs[0].length; i++) {
    var checkincludes = 0;
    for (var j = 0; j < strs.length; j++) {
      if (strs[0][i] === strs[j][i]) {
        checkincludes++;
      }
    }
    if (i <= answer.length && checkincludes == strs.length) {
      answer += strs[0][i];
    }
  }
  return answer;
};
var strs = ['car', 'cir'];
console.log(longestCommonPrefix(strs));
