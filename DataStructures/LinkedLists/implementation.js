

//! 83 Remove Duplicates from Sorted List



var deleteDuplicates = function(head) {

    if(!head) return null;

    let current = head // 1
    console.log(head)
    let recent = current // 1
    current = current.next; // 1 @ 2
    //changing current mutates any pointers to it, meaning the head.
    while(current) {
        if(current.val === recent.val) {
            recent.next = current.next
            current.next = null;
        } else {
            recent = recent.next
        }

        current = recent.next
    }

    return head;

};
