slowMath.add(6, 2)
.then((value) => {
  console.log(value);
  return(slowMath.multiply(value, 2));
}).then((value) => {
  console.log(value);
  return(slowMath.divide(value, 4));
}).then((value) => {
  console.log(value);
  return(slowMath.subtract(value, 3));
}).then((value) => {
  console.log(value);
  return(slowMath.add(value, 98));
}).then((value) => {
  console.log(value);
  return(slowMath.remainder(value, 2));
}).then((v) => {
  console.log(v);
  return(slowMath.multiply(v, 50));
}).then((val) => {
  console.log(val)
  return(slowMath.remainder(val, 40));
}).then((value) => {
  console.log(value);
  return(slowMath.add(value, 32));
}).then((val) => {
  console.log(`The final result is ${val}!`);
}).catch((err) => {
  console.log(err);
});