interface Graph{
    adjacencyList : any,
    addVertex: (vertex: string) => void,
    addEdge: (vertex1: string, vertex2: string) => void,
    display: () => void,
    hasEdge: (vertex1: string,vertex2: string) => boolean,
    removeEdge: (vertex1: string,vertex2: string) => void,
    removeVertex: (vertex: string) => void,
}
const createGraph = () : Graph => {
    let graph : Graph = {
      adjacencyList: {},
      addVertex(vertex : string){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set() // here we are using an inbuilt javascript data structure called set
        }
      },
      addEdge(vertex1: string, vertex2: string): void {
          if(!this.adjacencyList[vertex1]) this.addVertex(vertex1)
          if(!this.adjacencyList[vertex2]) this.addVertex(vertex2)
          this.adjacencyList[vertex1].add(vertex2) // here add is a method that is available on set data structure.
          this.adjacencyList[vertex2].add(vertex1) 
      },
      display() {
          for(let vertex in this.adjacencyList){
            console.log(`${vertex} => ${[...this.adjacencyList[vertex]]}`)
          }
      },
      hasEdge(vertex1: string, vertex2: string): boolean {
          try{
            return (this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1))
          }catch(e: unknown){
            return false
          }
      },
      removeEdge(vertex1: string,vertex2: string): void{
        try{
            this.adjacencyList[vertex1].delete(vertex2)
            this.adjacencyList[vertex2].delete(vertex1) // here delete is a build in method in set data structure. this is why we used set in the first place.
        }catch(e: unknown){
            return
        }
      },
      removeVertex(vertex: string): void{
        if(!this.adjacencyList[vertex]) return
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
      }
    }
    return graph
}

const grph = createGraph()
grph.addVertex('A')
grph.addVertex('B')
grph.addEdge('A','C')
grph.addEdge('A','B')
grph.display()
grph.removeVertex('A')
console.log(grph.hasEdge('A','C'))

export{}