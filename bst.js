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

   insert(value){
    const newNode = new Node(value)
    if(this.root === null){
        this.root = newNode
    }else{
        this.insertNode(this.root,newNode)
    }
   }

   insertNode(node,newNode){
    if(newNode.value<node.value){
        if(node.left === null){
            node.left = newNode;
        }else {
            this.insertNode(node.left,newNode)
        }
    }else{
        if(node.right === null){
            node.right = newNode;
        }else{
            this.insertNode(node.left,newNode)
        }
    }
   }

   search(node,value){
    if(!node){
        return false
    }else{
        if(node.value===value){
            return true
        }else if(node.value<value){
            return this.search(node.right,value)
        }else{
            return this.search(node.left,value)
        }
    }
   }


   preOrder(root){
    if(root){
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
   }

   postOrder(root){
    if(root){
        
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.value);
    }
   }

   inOrder(root){
    if(root){
        
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right);
    }
   }
}

const binary = new BST();
binary.insert(10);
binary.insert(5)
binary.insert(15)
binary.insert(3)
binary.insert(7);
binary.preOrder(binary.root)
console.log("postOrder:");
binary.postOrder(binary.root);

console.log(binary.search(binary.root,3));