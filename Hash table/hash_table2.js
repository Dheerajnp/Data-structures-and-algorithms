class hashTable{
    constructor(size){
        this.table=new Array(size);
        this.size=size;
    }


    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);
        }
        return total % this.size;
    }


    set(key,value){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key,value]];
        }else{
            let sameKeyItem = bucket.find((item)=> item[0] === key);
            if(sameKeyItem){
                sameKeyItem[1] = value;
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find((item)=>item[0]===key);
            if(sameKeyItem){
                return sameKeyItem[1];
            }
        }
        return undefined;
    }


    remove(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            let sameKeyItem = bucket.find((item)=>item[0]===key);
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1);
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
          if (this.table[i]) {
            console.log(i, this.table[i]);
          }
        }
      }
}


const table = new hashTable(10);
table.set("name", "Bruce");
table.set("age", 25);
table.display();

console.log("//////////////");
console.log(table.get("name"));
table.set("mane", "Clark");
table.set("name", "Diana");
console.log("//////////////");
console.log(table.get("mane"));
// table.remove("name");
console.log("//////////////");
table.display();
