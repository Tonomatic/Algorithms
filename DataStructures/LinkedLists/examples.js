

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



const sumList = (head) => {

    if(!head) return 0;
    let sum = 0;
    let current = head;

    while(current) {
      sum += current.val;
      current = current.next;
    }

    return sum;

  }


  /*
Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the
nodes in the linked list in-place and return the new head of the reversed linked list.
  */


const reverseList = (head) => {

    let temp = null;
    let reversed = null;
    let current = head

    while(current != null) {
      temp = current.next;
      current.next = reversed;
      reversed = current;
      current = temp;
    }

    return reversed
  };

