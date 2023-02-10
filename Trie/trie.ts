interface TrieNode {
    children: { [key: string]: TrieNode };
    endOfWord: boolean;
  }

const root: TrieNode = { children: {}, endOfWord: false };

function insert(word: string) {
  let node = root;
  for (let char of word) {
    if (!node.children[char]) {
      node.children[char] = { children: {}, endOfWord: false };
    }
    node = node.children[char];
  }
  node.endOfWord = true;
}

function search(word: string) {
  let node = root;
  for (let char of word) {
    if (!node.children[char]) {
      return false;
    }
    node = node.children[char];
  }
  return node.endOfWord;
}

insert('hello')
console.log(root)

export{}