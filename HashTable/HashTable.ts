// First of all, Create an interface for the Hashtable obj, If you are coding this in Javascript, you can ignore these interfaces
interface HashTable{
    table: any[],
    size: number,
    limit: number,
    hash : (data : string) => number,
    set : (data: string , value : string | boolean | number) => string | boolean,
    isThere : (data: string) => boolean,
    remove : (data: string) => boolean,
    get : (data: string) => [string,any],
}

const createHashTable = () : HashTable => { // This function creates a hash table with basic functions and returns it
    const hashTable : HashTable = {
        table : new Array(10),
        size : 0,
        limit : 10,
        hash(data : string) : number { // This function takes the string data as parameter and hash it and returns the index position 
            let hash : number = 0 // typescript is actually simple , you just have to set the datatype like this : number | string etc..
            for(let i : number = 0; i < data.length ; i++){ // This is the simple hash algo
                hash += data.charCodeAt(i) 
            }
            return hash % this.limit // finally the result will be moded by the array size to fix to the array limit.
        },
        set(data: string, value : string | boolean | number) : string | boolean {
            if(typeof(data) != 'string') return false
            let index : number = this.hash(data)
            this.table[index] = [data,value]
            this.size ++
            return data
        },
        isThere(data: string) : boolean {
            let index : number = this.hash(data)
            if(this.table[index]) return true
            return false
        },
        remove(data : string) : boolean {
            let index : number = this.hash(data)
            if(!this.table[index]) return false
            this.table[index] = undefined
            this.size --
            return true
        },
        get(data: string) : [string, any] {
           if(typeof(data) != "string") return ['false',false]
           let index : number = this.hash(data)
           if(!this.table[index]) return ['false',false]
           return this.table[index]
        }
    } 
    return hashTable
}

const table = createHashTable()
table.set('Adwaith',700)
table.set('Hello',100)
table.remove('Helo')
console.log(table.table,' is the table ')
console.log(table.get('Adwaith'))
console.log( table.get('adwaith'))