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
    isThere: (data: number) => boolean,
    getNodeUsingIndex: (index: number) => Node | null,
    printAllValuesFromTop: () => void,
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
        isThere(data : number) {
            if(!this.head || !this.tail || this.length === 0) return false
            if(this.length === 1){
                if(this.head.data === data || this.tail.data === data) return true
                return false
            }
            let current : Node | null = this.head
            while(current != null){
                if(current.data === data) return true
                current = current.next
            }
            return false
        },
        getNodeUsingIndex(index : number) {
           if(!this.head || !this.tail || this.length < 1 || index >= this.length) return null
           if(index === 0) return this.head
           let node : Node | null = this.head
           for(let i = 1; i <= index; i++){
            if(node.next) node = node?.next
            else return null
           }
           return node
        },
        printAllValuesFromTop() {
            let current : Node | null = this.head
            while (current != null){
                console.log(current.data)
                current = current.next
            }
        },
    }
    return list
}

let list = createLinkedList()
list.addNewElementInFront(5)
list.addNewElementInFront(2)
list.addNewElementInTail(9)
console.log(list)
console.log(list.getNodeUsingIndex(2))

export {}