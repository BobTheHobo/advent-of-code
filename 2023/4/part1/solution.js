const { inputToList } = require("../../inputReader.js");

const testcase = [
    "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
    "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
    "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
    "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
    "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
    "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
]

main(inputToList());
// test(testcase);

function test(input) {
    main(input);
}

function main(input){
    parseInput(input);
}


function parseInput(input) {
    var totalSum = 0;
    input.forEach(line => {
        const nums = line.split(": ")[1].split(" | ");
        const winNums = nums[0].split(" ");
        const checkNums = nums[1].split(" ");
        // console.log("winNums: "+winNums+" checkNums: "+checkNums)
        var points = 0;
        var wins = 0;
        winNums.forEach(num => {
            if(num!='' && checkNums.includes(num)) {
                wins++;
            }
        })
        // console.log("wins: "+wins);
        points = wins == 0 ? 0 : 2**(wins-1)
        // console.log(points);
        totalSum+=points;
    })
    console.log("Total sum: "+totalSum)
}
