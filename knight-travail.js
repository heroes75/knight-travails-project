class Node {
    constructor(value, one = null, two = null, three = null, four = null, five = null, six = null, seven = null) {
        this.value = value;
        this.one = one;
        this.two = two;
        this.three = three;
        this.four = four;
        this.five= five;
        this.six = six;
        this.seven = seven;
        //this.eight= eight;
    }
}

class Graph {
    constructor() {
        this.root;
    }

    // try to buid a graph of all possible nodes between this two value
    buildGraph(value, value1) {
        this.root = this.createNode([[9,9]], value, value1, [])
    }

    //create helper function
    //- prev: don't care about it it's for visualize the function
    //- value: first value
    //- value1: value to reach
    //- all: history of precedent value reach by the knight
    createNode(prev, value, value1, all) {
        console.log("herre starat tg recusrsion");
        
        //console.log(all);
        //console.log({prev, value});
        
        // two base case:
        //-the knight is out of board so i return null
        //- or the value1 is reach so i return this node
        if(value[0] < 0 || value[1] < 0 || value[0] > 7 || value[1] > 7) return null
        if((value[0] === value1[0]) && (value[1] === value1[1])) return new Node(value)
        
        // list of futur values
        const arrayOfValues = [
            [value[0] + 2, value[1] + 1],
            [value[0] + 2, value[1] - 1],
            [value[0] - 2, value[1] + 1],
            [value[0] - 2, value[1] - 1],
            [value[0] + 1, value[1] + 2],
            [value[0] - 1, value[1] + 2],
            [value[0] + 1, value[1] - 2],
            [value[0] - 1, value[1] - 2],
        ]

        //filtered all values of future values to eleminate the case that the
        // knig. already passed to prevent the infinite loop
        const arrayOfValuesFilter = arrayOfValues.filter(el => {
            if(all.length === 0) return true
            let isIn = true;
            all.forEach(prevs => {
                isIn = isIn && ((el[0] !== prevs[0]) || (el[1] !== prevs[1]));
            });
            return isIn
        });
        //console.log(all.map(el => el.join()).join("||"), {arrayOfValuesFilter, arrayOfValues, prev, value});
        
        // push value in the history of value
        if(!all.includes(value)) all.push(value);
        
        const all1 = all
        const all2 = all
        const all3 = all
        const all4 = all
        const all5 = all
        const all6 = all
        const all7 = all
        //console.log(all.length, all2.length, all3.length, all4.length, all5.length, all6.length, all7.length);
        
        prev = value;
        // my problem is here the modification made in the first invokation of
        // arrayOfValuesFilter[0] to the history of case(all) is passed to 
        // the following invokation(so the final result some node stop wihout reasons)
        // now i solve this problem with Array.from(new Set(all1)) the function 
        // seems a infinite loop. i need help to solve the problem
        let root = new Node(value, 
            arrayOfValuesFilter.length >= 1 ? this.createNode(prev, arrayOfValuesFilter[0], value1, Array.from(new Set(all1))) : null,
            arrayOfValuesFilter.length >= 2 ? this.createNode(prev, arrayOfValuesFilter[1], value1, Array.from(new Set(all2))) : null,
            arrayOfValuesFilter.length >= 3 ? this.createNode(prev, arrayOfValuesFilter[2], value1, Array.from(new Set(all3))) : null,
            arrayOfValuesFilter.length >= 4 ? this.createNode(prev, arrayOfValuesFilter[3], value1, Array.from(new Set(all4))) : null,
            arrayOfValuesFilter.length >= 5 ? this.createNode(prev, arrayOfValuesFilter[4], value1, Array.from(new Set(all5))) : null,
            arrayOfValuesFilter.length >= 6 ? this.createNode(prev, arrayOfValuesFilter[5], value1, Array.from(new Set(all6))) : null,
            arrayOfValuesFilter.length >= 7 ? this.createNode(prev, arrayOfValuesFilter[6], value1, Array.from(new Set(all7))) : null,
        )

        //console.log({all});
        console.log(all.length);
        return root

        
    }

    knightMoves(value, value1) {
        this.root = this.reachNode(false, value, value1, [])
    }

    //create helper function
    //- prev: don't care about it it's for visualize the function
    //- value: first value
    //- value1: value to reach
    //- all: history of precedent value reach by the knight
    reachNode(find, value, value1, path) {
        console.log("herre starat tg recusrsion");
        
        //console.log(all);
        //console.log({prev, value});
        
        // two base case:
        //-the knight is out of board so i return null
        //- or the value1 is reach so i return this node
        if(value[0] < 0 || value[1] < 0 || value[0] > 7 || value[1] > 7) return null
        if((value[0] === value1[0]) && (value[1] === value1[1])) {
            find = true;
            path.push(value)
            return path
        }
        
        // list of futur values
        const arrayOfValues = [
            [value[0] + 2, value[1] + 1],
            [value[0] + 2, value[1] - 1],
            [value[0] - 2, value[1] + 1],
            [value[0] - 2, value[1] - 1],
            [value[0] + 1, value[1] + 2],
            [value[0] - 1, value[1] + 2],
            [value[0] + 1, value[1] - 2],
            [value[0] - 1, value[1] - 2],
        ]

        //filtered all values of future values to eleminate the case that the
        // knig. already passed to prevent the infinite loop
        const arrayOfValuesFilter = arrayOfValues.filter(el => {
            if(path.length === 0) return true
            let isIn = true;
            path.forEach(prevs => {
                isIn = isIn && ((el[0] !== prevs[0]) || (el[1] !== prevs[1]));
            });
            return isIn
        });
        //console.log(all.map(el => el.join()).join("||"), {arrayOfValuesFilter, arrayOfValues, prev, value});
        
        // push value in the history of value
        if(!path.includes(value)) path.push(value);
        
        const all1 = path
        const all2 = path
        const all3 = path
        const all4 = path
        const all5 = path
        const all6 = path
        const all7 = path
        //console.log(all.length, all2.length, all3.length, all4.length, all5.length, all6.length, all7.length);
        
        //prev = value;
        // my problem is here the modification made in the first invokation of
        // arrayOfValuesFilter[0] to the history of case(all) is passed to 
        // the following invokation(so the final result some node stop wihout reasons)
        // now i solve this problem with Array.from(new Set(all1)) the function 
        // seems a infinite loop. i need help to solve the problem
        let root = new Node(value, 
            arrayOfValuesFilter.length >= 1 && find !== true  ? this.createNode(find, arrayOfValuesFilter[0], value1, all1) : null,
            arrayOfValuesFilter.length >= 2 && find !== true  ? this.createNode(find, arrayOfValuesFilter[1], value1, all2) : null,
            arrayOfValuesFilter.length >= 3 && find !== true  ? this.createNode(find, arrayOfValuesFilter[2], value1, all3) : null,
            arrayOfValuesFilter.length >= 4 && find !== true  ? this.createNode(find, arrayOfValuesFilter[3], value1, all4) : null,
            arrayOfValuesFilter.length >= 5 && find !== true  ? this.createNode(find, arrayOfValuesFilter[4], value1, all5) : null,
            arrayOfValuesFilter.length >= 6 && find !== true  ? this.createNode(find, arrayOfValuesFilter[5], value1, all6) : null,
            arrayOfValuesFilter.length >= 7 && find !== true  ? this.createNode(find, arrayOfValuesFilter[6], value1, all7) : null,
        )

        //console.log({all});
        console.log(path.length);
        return find === true ? path : root

        
    }

    
}

let graph = new Graph()

graph.knightMoves([0,0], [7,7])
let a = [1,1]
let b = [1,1]
console.log(a[0] === b[0] && a[1] === b[1]);
console.log("graph.root", graph.root);
