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
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(node,newNode){
        if(newNode.value<node.value){
            if(node.left === null){
                node.left = newNode;
            }else{
                this.insertNode(node.left,newNode);
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(node.right,newNode);
            }
        }
    }

    search(node,value){
        if(!node){
            return false
        }else{
            if(node.value === value){
                return true;
            }else if(value<node.value){
                return this.search(node.left,value);
            }else{
                return this.search(node.right,value);
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

    isBST(node,min=null,max=null){
        if(node===null){
            return true;
        }
        if((min!==null&&node.value<=min)||max!==null&&node.value>max){
            return false;
        }

        return this.isBST(node.left,min,node.value)&&this.isBST(node.right,node.value,max)
    }

    levelOrder(root){
        if(root===null){
            return [];
        }

        let queue = [root];
        let result=[];

        while(queue.length>0){
            let node = queue.shift();
            result.push(node.value);

            if(node.left!==null){
                queue.push(node.left)
            }
            if(node.right!==null){
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
console.log(binary.search(binary.root,15));
// console.log(binary.search(binary.root,21));
console.log("PreOrder")
binary.preOrder(binary.root);
console.log("PostOrder")
binary.postOrder(binary.root);
console.log("inorder")
binary.inOrder(binary.root);
// console.log(binary)
console.log("Level order");

console.log(binary.levelOrder(binary.root));
