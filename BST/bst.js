class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    // insert(value){
    //     const newNode = new Node(value);
    //     if(this.root === null){
    //         this.root = newNode;
    //         return this;
    //     }else{
    //         let current = this.root;
    //         while(true){
    //             if(value === current.value)return undefined;
    //             if(value<current.value){
    //                 if(current.left===null){
    //                     current.left = newNode;
    //                 }
    //                 current = current.left;
    //             }else{
    //                 if(current.right===null){
    //                     current.right=newNode;
    //                 }
    //                 current = current.right;
    //             }
    //         }
    //     }

    // }

    
// helper method which creates a new node to 
// be inserted and calls insertNode
insert(data)
{
    // Creating a node and initialising 
    // with data 
    var newNode = new Node(data);
                     
    // root is null then node will
    // be added to the tree and made root.
    if(this.root === null)
        this.root = newNode;
    else
 
        // find the correct position in the 
        // tree and add the node
        this.insertNode(this.root, newNode);
}
 
// Method to insert a node in a tree
// it moves over the tree to find the location
// to insert a node with a given data 
insertNode(node, newNode)
{
    // if the data is less than the node
    // data move left of the tree 
    if(newNode.data < node.data)
    {
        // if left is null insert node here
        if(node.left === null)
            node.left = newNode;
        else
 
            // if left is not null recur until 
            // null is found
            this.insertNode(node.left, newNode); 
    }
 
    // if the data is more than the node
    // data move right of the tree 
    else
    {
        // if right is null insert node here
        if(node.right === null)
            node.right = newNode;
        else
 
            // if right is not null recur until 
            // null is found
            this.insertNode(node.right,newNode);
    }
}

search(node,value){
    if(!node){
        return false;
    }else{
        if(node.value===value){
            return true;
        }else if(value<node.value){
            return this.search(node.left,value);
        }else{
            return this.search(node.right,value)
        }
    }
}


preOrder(root){
    if(root){
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right)
    }
}



inorder(root){
    if(root){
        this.inorder(root.left);
        console.log(root.value);
        this.inorder(root.right)
    }
}

postorder(root){
    if(root){
        this.postorder(root.left);
        this.postorder(root.right);
        console.log(root.value);
    }
}


 isBST(node, min = null, max = null) {
    if (node === null) {
        return true;
    }
    if ((min !== null && node.value <= min) || (max !== null && node.value > max)) {
        return false;
    }
    return isBST(node.left, min, node.value) && isBST(node.right, node.value, max);
}

levelOrderTraversal(root) {
    if (root === null) {
        return [];
    }

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node.value);

        if (node.left !== null) {
            queue.push(node.left);
        }

        if (node.right !== null) {
            queue.push(node.right);
        }
    }

    return result;
}

}


const binary = new BST();
binary.insert(10);
binary.insert(5)
binary.insert(15)
binary.insert(3)
binary.insert(7)
// console.log(binary.search(binary.root,21));
console.log("PreOrder")
binary.preOrder(binary.root);
console.log("PostOrder")
binary.postorder(binary.root);
console.log("inorder")
binary.inorder(binary.root);
// console.log(binary)
console.log("Level order");

console.log(binary.levelOrderTraversal(binary.root));
