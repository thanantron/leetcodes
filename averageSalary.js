var average = function (salary) {
  let sum = 0;
  let max = salary[0];
  let min = salary[0];
  let length = salary.length;
  salary.forEach((value) => {
    sum += value;
    if (value > max) max = value;
    if (value < min) min = value;
  });
  return (sum - max - min) / (length - 2);
};

console.log(average([8000, 9000, 2000, 3000, 6000, 1000]));
