class hashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);
            // console.log(total)
        }
        return total % this.size;
    }

    set(key,value){
        let index =this.hash(key);
        this.table[index] = value;
    }

    get(key){
        let index = this.hash(key);
        return this.table[index];
    }

    remove(key){
        let index = this.hash(key);
        this.table[index]=undefined;
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}


const table = new hashTable(31);

table.set("name","Bruce");
table.set("age",25);
table.display();
console.log(table.get("age"));
table.remove("age");
console.log("after removing age")
table.display();