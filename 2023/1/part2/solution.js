const { inputToList } = require("../../inputReader")

const digitList = [ 
    "one", 
    "two", 
    "three", 
    "four", 
    "five", 
    "six", 
    "seven", 
    "eight", 
    "nine",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0"
]
const testcases = [
    "two1nine",
    "eightwothree",
    "abcone2threexyz",
    "xtwone3four",
    "4nineeightseven2",
    "zoneight234",
    "7pqrstsixteen",
    // "six"
]

// main(inputToList())
test()

function test() {
    main(testcases)
}

function main(input) {
    const inputList = input;
    var sum = 0;
    inputList.forEach(line => {
        var num = parseAllDigits(line)
        sum+=num;
        console.log(num)
        console.log("sum: " + sum)
    })
    console.log(sum)
}

function parseAllDigits(str) {
    console.log(str)
    var lowestIndex = -1;
    var lowestDigit = -1;
    var highestIndex = -1;
    var highestDigit = -1;

    for(var i=0; i<digitList.length; i++) {
        var digit = digitList[i]
        var currentIndex = str.indexOf(digit);
        console.log(currentIndex)
        while(currentIndex != -1) {
            if(lowestDigit == -1) {
                lowestIndex = currentIndex;
                lowestDigit = returnDigitInt(digit);
                highestIndex = currentIndex;
                highestDigit = returnDigitInt(digit);
            }
            else { 
                if(currentIndex > highestIndex) {
                    highestIndex = currentIndex;
                    highestDigit = returnDigitInt(digit);
                }
                if(currentIndex < lowestIndex) {
                    lowestIndex = currentIndex;
                    lowestDigit = returnDigitInt(digit);
                }
            }
            currentIndex = str.indexOf(digit, currentIndex+1)
        }
    }
    
    const num = lowestDigit*10 + highestDigit
    console.log(num)
    return num;
}


function returnDigitInt(chr) {
    switch(chr) {
        case '1':
        case 'one':
            return 1;
            break;
        case '2':
        case 'two':
            return 2;
            break;
        case '3':
        case 'three':
            return 3;
            break;
        case '4':
        case 'four':
            return 4;
            break;
        case '5':
        case 'five':
            return 5;
            break;
        case '6':
        case 'six':
            return 6;
            break;
        case '7':
        case 'seven':
            return 7;
            break;
        case '8':
        case 'eight':
            return 8;
            break;
        case '9':
        case 'nine':
            return 9;
            break;
        case '0':
            return 0;
            break;
        default: {
            return null;
        }
    }
}