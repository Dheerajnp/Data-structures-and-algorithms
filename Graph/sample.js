class Graph{
    constructor(){
        this.adjacencyList=new Set();
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set();
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
            this.adjacencyList[vertex].forEach(neighbour=>{
                this.adjacencyList[neighbour].delete(vertex);
            })
            delete this.adjacencyList[vertex];
        }
    }

    display(){
        for(vertex in this.adjacencyList){
            console.log(vertex+">"+[...this.adjacencyList[vertex]])
        }
    }

    bfs(start){
        let queue = [start];
        let result = [];
        let visited = {};
        visited[start]=true;

        while(queue.length){
            let currentVertex = queue.shift();
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

    dfs(start){
        let stack = [start];
        let result = [];
        let visited = {};
        visited[start]=true;

        while(stack.length){
            let currentVertex = stack.pop();
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

    getNeighbours(vertex){
        return this.adjacencyList[vertex]? Array.from(this.adjacencyList[vertex]):null;
    }

}