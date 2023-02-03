/* Quick Sort is a divide and conquer algorithm that sorts an array by repeatedly selecting a 'Pivot' element and 
partitioning the other elements into two sub-arrays according to wheather they are less than or greater than the pivot
And the sub arrays are sorted recursively. */ 


/* The basic idea of quick sort is to select a pivot element , typically the first or last element of the array
and use it as a reference to divide the rest of the arrays into two sub arrays. one containing the elements less 
than the pivot and other elements greater than the pivot the sub arrays are sorted recursively using the same 
process */
const quickSort = (arr: number[], low: number, high: number) : number[] => {
    if(high > low){
        let pivotIndex: number = partition(arr, low, high)
        quickSort(arr,low,pivotIndex-1)
        quickSort(arr,pivotIndex+1,high)
    }
    return arr
}

const partition = (arr: number[], low: number, high: number) : number => {
    let pivotIndex : number = arr[high]
    let i : number = low - 1;
    for(let j = low; j < high; j++){
        if(arr[j] <= pivotIndex) {
            i++
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
    }
    [arr[i+1],arr[high]] = [arr[high],arr[i+1]]
    return i+1
}

let arr = [7, 6, 5, 4, 3, 2, 1];
quickSort(arr, 0, arr.length - 1);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7]
