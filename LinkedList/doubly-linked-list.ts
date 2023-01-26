interface Node {
    data: number,
    next: Node | null,
    prev: Node | null,
}

interface LinkedList {
    head: Node | null,
    tail: Node | null,
    length: number,
    addNewElementInFront: (data: number) => LinkedList,
    addNewElementInTail: (data: number) => LinkedList,
    deleteElementFromFront: () => LinkedList,
    deleteElementFromEnd: () => LinkedList,
}

const createNode = (data: number) =>  {
    let node : Node = {
    data : data,
    next: null,
    prev: null,
    }
    return node
}

const createLinkedList = () => {
    const list : LinkedList = {
        head : null,
        tail : null,
        length: 0,
        addNewElementInFront(data: number){
            const node : Node = createNode(data)
            if(!this.head){
                this.head = node
                this.tail = node
                this.length++
                return this
            }
            node.next = this.head
            this.head.prev = node
            this.head = node
            this.length++
            return this
        },
        addNewElementInTail(data: number){
            const node : Node = createNode(data)
            if(!this.head || !this.tail){
                this.head = node
                this.tail = node
                this.length++
                return this
            }
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
            this.length++
            return this
        },
        deleteElementFromFront() {
            if(!this.head) return this
            if(this.head == this.tail) {
                this.head = null
                this.tail = null
                this.length--
                return this
            }
            this.head = this.head.next
            //@ts-ignore
            this.head?.prev = null
            this.length--
            return this
        },
        deleteElementFromEnd() {
            if(!this.head || !this.tail) return this
            if(this.head == this.tail || this.length === 1){
                this.head = null
                this.tail = null
                this.length--
                return this
            }
            this.tail = this.tail.prev
            //@ts-ignore
            this.tail?.next = null
            this.length--
            return this
        },
    }
    return list
}

let list = createLinkedList()
list.addNewElementInFront(5)
list.addNewElementInFront(2)
list.addNewElementInTail(9)
list.deleteElementFromEnd()
console.log(list)

export {}