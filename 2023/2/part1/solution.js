const { inputToList } = require("../../inputReader.js")

const testcases =  [
    "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
    "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
    "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green", 
]

// test()
main(inputToList())

function test() {
    main(testcases)
}

function main(input) {
    countInstances(input)
}

function countInstances(inputArr) {
    var totalGameSum = 0;
    var currentGame = 1;
    inputArr.forEach(line => {
        const game = line.split(": ")[1]
        const sets = game.split("; ")

        var validGame = true;
        sets.forEach(set => {
            const chars = set.split("")            
            var red = 0;
            var blue = 0;
            var green = 0;

            var i = 0;
            var colorNumber = 0;
            while(i<chars.length && validGame){
                var char = chars[i]
                if(char !== " ") {
                    if(!isNaN(char/1)){
                        const num = char/1;
                        if(colorNumber==0) {
                            colorNumber = num
                        }else{
                            colorNumber = colorNumber*10+num
                        }
                    }else{
                        if(char == "r") {
                            red+=colorNumber 
                            if(red>12){
                                validGame = false;
                            }
                            i+=4;
                        }
                        if(char == "g") {
                            green+=colorNumber;
                            if(green>13){
                                    validGame = false;
                            }
                            i+=6;
                        }
                        if(char == "b") {
                            blue+=colorNumber;
                            if(blue>14){
                                    validGame = false;
                            }
                            i+=5;
                        }
                        colorNumber = 0;
                    }
                }
                i++; 
            }
            console.log("red: "+red)
            console.log("green: "+green)
            console.log("blue: "+blue)
        })
        if(validGame){
            totalGameSum+=currentGame
            validGame = false
        }
        console.log("currentGame: "+currentGame)
        console.log("totalGame: "+totalGameSum)
        currentGame++;
    })
}