// createLinked list 
interface Node {
    data: number,
    next: Node | null,
}

interface LinkedList {
    head: Node | null,
    length: number,
    tail: Node | null,
    pushToHead: (data: number) => LinkedList
}

const createNode = (data: number) : Node => {
    const node : Node ={
        data,
        next: null,
    }
    return node
}

const createLinkedList = () : LinkedList => {
    const list : LinkedList = {
        head: null,
        length: 0,
        tail: null,
        pushToHead(data: number){
            const node : Node = createNode(data)
            if(!this.head){
                this.head = node,
                this.tail = node,
                this.length++
                return this
            }
            node.next = this.head
            this.head = node
            this.length++
            return this
        }
    }
    return list
}

const selectionSortAscendingLinkedList = (list: LinkedList) : LinkedList => {
    let current : Node | null = list.head
    while(current){
        let minNode : Node = current
        let runnerNode : Node | null = current.next
        while(runnerNode){
            if(runnerNode.data < minNode.data) minNode = runnerNode
            runnerNode = runnerNode.next
        }
        [current.data,minNode.data] = [minNode.data,current.data]
        current = current.next
    }
  return list 
}

// Insert values to linked list.
let list = createLinkedList()
list.pushToHead(0)
list.pushToHead(9)
list.pushToHead(30)
list.pushToHead(99)
console.log(selectionSortAscendingLinkedList(list))

export{}