class Node {
    constructor(value) {
        this.value = value;
        this.one;
        this.two;
        this.three;
        this.four;
        this.five;
        this.six;
        this.seven;
        this.eight;
    }
}

class Graph {
    constructor() {
        this.root;
    }

    buildGraph(value, value1) {
        this.root = this.createNode(value, value1)
    }

    createNode(value, value1) {
        if(value[0] === value1[0] && value[1] === value1[1]) return
        let node = new Node(value);
        console.log(node);
        
        // two moves left and one move down or left
        node.one = ((value[0] + 2 < 8) && (value[1] + 1 < 8)) ? this.createNode([value[0] + 2, value[1] + 1], value1) : null;
        node.two = ((value[0] + 2 < 8) && (value[1] - 1 >= 0)) ? this.createNode([value[0] + 2, value[1] - 1], value1) : null;
        // two moves right and one move down or left
        node.three = ((value[0] - 2 >= 0) && (value[1] + 1 < 8)) ? this.createNode([value[0] - 2, value[1] + 1], value1) : null;
        node.four = ((value[0] - 2 >= 0) && (value[1] - 1 >= 0)) ? this.createNode([value[0] - 2, value[1] - 1], value1) : null;
        // two moves up and and one move left or right
        node.five = ((value[0] + 1 < 8) && (value[1] + 2 < 8)) ? this.createNode([value[0] + 1, value[1] + 2], value1) : null;
        node.six = ((value[0] - 1 >= 0) && (value[1] + 2 < 8)) ? this.createNode([value[0] - 1, value[1] + 2], value1) : null;
        // two moves down and one move left or right
        node.seven = ((value[0] + 1 < 8) && (value[1] - 2 >= 0)) ? this.createNode([value[0] + 1, value[1] - 2], value1) : null;
        node.eight = ((value[0] - 1 >= 0) && (value[1] - 2 >= 0)) ? this.createNode([value[0] - 1, value[1] - 2], value1) : null;
        return node
    }
}

let graph = new Graph()

graph.buildGraph([0,0], [1,2])
let a = [1,1]
let b = [1,1]
console.log( a[0] === b[0] && a[1] === b[1]);

console.log(graph.root);
