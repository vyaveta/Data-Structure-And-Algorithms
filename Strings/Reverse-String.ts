const reverse = (str : string) : string | Function => {
    if(str.length <= 1) return str
     return reverse(str.slice(1))
}

console.log(reverse('hello'))