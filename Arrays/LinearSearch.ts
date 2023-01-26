const search = (arr: number[], target: number) : boolean => {
    for(let i = 0; i< arr.length; i++)
        if(arr[i] === target) return true
    return false
}

const array = [2,3,4,5,6,7,78,89]
console.log(search(array,7))