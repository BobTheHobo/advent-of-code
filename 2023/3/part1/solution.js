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
    var totalSum = 0;
    var y = 0;
    while(y < map.length) {
        var line = map[y]
        var x=0;
        var numStr = ""
        var nearSymbol = false;
        var isNum = false;
        while(x < line.length) {
            var char = line[x]
            if(!isNaN(char) && char !== "."){
                if(isNum == false) { //indicates that this is first digit encountered 
                    nearSymbol = checkForSymbol("first", x, y, map);
                }else{
                    nearSymbol = checkForSymbol("mid", x, y, map);
                }
                isNum = true;
                console.log("char: "+ char)
                numStr = numStr + char;
            }else{
                if(isNum == true) { //indicates that this is the space after the last digit
                    nearSymbol = checkForSymbol("last", x, y, map);
                    var num = numStr/1;
                    console.log("current num: " + num)
                    isNum = false;
                    if(nearSymbol) {
                        totalSum+=num;
                        console.log("Total sum: " + totalSum)
                        nearSymbol = false;
                    }
                }
                numStr = ""
            }
            x++;
        }
        y++;
    };
}

function checkForSymbol(pos, x, y, map) {
    var checkUpper = false;
    var checkLower = false;
    var checkRight = false;
    var checkLeft = false;
    var nearSymbol = false;
    if(y>0){ 
        //check top
        nearSymbol = isSymbol(map[y-1][x]) 
        checkUpper = true;
    }
    if(y<map.length-1){
        //check bottom
        nearSymbol = isSymbol(map[y+1][x])
        checkLower = true;
    }
    if(x>0){
        //check left
        nearSymbol = isSymbol(map[y][x-1]);
        checkLeft = true;
    }
    if(x<map[y].length-1){
        //check right
        nearSymbol = isSymbol(map[y][x+1]);
        checkRight = true;
    }

    switch(pos) {
        case "first":
            //also check top left and bot left
            if(checkLeft){
                if(checkUpper){
                    nearSymbol = isSymbol(map[y-1][x-1])
                }
                if(checkLower){
                    nearSymbol = isSymbol(map[y+1][x-1])
                }
            }
            break;
        case "last":
            //also check top right and bot right
            if(checkRight){
                if(checkUpper){
                    nearSymbol = isSymbol(map[y-1][x+1])
                }
                if(checkLower){
                    nearSymbol = isSymbol(map[y+1][x+1])
                }
            }
            break;
        case "mid":
            break;
    }
    return nearSymbol
}

function isSymbol(char) {
    if(isNaN(char) && char!='.'){
        console.log(char)
        return true;
    }
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