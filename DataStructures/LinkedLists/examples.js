

/*
Write a function, linkedListValues, that takes
in the head of a linked list as an argument. The function should
return anarray containing all values of the nodes in the linked list.
*/

const linkedListValues = (head) => {
    const arr = [];
    let current = head;
    while(current) {
      arr.push(current.val)
      current = current.next;
    }
    return arr;
  };


/*
Write a function, sumList, that takes in the head of a linked list containing numbers as an argument.
The function should return the total sum of all values in the linked list.
 */


