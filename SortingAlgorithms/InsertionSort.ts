/* Insertion Sort
=> The array is split into two => Sorted and Unsorted part.
=> Values from unsorted part is picked one by one and shifts them to its correct position in the first part i.e sorted part. so that the sorted part remains sorted.
*/

// This Function sorts the array elements in Ascending order
const insertionSort = (arr: number[]) : number[] => {
    for(let i = 1; i < arr.length; i++){
        /* for an array of [2,4,5,2,6,78,3,7,4,3,9] in its first iteration */
        let j : number = i-1; // here the value of j will be 0 i.e the position of the first element
        let key : number = arr[i] // here the value of key will be the second element of the array, we are storing it in a variable because when shifting the elements arr[i] will hold a duplicate value and we will eventually lose the value
        while(j >= 0 && key < arr[j]){ // we will check if the key (i.e the second element in the first iteration )is less than arr[j] (4) which is true 
            arr[j+1] = arr[j] // then we will shift values now arr[i] becomes 4
            j--
        }
        arr[j+1] = key // and since we have stored the arr[i] in key, we can store it its correct position, i.e 0th in the first iteration.
    }
    return arr
}

const insertionSortDescending = (arr: number[]) : number[] => {
    for(let i = 1; i < arr.length; i++){
        let key : number = arr[i]
        let j = i - 1
        while(j >=0 && key > arr[j]){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
    return arr
}

let array : number[] = [2,4,5,2,6,78,3,7,4,3,9]

const sorted = insertionSort(array)
console.log("Ascending: ",sorted)

console.log(`Descending ${insertionSortDescending(array)}`)

/*
Time Complexity => O(n*2)
Space Complexity => O(1)
*/
export{}