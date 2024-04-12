// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size === 0;
//     }

//     getSize(){
//         return this.size;
//     }


//     prepend(value){
//         const node = new Node(value);
//         node.next = this.head;
//         this.head =  node;
//         this.size++;
//     }


//     reverse(){
//         if(this.isEmpty()){
//             return 
//         }
//         let current = this.head;
//         let prev = null;
//         while(current){
//             next =current.next
//             current.next = prev;
//             prev=current;
//         }
//         prev = this.head;
        
//     }

// }


let str = "hello";
let rev="";
for(let i=str.length-1;i>=0;i--){
    rev+=str[i];
}
console.log(rev);

// let [a,b,...j]=[1,6,6,6,6];
// console.log(j);