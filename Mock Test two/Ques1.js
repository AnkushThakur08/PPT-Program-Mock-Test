const stack = [];

const push = (element) => {
  stack.push(element);
};

const pop = () => {
  if (isEmpty()) {
    return 'Stack is empty. Cannot pop an element.';
  }
  return stack.pop();
};

const isEmpty = () => {
  return stack.length === 0;
};

console.log(isEmpty()); //  true

push(5);
push(10);
push(15);

console.log(isEmpty()); //  false

console.log(pop()); //  15
console.log(pop()); //  10
console.log(pop()); //  5
console.log(pop()); //  Stack is empty. Cannot pop an element.
console.log(isEmpty()); //  true
