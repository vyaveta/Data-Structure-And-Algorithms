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

// Function that sorts the linkes list in Ascending order.
const selectionSortLinkedListAscending = (list: LinkedList) : LinkedList => {
    let current : Node | null = list.head
    while(current){ // looping through the linked list
        let minNode : Node = current // locking the head node and considering it as the min Node
        let runnerNode : Node | null = current.next // creates anoter variable that stores the next node of the locked 
        while(runnerNode){ // starts another iteration
            if(runnerNode.data < minNode.data) minNode = runnerNode // Finding the Node that contains the smallest value in unsorted part. and if so changing the minNode
            runnerNode = runnerNode.next // this line is needed for next iteration with new runnerNode
        }
        [current.data,minNode.data] = [minNode.data,current.data] // swaping the values of current node and min node ,(without using a third variable)
        current = current.next // this line is needed for next iteration with new current node
    }
  return list // and finally returning the sorted list.
}

// Function that sorts the LinkedList in Descending order
const selectionSortLinkedListDescending = (list : LinkedList) : LinkedList => {
    let current : Node | null = list.head
    while(current){
        let maxNode : Node = current
        let runnerNode : Node | null = current.next
        while(runnerNode){
            if(runnerNode.data > maxNode.data) maxNode = runnerNode
            runnerNode = runnerNode.next
        }
        [current.data,maxNode.data] = [maxNode.data,current.data]
        current = current.next
    }
    return list
}

//Function to print the datas in a Linkeslist
const printAllDatas = (list: LinkedList) : boolean => {
    if(!list.head) return false // This function will return false if the list.head is emply i.e if the list(linkeslist) is empty
    let current : Node | null = list.head 
    while(current){
        process.stdout.write(`${current.data}`)
        if(current.next) process.stdout.write(` => `) // I know we could simply use console.log, but we want to print all the datas in a single line , console.log prints every data in a new line and that's not what we want.
        current = current.next
    }
    return true
}

// Insert values to linked list.
let list = createLinkedList()
list.pushToHead(100)
list.pushToHead(9)
list.pushToHead(3)
list.pushToHead(99)
const AscendingList = selectionSortLinkedListAscending(list)
printAllDatas(AscendingList)

// how to sort a linked list using selectionsort algo in javascript?

export{}