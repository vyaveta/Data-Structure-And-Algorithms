function leftChildIndex(i : number) : number{
    return (2*i) + 1
}

function rightChildIndex(i: number) : number{
    return (2*i) + 2
}

function parentIndex(i: number) : number{
    return Math.floor((i - 1) / 2)
}

function swap(heap: number[], i: number, j: number) : void{
    [heap[i],heap[j]] = [heap[j],heap[i]]
}

const heapifyDown = (heap: number[], i: number, size: number) : number[] => {
    let maxIndex : number = i
    let leftChild : number = leftChildIndex(i)
    let rightChild : number = rightChildIndex(i)
    if(leftChild < size && heap[leftChild] > heap[i]) maxIndex = i
    else if(rightChild < size && heap[rightChild] > heap[i]) maxIndex = i
    if(maxIndex !== i){
        swap(heap,i,maxIndex)
        heapifyDown(heap,maxIndex,size)
    }
    return heap
}

const arrayToHeap = (array: number[]) : number[] => {
    let n: number = array.length
    for(let i: number = Math.floor(n/2) -1 ; i>=0 ; i--){
        heapifyDown(array,i,n)
    }
    return array
}

