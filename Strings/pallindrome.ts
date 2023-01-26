const check = (str : string) : boolean => {
    let left : number = 0
    let right : number = str.length-1
    while(left < right){
        if(str[left] != str[right]) return false
        left++
        right--
    }
    return true
}

const recursionCheck = (str: string) : boolean | Function => {
    if(str.length <= 1) return true
    if(str[0] !== str[str.length-1]) return false
    return recursionCheck(str.slice(1,str.length-1))
}

let s = 'malayalam'
console.log(s.slice(1,s.length-1),'is sliced')
console.log(check('malayalam'))