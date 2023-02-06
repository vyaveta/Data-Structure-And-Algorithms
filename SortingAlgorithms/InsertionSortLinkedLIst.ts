interface Node{
    data: number,
    next: Node | null,
    prev: Node | null,
}

interface LinkedList{
    head: Node | null,
    length: number,
    tail: Node | null,
    pushToTail : (data: number) => LinkedList
}
// Creating a Node
const createNode = (data: number) : Node => {
    let node : Node = {
        data,
        next : null,
        prev: null,
    }
    return node
}

// Creating a LinkedList 
const createLinkedList = () : LinkedList => {
    const list : LinkedList = {
        head: null,
        length: 0,
        tail: null,
        pushToTail(data: number) : LinkedList {
            const node : Node = createNode(data)
            if(!this.head || !this.tail){
                this.head = node,
                this.tail = node,
                this.length++
                return this
            }
            node.prev = this.tail
            this.tail.next = node,
            this.tail = node
            this.length++
            return this
        }
    }
    return list
}

// function to print all datas in a LinkedList
const printAllDatas = (list: LinkedList) : boolean => {
    try{
        let current : Node | null = list.head
        while(current){
            process.stdout.write(`${current.data}`)
            if(current.next) process.stdout.write(` => `)
            current = current.next
        }
    }catch(e){
        return false
    }
    return true
}

// InsertionSort
const insertionSortLinkedlistAscending = (list: LinkedList) : LinkedList => {
    if(!list.head?.next) return list
    let linkedList = list
    let current : Node | null = list.head.next
    while(current.next){
        console.log('1st ',current.data)
        let checker = current.prev
        //@ts-ignore
        console.log('exp 3', checker.data)
        let key = current.data
        let signal = true
        while(checker && signal &&  checker.data > key){
            console.log('key : 2 = ',key)
            //@ts-ignore
            console.log("checker next.data ; :",checker.next.data)
            // @ts-ignore
            checker.next.data = checker.data
            //@ts-ignore
            console.log("checker next.data after :",checker.next.data)
            if(checker.prev == null) {
                signal = false
                console.log('if here',checker)
            }
            else {
                console.log('else here')
                checker = checker.prev
            }
        }
        console.log('outside the 2nd while loop')
        //@ts-ignore
        checker.next.data = key
        current = current.next
    }
    console.log(list)
    return list
}

const list = createLinkedList()
list.pushToTail(3)
list.pushToTail(2)
list.pushToTail(5)

let sortedList = insertionSortLinkedlistAscending(list)




export{}