const { inputToString, inputToList } = require("../../inputReader.js");

const testCases = [
	"32T3K 765",
	"T55J5 684",
	"KK677 28",
	"KTJJT 220",
	"QQQJA 483"
]

// main(inputToList())
test(testCases)

function test(input) {
	main(input);
}

function main(input) {
	determineStrength(input)
}

function determineStrength(input) {
	input.forEach(line => {
		var result = line.split(" ")
		var hand = result[0] 
		var bid = result[1] 
		console.log(hand)
		console.log(bid)
	})
}
