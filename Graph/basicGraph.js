class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = new Set();
        }
        if (!this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2] = new Set();
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }
    removeVertex(vertex)
    {
        const adjcacents=this.adjacencyList[vertex];
        for(const adjacent of adjcacents)
        {
            this.removeEdge(adjacent,vertex);
        }
        delete this.adjacencyList[vertex]
    }
    print(){
        console.log(this.adjacencyList)
    }

    getNeighbours(vertex) {
        return this.adjacencyList[vertex] ? Array.from(this.adjacencyList[vertex]) : null;
    }

    printGraph() {
        for (let [vertex, neighbours] of Object.entries(this.adjacencyList)) {
            console.log(`${vertex} -> ${Array.from(neighbours)}`);
        }
    }

        bfs(startVertex)
        {
            const visited=new Set();
            const queue=[startVertex];
            while(queue.length!==0)
            {
                const currVertex=queue.shift();
                if(!visited.has(currVertex))
                {
                    visited.add(currVertex);
                    console.log(currVertex);
                    const adjcacents=this.adjacencyList[currVertex];
                    for(const adjacent of adjcacents)
                    {
                        if(!visited.has(adjacent))
                        {
                        queue.push(adjacent);
                        }
                    }
                }
            }
        }

    dfs1(startVertex)
    {
        const visited=new Set();
        
        const  dfshelper=(vertex)=>{
            if(!visited.has(vertex))
            {
                visited.add(vertex);
                console.log(vertex);
                // const adjcacents=this.adjacencyList[vertex];
                // for(const adjacent of adjcacents)
                // {
                //     if(!visited.has(adjacent))
                //     {
                //     dfshelper(adjacent)
                //     }
                // }
                this.adjacencyList[vertex].forEach((node)=>{
                    if(!visited.has(node)){
                        dfshelper(node);
                    }
                });
            }
        }
        dfshelper(startVertex); 
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
    display()
    {
        for(const vertex in this.adjacencyList)
        {
            console.log(vertex +">"+[...this.adjacencyList[vertex]]);
        }
    }
    isValid(){
        const visited=new Set();
        for(const vertex in this.adjacencyList){
            const adjacents=this.adjacencyList[vertex];
            for(const adjacent of adjacents){
                const edge=[vertex,adjacent].sort().join('-');
                if(visited.has(edge)){
                    console.log("Duplicate or paralle edge found");
                }
                if(vertex===adjacent){
                    console.log("self loop found");
                }
                visited.add(edge);
            }
        }
    }
}
const graph=new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addVertex("H")
graph.addVertex("G")
graph.addEdge("A","B")
graph.addEdge("B","C")
graph.addEdge("B","D")
graph.addEdge("C","E")
graph.addEdge("A","E")
graph.addEdge("A","G")
graph.addEdge("A","F");
graph.addEdge("A","H");
graph.addEdge("F","H");




// graph.addEdge("A","1");
// graph.addEdge("B","3")
// graph.display();
// graph.bfs("A")
console.log(graph.dfs("A"))
graph.dfs1("A")
// graph.display();
// graph.isValid();
// graph.print()
// graph.removeEdge("A","F");
// graph.removeVertex("F")
// graph.print()
// console.log(graph.getNeighbours("A"))
// graph.isValid();