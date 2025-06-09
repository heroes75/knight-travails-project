class Node {
    constructor(value, one = null, two = null, three = null, four = null, five = null, six = null, seven = null, eight = null) {
        this.value = value;
        this.one = one;
        this.two = two;
        this.three = three;
        this.four = four;
        this.five= five;
        this.six = six;
        this.seven = seven;
        this.eight= eight;
    }
}

class Graph {
    constructor() {
        this.root;
    }

    buildGraph(value, value1) {
        this.root = this.createNode([9,9], value, value1)
    }

    createNode(prev = [9,9], value, value1) {
        console.log("herre starat tg recusrsion");
        
        console.log({prev, value});
        if(value[0] < 0 || value[1] < 0 || value[0] > 7 || value[1] > 7) return null
        if((value[0] === value1[0] && value[1] === prev[1]) || (value[0] === prev[0] && value[1] === prev[1])) return new Node(value)
        let node = new Node(value);
        
        // two moves left and one move down or left
        /*node.one = ((value[0] + 2 < 8) && (value[1] + 1 < 8)) ? this.createNode([value[0] + 2, value[1] + 1], value1) : null;
        node.two = ((value[0] + 2 < 8) && (value[1] - 1 >= 0)) ? this.createNode([value[0] + 2, value[1] - 1], value1) : null;
        // two moves right and one move down or left
        node.three = ((value[0] - 2 >= 0) && (value[1] + 1 < 8)) ? this.createNode([value[0] - 2, value[1] + 1], value1) : null;
        node.four = ((value[0] - 2 >= 0) && (value[1] - 1 >= 0)) ? this.createNode([value[0] - 2, value[1] - 1], value1) : null;
        // two moves up and and one move left or right
        node.five = ((value[0] + 1 < 8) && (value[1] + 2 < 8)) ? this.createNode([value[0] + 1, value[1] + 2], value1) : null;
        node.six = ((value[0] - 1 >= 0) && (value[1] + 2 < 8)) ? this.createNode([value[0] - 1, value[1] + 2], value1) : null;
        // two moves down and one move left or right
        node.seven = ((value[0] + 1 < 8) && (value[1] - 2 >= 0)) ? this.createNode([value[0] + 1, value[1] - 2], value1) : null;
        node.eight = ((value[0] - 1 >= 0) && (value[1] - 2 >= 0)) ? this.createNode([value[0] - 1, value[1] - 2], value1) : null;*/

        /*if ((value[0] + 2 < 8) && (value[1] + 1 < 8)) {
            node.one = new Node([value[0] + 2, value[1] + 1]);
            this.createNode([value[0] + 2, value[1] + 1], value1)
        } else {
            node.one = null
        }
        if((value[0] + 2 < 8) && (value[1] - 1 >= 0)) {
            node.two = new Node([value[0] + 2, value[1] - 1])
        } else {
            node.two = null
        }
        if((value[0] - 2 >= 0) && (value[1] + 1 < 8)) {
            node.three = new Node([value[0] - 2, value[1] + 1]) 
        } else {
            node.three = null
        }
        if((value[0] - 2 >= 0) && (value[1] - 1 >= 0)) {
            node.four = new Node([value[0] - 2, value[1] - 1])
        } else {
            node.four = null
        }
        if((value[0] + 1 < 8) && (value[1] + 2 < 8)) {
            node.five = new Node([value[0] + 1, value[1] + 2])
        } else {
            node.five = null
        }
        if((value[0] - 1 >= 0) && (value[1] + 2 < 8)) {
            node.six = new Node([value[0] - 1, value[1] + 2])
        } else {
            node.six = null
        }
        if((value[0] + 1 < 8) && (value[1] - 2 >= 0)) {
            node.seven = new Node([value[0] + 1, value[1] - 2])
        } else {
            node.seven = null
        }
        if((value[0] - 1 >= 0) && (value[1] - 2 >= 0)) {
            node.eight = new Node([value[0] - 1, value[1] - 2])
        } else {
            node.eight = null
        }*/
        console.log(node);
        
        prev = value
        
        console.log({prev}, [value[0] + 2, value[1] + 1]);
        console.log({prev}, [value[0] + 2, value[1] - 1]);
        console.log({prev}, [value[0] - 2, value[1] + 1]);
        console.log({prev}, [value[0] - 2, value[1] - 1]);
        console.log({prev}, [value[0] + 1, value[1] + 2]);
        console.log({prev}, [value[0] - 1, value[1] + 2]);
        console.log({prev}, [value[0] + 1, value[1] - 2]);
        console.log({prev}, [value[0] - 1, value[1] - 2]);
        let root = new Node(value, 
            this.createNode(prev, [value[0] + 2, value[1] + 1], value1),
            this.createNode(prev, [value[0] + 2, value[1] - 1], value1),
            this.createNode(prev, [value[0] - 2, value[1] + 1], value1),
            this.createNode(prev, [value[0] - 2, value[1] - 1], value1),
            this.createNode(prev, [value[0] + 1, value[1] + 2], value1),
            this.createNode(prev, [value[0] - 1, value[1] + 2], value1),
            this.createNode(prev, [value[0] + 1, value[1] - 2], value1),
            this.createNode(prev, [value[0] - 1, value[1] - 2], value1),
        )
        return root
    }
}

let graph = new Graph()

graph.buildGraph([0,0], [1,2])
let a = [1,1]
let b = [1,1]
console.log( a[0] === b[0] && a[1] === b[1]);

console.log(graph.root);
