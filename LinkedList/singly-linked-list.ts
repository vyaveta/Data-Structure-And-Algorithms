interface Node {
    data: number,
    next: Node | null,
}
interface LinkedList{
    head: Node | null,
    tail: null | Node,
    length: number,
    push: (value: number) => void,
    addNewElementInFront: (value: number) => void,
    removeHeadNode: () => void,
    removeTailNode: () => void,
    sortAscending: () => void | LinkedList | boolean,
    sortDescending: () => void | LinkedList | boolean,
}
 

const getNodeUsingIndex = (index: number, list: LinkedList) => {
    if(!list.head || index > list.length-1 || index < 0) return false
    if(index === 0) return list.head
    let current : Node | null = list.head
    let signal = 1
    while(signal <= index){
        //@ts-ignore
        current = current?.next
        signal++
    }
    return current
}

const isThere = (value : number | string, list: LinkedList) => {
    if(!list.head) return false
    if(list.length === 1) return value === list.head.data
    let current : Node | null = list.head
    for(let i = 1; i <= list.length; i++){
        if(current?.data === value ) return true
          if(current.next) current = current?.next
          else return false
    }
}


const printAllValues = (list: LinkedList) => {
    if(!list.head || list.length <=0) return console.log('Nothing to Print')
    let current : Node = list.head
    while(current.next != null){
        console.log(current.data)
        current = current.next
    }
    if(current.next == null && current.data) return console.log(current.data)
}

const createNode = (data : number) => {
    return{
        data,
        next: null,
    }
}

const createLinkedList = () => {
    const list: LinkedList = {
        head: null,
        tail: null,
        length: 0,
        push(data: number){
            //@ts-ignore
            const node : Node = createNode(data)
            if(!this.head){
                this.head = node
                this.tail = node
                this.length++;
                return list
            }
            if(this.tail) this.tail.next = node 
            this.tail = node
            this.length++
            return list
        },
        addNewElementInFront(data: number){
            //@ts-ignore
            const node: Node = createNode(data)
            if(!this.head){
                this.head = node
                this.tail = node
                this.length++
                return node
            }
            node.next = this.head
            this.head = node
            this.length++
            return node
        },
        removeHeadNode(){
            if(!this.head ) return false
            if(this.head == this.tail){
                this.head = null
                this.tail = null
                this.length--;
                return true
            }
            let node : Node | null = this.head.next
            this.head = node
            this.length --;
        },
        removeTailNode(){
            if(!this.head || !this.tail) return false
            if(this.head == this.tail ){
                this.head = null
                this.tail = null
                return true
            }
           let current : Node | null = this.head
           while(current.next?.next != null){
            current = current.next
           }
           current.next = null
           this.tail = current
           this.length--;
           return true
        },
        sortAscending(){
            if(!this.head) return false
            if(this.head == this.tail || this.length === 1) return this
            let lock : Node  | null = this.head
            while(lock != null){
                let current : Node | null = lock.next
                while(current != null){
                    if(lock.data > current.data){
                        [current.data, lock.data] = [lock.data,current.data]
                    }
                    current = current.next
                }
                lock = lock.next
            }
            return this
        },
        sortDescending(){
            if(!this.head) return false
            if(this.head === this.tail) return this
            let lock : Node | null = this.head
            while(lock != null){
                let current : Node | null = lock.next
                while(current != null){
                    if(current.data > lock.data){
                        [current.data,lock.data] = [lock.data,current.data]
                    }
                    current = current.next
                }
                lock = lock.next
            }
            return this
        }
    }
    return list
}



let list = createLinkedList()
list.push(3)
list.push(32)
list.push(1)
list.push(0)
list.push(2)
list.push(4)
list.addNewElementInFront(90)
list.sortAscending()
list.sortDescending()
printAllValues(list)

export{}