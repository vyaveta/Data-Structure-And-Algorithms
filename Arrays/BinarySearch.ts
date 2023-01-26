const check = (arr: number[],target: number) : boolean => {
    let left: number = 0
    let right : number = arr.length-1
    while(left <= right){
        let mid : number = Math.floor((left + right) / 2)
        if(arr[mid] === target) return true
        else if(arr[mid] < target) left = mid + 1
        else right = mid - 1
    }
    return false
}

const arr = [1,2,4,5,6,7,8,9]
console.log(check(arr,3))

export{}