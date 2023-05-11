const start = () => {
  for (let i = 1; i <= 10; i++) {
    if (i == 5 || i == 8) continue;
    console.log('this round  i =  %d', i);
  }
};

start();
