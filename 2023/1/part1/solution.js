const { inputToList } = require("../../inputReader")

main()
// test()
function test() {
    const line = "1abc2"
    const forwardDigit = parseForDigit(line)
    const reverseStr = reverseString(line)   
    const reverseDigit = parseForDigit(reverseStr)        
    const num = forwardDigit*10 + reverseDigit
    console.log(num)
}

function main() {
    const inputList = inputToList()
    var sum = 0;
    inputList.forEach(line => {
        const forwardDigit = parseForDigit(line)
        const reverseStr = reverseString(line)   
        const reverseDigit = parseForDigit(reverseStr)        
        const num = forwardDigit*10 + reverseDigit
        // console.log(num)
        sum+=num;
    })
    console.log(sum)
}

function reverseString(str) {
    const strArr = str.split("");
    const reverseArr = strArr.reverse();
    const reverseStr = reverseArr.join("");
    return reverseStr;
}

function parseForDigit(str) {
    const strArr = str.split("")
    // console.log(strArr)
    for(var i=0; i<strArr.length; i++) {
        const digit = evaluateIfDigit(strArr[i])
        if(digit != null) {
            // console.log(digit)
            return digit;
        }
    }
}

function evaluateIfDigit(chr) {
    switch(chr) {
        case '1':
            return 1;
            break;
        case '2':
            return 2;
            break;
        case '3':
            return 3;
            break;
        case '4':
            return 4;
            break;
        case '5':
            return 5;
            break;
        case '6':
            return 6;
            break;
        case '7':
            return 7;
            break;
        case '8':
            return 8;
            break;
        case '9':
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