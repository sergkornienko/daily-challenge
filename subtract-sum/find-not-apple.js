const { subtractSum } = require('./index');

for (let index = 10; index < 10000; index++) {
  const res = subtractSum(index);
  if (res !== 'apple') {
    console.log(index, res);
  }
}
