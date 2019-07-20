const {
  Observable: {
    create
  },
  of ,
  from,
  range,
  interval
} = require('rxjs');
const {
  merge,
  bufferCount,
  bufferTime,
  reduce
} = require('rxjs/operators')

// 1 задание
const implemetRange = create((observer) => {
  let start = 5,
    finish = 20,
    counter = start;
  const interval = setInterval(() => {
    observer.next(counter);
    counter++;
    if (counter === finish) {
      clearInterval(interval)
      observer.complete()
    }
  }, 200)
})
implemetRange.subscribe({
  next: (value) => console.log('next: ', value),
  complete: () => console.log('complete'),
  error: (error) => console.log('error: ', error)
});

// 2 задание
const implementInterval = create((observer) => {
  const timeInterval = 500;
  let counter = 0;
  setInterval(() => {
    observer.next(counter);
    counter++;
  }, timeInterval)
})

implementInterval.subscribe({
  next: (value) => console.log('next: ', value),
  complete: () => console.log('complete'),
  error: (error) => console.log('error: ', error)
});

//3. Используя тольк reduce иммплементировать функционал filter.
const implementReduce = range(0,10)
  .pipe(reduce((acc, val) => {
    if (val % 2 === 0) {
      acc += val;
    }
    return acc
  }, 10))
  implementReduce.subscribe(
  (val) => {
    console.log(`This is observable value: ${val}`);
  },
  (err) => {
    console.log(`Error appears ${err.message}`);
  },
  () => {
    console.log('FINISHED')

  }
);

// 4 задание
const publisher1 = interval(100).pipe(bufferTime(333))

const publisher2 = interval(100).pipe(bufferCount(7))

const publisher = publisher1.pipe(merge(publisher2))

const subscriber = publisher.subscribe(
  (val) => {
    console.log(`This is observable value: ${val}`);
  },
  (err) => {
    console.log(`Error appears ${err.message}`);
  },
  () => {
    console.log('FINISHED')

  }
);
setTimeout(() => subscriber.unsubscribe(), 5000);