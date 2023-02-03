
const bubbleSort = (arr: number[]) : number[] => {
    for(let i = 0; i< arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] < arr[j]) [arr[i],arr[j]] = [arr[j], arr[i]]
        }
    }
    return arr
}

const sorted : number[] = bubbleSort([2,5,6,3,6,8,92,6])

console.log(sorted) 
export{}

// Time complexity O(n*2)