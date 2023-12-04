const { inputToList } = require("../../inputReader")

testCase = [
    "467..114..",
    "...*......",
    "..35..633.",
    "......#...",
    "617*......",
    ".....+.58.",
    "..592.....",
    "......755.",
    "...$.*....",
    ".664.598.."
]

test(testCase)
// main(inputToList())

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
    console.log(map)
    return map;
}

function parse(input) {
    const map = createMap(input)
    var y = 0;
    while(y < map.length) {
        var line = map[y]
        var x=0;
        while(x < line.length) {
            var char = line[x]
            if(isNaN(char) && char !== "."){
                console.log(char)
                propagateNumFromPoint(1,0,map)
            }
            x++;
        }
        y++;
    };
}

function checkUpperLine(x, y, map) {
    if(y == 0) {
        return;
    }
    const upperChar = map[y-1][x] 
    var numStr = ""; 
    if(!isNaN(upperChar)) {
        numStr = numStr + upperChar
        var i = x;
        while(i>0) {
            var upperLChar = map[y-1][i]
            if(!isNaN(upperLChar)) {
                numStr = upperLChar + numStr; 
            }
        }
    }
}

function propagateNumFromPoint(x,y,map) {
    var i = x;
    var numStr = map[y][x] 
    console.log(numStr)
    while(i>0) {
        i--;
        var leftChar = map[y][i]
        if(!isNaN(leftChar)) {
            numStr = leftChar + numStr;
        }else{
            break;
        }
    }
    while(i<map[y].length) {
        i++;
        var rightChar = map[y][i]
        if(!isNaN(rightChar)) {
            numStr = numStr + rightChar;
        }else{
            break;
        }
    }
    console.log(numStr)
    const num = numStr/0;
    console.log(num)
    return num;
}
/*
psuedo code:
Parse line by line, looking for symbols
If symbol, check top 3 characters, left and right, and bottom 3 characters for a number
    If number, check left and right for another number and create a number accordingly
    Add number to a total sum
*/ 