const times = process.argv.slice(2);

const timer1 = (args) => {
  for (let val of args) {
    if (val > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, val * 1000);
    }
  }
};

timer1(times);