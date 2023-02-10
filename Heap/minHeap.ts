interface HeapNode{
    val: number
}

function leftChildIndex(i: number) : number{
    return 2 * i + 1
}
function rightChildIndex(i: number) : number{
    return 2 * i + 2
}
function parentIndex(i: number) : number{
    return Math.floor( (i-1) / 2)
}

const swap = (heap: HeapNode[], i: number, j: number): void => {
    [heap[i],heap[j]] = [heap[j],heap[i]]
}

function arrayToHeap(array: HeapNode[]) : HeapNode[]{
    let n = array.length
    for(let i = Math.floor(n/2) -1 ; i >= 0; i--){
        heapifyDown(array,i,n)
    }
    return array
}

const heapifyDown = (heap: HeapNode[], i: number, size: number) : HeapNode[] => {
    let minIndex : number = i
    let leftChild : number = leftChildIndex(i)
    let rightChild : number = rightChildIndex(i)
    if(leftChild < size && heap[leftChild].val < heap[rightChild].val) minIndex = leftChild
    else if(rightChild < size && heap[rightChild].val < heap[leftChild].val) minIndex = rightChild
    if(minIndex !==i){
        swap(heap,i,minIndex)
        heapifyDown(heap,minIndex,size)
    }
    return heap
} 

const heapifyUp = (heap: HeapNode[], i: number) : HeapNode[] => {
    while(i > 0 && heap[parentIndex(i)].val > heap[i].val){
        let parent = parentIndex(i)
        swap(heap,parent,i)
        i = parent
    }
    return heap
}

const insert = (heap: HeapNode[], val: number) => {
    heap.push({val})
    heapifyUp(heap,heap.length-1)
}

const extractMin = (heap: HeapNode[]) : HeapNode => {
    let min = heap[0]
    heap[0] = heap.pop() as HeapNode
    heapifyDown(heap, 0, heap.length)
    return min
}

const deleteFromHeap = (heap: HeapNode[], node: HeapNode) => {
    let index = heap.indexOf(node)
    console.log(index,'is the index')
    if(index === -1){
        return console.log('nothing found')
    }
    heap[index] = heap.pop() as HeapNode
    heapifyDown(heap,index,heap.length)
    heapifyUp(heap,index)
}

let array = [{val:14},{val:13},{val:12},{val:11},{val:8},{val:9},{val:10}]
let heap = arrayToHeap(array)
insert(array,1)
deleteFromHeap(heap,{val: 14})
console.log(heap,'is the heap')

export{}