
    function knightMoves(value, value1) {
        if(value[0] < 0 || value[1] < 0 || value[0] > 7 || value[1] > 7) return null;
        if(value1[0] < 0 || value1[1] < 0 || value1[0] > 7 || value1[1] > 7) return null;
        return reachNodes([[value]], value, value1)
    }

    
    function reachNodes(queue, value, value1) {
        console.log("herre starat tg recusrsion");
        for (const el of queue) {
            if(el[el.length - 1][0] === value1[0] && el[el.length - 1][1] === value1[1]) return el
        }

        let newQueue = [];


        for (const el of queue) {
            const arrayOfValues = [
            [el[el.length - 1][0] + 2, el[el.length - 1][1] + 1],
            [el[el.length - 1][0] + 2, el[el.length - 1][1] - 1],
            [el[el.length - 1][0] - 2, el[el.length - 1][1] + 1],
            [el[el.length - 1][0] - 2, el[el.length - 1][1] - 1],
            [el[el.length - 1][0] + 1, el[el.length - 1][1] + 2],
            [el[el.length - 1][0] - 1, el[el.length - 1][1] + 2],
            [el[el.length - 1][0] + 1, el[el.length - 1][1] - 2],
            [el[el.length - 1][0] - 1, el[el.length - 1][1] - 2],
        ].filter(el => el[0] >= 0 && el[0] < 8 && el[1] >= 0 && el[1] < 8);

        arrayOfValues.forEach(ele => {
            newQueue.push(el.concat([ele]))
        });
        }

        console.log({newQueue});
        console.log(newQueue.length);
        return reachNodes(newQueue, value, value1)
        
    }

    



console.log("graph.root", knightMoves([0,0], [4, 3]));
