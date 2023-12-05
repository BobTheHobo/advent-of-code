
const { inputToList } = require("../../inputReader")

const testCase = [
    "467..114..",
    "...*......",
    "..35..633.",
    "......#...",
    "617*......",
    ".....+.58.",
    "..592.....",
    "......755.",
    "...$.*....",
    ".664.598..",
]

// test(testCase)
main(inputToList())

function test(input) {
    main(input)
}

function main(input) {
    parse(input)
}


function createMap(input) {
    var map = [];
    var y = 0;

    while(y < input.length) {
        const line = input[y]        
        const chars = line.split("")
        map[y] = chars
        y++;
    }
    return map;
}

function parse(input) {
    const map = createMap(input)
    var totalSum = 0;
    var y = 0;
    while(y < map.length) {
        var line = map[y]
        var x=0;
        while(x < line.length) {
            var char = line[x]
            if(isNaN(char) && char !== '.') {
                totalSum+=checkForNumber(x,y,map)
            }
            x++;
        }
        y++;
    };
    console.log("Final sum: "+ totalSum)
}

function findFullNumber(x,y,map) {
    var numStr = map[y][x]
    //search right for number
    var i = x;
    while(i<map[y].length-1 && !isNaN(map[y][i+1])) {
        i++;
        var char = map[y][i];
        numStr = numStr + char;
    }
    //search left for number
    i=x;
    while(i>0 && !isNaN(map[y][i-1])) {
        i--;
        var char = map[y][i];
        numStr = char + numStr
    }
    //return full number
    var num = numStr/1;
    // console.log(num)
    return num;
}

function checkForNumber( x, y, map) {
    var checkUpper = false;
    var checkLower = false;
    var topIsNum = false;
    var botIsNum = false;
    var numList = [];
    if(y>0){ 
        //check top
        topIsNum = isNumber(map[y-1][x])
        if(topIsNum) {
            numList.push(findFullNumber(x,y-1,map))
        }
        checkUpper = true;
    }
    if(y<map.length-1){
        //check bottom
        botIsNum = isNumber(map[y+1][x])
        if(botIsNum) {
            numList.push(findFullNumber(x,y+1,map))
        }
        checkLower = true;
    }
    if(x>0){
        //check left
        if(isNumber(map[y][x-1])) {
            numList.push(findFullNumber(x-1,y,map))
        }
        //also check top left and bot left
        if(checkUpper && !topIsNum){
            if(isNumber(map[y-1][x-1])) {
                numList.push(findFullNumber(x-1,y-1,map))
            }
        }
        if(checkLower && !botIsNum){
            if(isNumber(map[y+1][x-1])) {
                numList.push(findFullNumber(x-1,y+1,map))
            }
        }
    }
    if(x<map[y].length-1){
        //check right
        if(isNumber(map[y][x+1])) {
            numList.push(findFullNumber(x+1,y,map))
        }
        //also check top right and bot right
        if(checkUpper && !topIsNum){
            if(isNumber(map[y-1][x+1])) {
                numList.push(findFullNumber(x+1,y-1,map))
            }
        }
        if(checkLower && !botIsNum){
            if(isNumber(map[y+1][x+1])) {
                numList.push(findFullNumber(x+1,y+1,map))
            }
        }
    }
    if(numList.length==2){
        var ratio = numList[0] * numList[1]
        return ratio;
    }else{
        return 0;
    }
}
    

function isNumber(char) {
    if(!isNaN(char) && char!='.'){
        return true;
    }
    return false;
}

/*
Pivoting from below strategy b/c ran into problem of how to ensure each number is only added once (e.g., how to prevent two symbols adjacent to the same number from adding it twice)
New strat is to parse until you hit a number, then evaluate if that number has any adjacent symbols and add it. Prevents aforementioned problem bc each number is only seen once. 

Old:
Parse line by line, looking for symbols
If symbol, check top 3 characters, left and right, and bottom 3 characters for a number
    If number, check left and right for another number and create a number accordingly
    Add number to a total sum
*/ 