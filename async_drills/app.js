document.addEventListener('DOMContentLoaded', () => {

  //Async Now And Later

  function returnNum() {
    console.log('You now have a number.');
    return Math.round(Math.random() * 100);
  };

  const RANDOMNUM = returnNum();

  function timesNum() {
    console.log(RANDOMNUM * 4);
  }

  setTimeout(() => {
    timesNum();
  }, 2000);

  function getWords() {
    console.log('Hello')
    setTimeout(() => {
      console.log('World');
      setTimeout(() => {
        console.log('How');
        setTimeout(() => {
          console.log('You?');
        }, 1000);
      }, 2000);
    }, 3000);
  };

  getWords();


  // Callbacks

  function countdown(num, callback) {
    timer = setInterval(function () {
      console.log(num);
      num-- || (clearInterval(timer), callback()); // short-circuit evaluation
    }, 1000);
  }

  let done = function () {
    console.log('Timer is done!');
  }

  countdown(5, done);


  // Promises

  const TRUTH = true;

  let orderingChickenSandwhich = new Promise((resolve, reject) => {
    if (TRUTH == true) {
      let chickenSandwhich = {
        sandwhich: 'chicken',
        veggies: 'lettuce'
      };
      resolve(chickenSandwhich);
    } else {
      let err = new Error('That is wrong!');
      reject(err);
    };
  });

  function orderFood() {
    orderingChickenSandwhich
    .then(
      (value) => {
        console.log(value);
      }).catch(
        (err) => {
          console.log(err);
        });
  };

  orderFood();

  // Chaining Promises

  let number = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });

  number.then((value) => {
    console.log(value);
    return ((value * 2));
  }).then((value) => {
    console.log(value);
    return ((value * 4));
  }).then((value) => {
    console.log(value);
    return ((value * 6))
  }).then((value) => {
    console.log(value);
  }).catch((err) => {
    console.log(err);
  });

});