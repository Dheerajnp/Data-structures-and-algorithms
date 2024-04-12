
class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]= new Set();
        }
    }

    addEdge(vertex1,vertex2){
        this.addVertex(vertex1);
        this.addVertex(vertex2);

        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    removeEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1]&&this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].delete(vertex2);
            this.adjacencyList[vertex2].delete(vertex1);
        }
    }

    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            for(let neighbor of this.adjacencyList[vertex]){
                this.adjacencyList[neighbor].delete(vertex);
            }
            delete this.adjacencyList[vertex];
        }
    }

    display(){
        for(const vertex in this.adjacencyList){
            console.log(vertex+"  >  "+[...this.adjacencyList[vertex]]);
        }
    }


    dfs(start){
        const stack = [start];
        let visited={};
        let result=[];
        visited[start]=true;
        while(stack.length){
            const currentVertex = stack.pop();
            result.push(currentVertex);
    
            this.adjacencyList[currentVertex].forEach(node=>{
                if(!visited[node]){
                    visited[node]=true;
                    stack.push(node);
                }
            })
        }
        return result;
    }
    

    dfs1(startVertex) {
        const visited = new Set();
        const result = []; // to store the order of visited vertices
    
        const dfshelper = (vertex) => {
            if (!visited.has(vertex)) {
                visited.add(vertex);
                result.push(vertex); // push the vertex to the result array
                const adjacents = this.adjacencyList[vertex];
                for (const adjacent of adjacents) {
                    if (!visited.has(adjacent)) {
                        dfshelper(adjacent);
                    }
                }
            }
        }
        dfshelper(startVertex);
        return result; // return the result array
    }
    


    
    bfs(start){
        const queue = [start];
        let result =[]
        let visited = {};
        visited[start]=true;
    
        while(queue.length){
            const currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(node=>{
                if(!visited[node]){
                    visited[node]=true;
                    queue.push(node);
                }
            })
        }
        return result;
    }

    getNeighbours(vertex){
        return this.adjacencyList[vertex]? Array.from(this.adjacencyList[vertex]):null;
    }

    printGraph() {
        for (let [vertex, neighbours] of Object.entries(this.adjacencyList)) {
            console.log(`${vertex} -> ${Array.from(neighbours)}`);
        }
    }
}






const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("C", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");

g.display();
console.log("/////////////bfs/////////////");
console.log(g.bfs("A"));
console.log("/////////////dfs/////////////");
console.log(g.dfs("A"));
console.log("/////////////dfs recursive/////////////");
console.log(g.dfs1("A"));

console.log(g.getNeighbours("A"));
g.printGraph();