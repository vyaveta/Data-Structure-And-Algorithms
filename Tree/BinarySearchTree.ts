interface Node {
    data: number,
    left: Node | null,
    right: Node | null,
}
interface BinarySearchTree {
    root : Node | null,
    size: number,
    addNode: (data: number) => boolean,
    search: (data: number) => void ,
    preOrder: (root: Node | null) => void,
    inOrder: (root: Node | null) => void,
    postOrder: (root: Node | null) => void,
}

const createNode = (data: number) : Node => { // this function create a node and returns it
    const node : Node = {
        data,
        left: null,
        right: null,
    }
    return node
}

function insertNode(node: Node, newNode: Node) : void {
    if(node.data > newNode.data){
        if(node.left === null)  node.left = newNode
        else return insertNode(node.left,newNode)
    }
    else{
        if(node.right === null)  node.right = newNode
        else return insertNode(node.right,newNode)
    }
}

function searchNode(node: Node | null, data: number) : any{
    if(node === null){
        console.error('not found')
        return false
    }
    if(node.data === data) {
        console.log(data,'is here',node)
        return true
    }
    else if(node.data > data)  searchNode(node.left,data)
    else searchNode(node.right,data)
}

const createBinarySearchTree = () : BinarySearchTree => {
    const tree : BinarySearchTree ={
        root: null,
        size: 0,
        addNode(data: number) : boolean{
            const node : Node = createNode(data)
            if(typeof(data) != 'number') return false
            if(this.root === null || this.size === 0){ /* This addNode funciton will check if the root is empty or not if its empty, It will insert the node to root else calls an outside function to deal the problem */
                this.root = node
                this.size ++
                return true
            }
            insertNode(this.root,node)
            this.size ++
            return true
        },
        search(data: number) {
            if(this.root === null) return false
            searchNode(this.root,data)
            return
        },
        preOrder(root: Node | null) {
            if(root){
                process.stdout.write(`${root.data} => `)
                this.preOrder(root.left)
                this.preOrder(root.right)
            }
        },
        inOrder(root: Node | null) {
            if(root){
                this.inOrder(root.left)
                process.stdout.write(`${root.data} => `)
                this.inOrder(root.right)
            }
        },
        postOrder(root: Node | null) {
            if(root){
                this.postOrder(root.left)
                this.postOrder(root.right)
                process.stdout.write(`${root.data} => `)
            }
        },
    }
    return tree
}

const tr = createBinarySearchTree()
tr.addNode(10)
tr.addNode(5)
tr.addNode(15)
tr.addNode(3)
tr.addNode(7)
 
tr.postOrder(tr.root)

export{}