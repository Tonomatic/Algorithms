/*
Write a function that takes in the root of a binary tree. The function should
return an array containing all values of the tree in dfs order
*/


const depthFirstValues = (root) => {
    if(!root) {
        return [];
    }

    let stack = [root];
    let arr = [];

    while(stack.length) {
        let node = stack.pop();

        arr.push(node.val)

        if(node.right) {
            stack.push(node.right)
        }

        if(node.left) {
            stack.push(node.left)
        }
    }

    return arr;
}


/*
Write a function that takes in the root of a binary tree. The function should return
an array containing all values of the tree in bfs order
*/

const breathFirstValues = (root) => {
    if(!root) {
        return [];
    }

    let queue = [root];
    let arr = [];

    while(queue.length) {
        let node = queue.shift()
        arr.push(node.val);

        if(node.left) {
            queue.push(node.left)
        }

        if(node.right) {
            queue.push(node.right)
        }
    }

    return arr;
}
