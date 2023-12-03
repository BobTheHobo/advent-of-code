const { inputToList } = require("../../inputReader.js")

const testcases =  [
    "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
    "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
    "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green", 
]

test()
// main(inputToList())


function test() {
    main(testcases)
}

function main(input) {
    input.forEach(line => {
        const split = splitInput(line)
        countInstances(split);
        
    });
}

function splitInput(input) {
    const removeGameNum = input.split(":")[1]
    const splitIntoPulls = removeGameNum.split(";")
    return splitIntoPulls
}

function countInstances(inputArr) {
    var blue = 0;
    var green = 0;
    var red = 0;
    var currentIteration = 0;
    var totalNum = 0;
    var currentNum = 0;
    var addCurrent = true;
    inputArr.forEach(pull => {
        const chars = pull.split("")
        var i = 0;
        var count = 0;
        console.log(chars)
        while(i<chars.length) {
            var char = chars[i]
            if(!isNaN(char/1) && char !== " ") {
                count = char/1;
                console.log(count)
            }else if(char !== " "){
                switch(char) {
                    case "g":
                        green+=count;
                        console.log("green: " + green)
                        if(green > 13) {
                            i = chars.length;
                            addCurrent = false;
                        }
                        i+=7;
                        break;
                    case "r":
                        red+=count;
                        if(red > 13) {
                            i = chars.length;
                            addCurrent = false;
                        }
                        i+=5;
                        break;
                    case "b":
                        blue+=count;
                        if(blue > 13) {
                            i = chars.length;
                            addCurrent = false;
                        }
                        i+=6;
                        break;
                    default:
                        break;
                }
            }
            i++;
        }
        currentNum+=1;
        if(addCurrent){
            totalNum += currentNum;
            addCurrent = true;
        }
    })
}