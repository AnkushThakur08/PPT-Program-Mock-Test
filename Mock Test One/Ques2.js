const ListNode = (val) => {
  this.val = val;
  this.next = null;
};

const addTwoNumbers = (l1, l2) => {
  let dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let sum = carry;

    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) {
    curr.next = new ListNode(carry);
  }

  return dummy.next;
};

const createLinkedList = (values) => {
  let dummy = new ListNode(0);
  let curr = dummy;

  for (let val of values) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }

  return dummy.next;
};

// Example 1: l1 = [2, 4, 3], l2 = [5, 6, 4]
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);

let result = addTwoNumbers(l1, l2);

let output = [];
while (result !== null) {
  output.push(result.val);
  result = result.next;
}

console.log(output); /*[7, 0, 8]  */

// Example 2: l1 = [0], l2 = [0]
l1 = createLinkedList([0]);
l2 = createLinkedList([0]);

result = addTwoNumbers(l1, l2);
output = [];
while (result !== null) {
  output.push(result.val);
  result = result.next;
}

console.log(output); /* [0]  */

// Example 3: l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]
l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
l2 = createLinkedList([9, 9, 9, 9]);

result = addTwoNumbers(l1, l2);
output = [];
while (result !== null) {
  output.push(result.val);
  result = result.next;
}

console.log(output); /* [8, 9, 9, 9, 0, 0, 0, 1] */
