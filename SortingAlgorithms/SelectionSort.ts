/* Selection Sort algorithm works by repeatedly selecting the smallest/largest element from the unsorted list
and moving it to the sorted position, the position that certain element deserves.

i.e for sorting Ascending, this algo finds the smallest element and put it in the 0th position, 
and again finds the next smallest element, i.e second smallest position and place it in the 1st position, where it 
belongs. */

const selectionSortAscending = (arr: number[]) : number[] => {
    for(let i : number = 0 ; i < arr.length; i++){ 
        let minIndex : number = i; // here we are considering the min index to be i, i.e in the first iteration - 0
        for(let j : number = i+1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) minIndex = j // and we are checking is there any oher elements that are less than the considered element, if so the minIndex changes.
        }
         [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]] // In the first iteration, i is 0 and the element in the minIndex, i.e the smallest elment goes to the first position. 
    }
    return arr
}


const selectionSortDescending = (arr: number[]) : number[] => {
    for(let i : number = 0 ; i < arr.length; i++){
        let maxIndex = i;
        for(let j : number = i + 1; j < arr.length; j++){
            if(arr[j] > arr[maxIndex]) maxIndex = j
        }
        [arr[i],arr[maxIndex]] = [arr[maxIndex],arr[i]]
    }
    return arr
}

let array : number[] = [2,3,5,2,5,2,7,8,3,34,75,324,0]
console.log(`Ascending: ${selectionSortAscending(array)}`)
console.log(`Descending: ${selectionSortDescending(array)}`)

export{}

// Time Complexity => O(n*2)
// Space Complexity => O(1)