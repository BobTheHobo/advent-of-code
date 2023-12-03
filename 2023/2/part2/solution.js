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
    determineMins(input)
}

function determineMins(inputArr) {
    var powerSum = 0;
    inputArr.forEach(line => {
        const game = line.split(": ")[1]
        const sets = game.split("; ")
        var red = 0;
        var blue = 0;
        var green = 0;
        
        sets.forEach(set => {
            const chars = set.split("")            

            var i = 0;
            var colorNumber = 0;
            while(i<chars.length){
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
                            if(colorNumber > red) {
                                red = colorNumber;
                            }
                            i+=4;
                        }
                        if(char == "g") {
                            if(colorNumber > green) {
                                green = colorNumber;
                            }
                            i+=6;
                        }
                        if(char == "b") {
                            if(colorNumber > blue) {
                                blue = colorNumber;
                            }
                            i+=5;
                        }
                        colorNumber = 0;
                    }
                }
                i++; 
            }
            // console.log("red: "+red)
            // console.log("green: "+green)
            // console.log("blue: "+blue)
        })
        powerSum+=red*green*blue
    })
    console.log("powerSum: "+powerSum)
}