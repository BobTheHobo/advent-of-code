const { inputToString, inputToList } = require("../../inputReader.js");

const testCases = [
	"Time:      7  15   30",
	"Distance:  9  40  200"
]

main(inputToList())
// test(testCases)

function test(input) {
	main(input);
}

function main(input) {
	calculateRecordBeaters(input)
}

function parseInput(input) {
	var time = input[0].split(" ").filter((frag) => {
		return frag !== '' && !isNaN(frag)
	})
	var dist = input[1].split(" ").filter((frag) => {
		return frag !== '' && !isNaN(frag)
	})
	return [time, dist]
}

function calculateRecordBeaters(input) {
	const result = parseInput(input);
	const time = result[0]
	const dist = result[1]
	var raceNum = 0;
	var moe = 1;
	for(raceNum = 0; raceNum < time.length; raceNum++) {
		var numWins = 0;
		var raceTime = time[raceNum]
		var distToBeat = dist[raceNum]
		for(var msHeld = 0; msHeld <= raceTime; msHeld++) {
			var speed = msHeld;
			var remainingTime = raceTime-msHeld;
			var totalDist = speed*remainingTime
			// console.log("speed "+speed+" remaining Time "+remainingTime+" totalDist "+totalDist)
			if(totalDist > distToBeat) {
				numWins++;
			}
		}
		console.log(numWins)
		moe*=numWins;
	}
	console.log("moe: "+moe)
}
