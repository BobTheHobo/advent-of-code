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
	// parseInput(input)
	calculateRecordBeaters(input)
}

function parseInput(input) {
	var time = input[0].split(" ").filter((frag) => {
		return frag !== '' && !isNaN(frag)
	}).join("")
	var dist = input[1].split(" ").filter((frag) => {
		return frag !== '' && !isNaN(frag)
	}).join("")
	console.log("time: "+time+" dist: "+dist)
	return [time, dist]
}

function calculateRecordBeaters(input) {
	const result = parseInput(input);
	const time = result[0]
	const dist = result[1]
	const forward = goForwards(time, dist)
	const backward = goBackwards(time, dist)
	console.log(backward-forward+1) //plus 1 b/c it doesn't count the last ms
}

function goForwards(time, distance) {
	for(msHeld = 0; msHeld <= time; msHeld++) {
		var remainingTime = time-msHeld;
		var totalDist = msHeld*remainingTime
		if(totalDist > distance) {
			console.log("forward time: "+msHeld)
			return msHeld
		}
	}
}

function goBackwards(time, distance) {
	for(msHeld = time; msHeld > 0; msHeld--) {
		var remainingTime = time-msHeld;
		var totalDist = msHeld*remainingTime
		if(totalDist > distance) {
			console.log("backwards time: "+msHeld)
			return msHeld
		}
	}
}
