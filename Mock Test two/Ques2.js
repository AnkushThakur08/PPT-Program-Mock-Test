const queue = [];

const enqueue = (element) => {
  queue.push(element);
};

const dequeue = () => {
  if (isEmpty()) {
    return 'Queue is empty. Cannot dequeue an element.';
  }
  return queue.shift();
};

const isEmpty = () => {
  return queue.length === 0;
};

console.log(isEmpty()); // true

enqueue(5);
enqueue(10);
enqueue(15);

console.log(isEmpty()); // false

console.log(dequeue()); // 5
console.log(dequeue()); // 10
console.log(dequeue()); // 15
console.log(dequeue()); // Queue is empty. Cannot dequeue an element.
console.log(isEmpty()); // true
