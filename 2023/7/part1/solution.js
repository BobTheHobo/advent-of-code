const { inputToString, inputToList } = require("../../inputReader.js");

const testCases = [
	"32T3K 765",
	"T55J5 684",
	"KK677 28",
	"KTJJT 220",
	"QQQJA 483"
]
var totalCases 

// main(inputToList())
test(testCases)

function test(input) {
	main(input);
}

function main(input) {
	// determineStrength(input)
	totalCases = input.length
	calculateWinnings()
}

var fullhands = []
var fourhands = []
var fullhousehands = []
var threehands = []
var twopairhands = []
var onepairhands = []
var highcardhands = []
var allhands = [fullhands, fourhands,fullhousehands,threehands,twopairhands,onepairhands,highcardhands]

function determineStrength(input) {
	input.forEach(line => {
		var result = line.split(" ")
		var hand = result[0] 
		var sortedHand = hand.sort()
		var bid = result[1] 
		console.log(hand)
		console.log(bid)
		checkFullHand(hand)
		checkFourHand(sortedHand)
	})
}

function checkFullHand(hand){
	var card1 = hand[0]
	var fullHand = Array(5).fill(card1).join("")
	if(hand === fullHand) {
		fullhands.push(result)
	}
}

function checkFourHand(sortedHand){
	var card1 = hand[0]
	var card5 = hand[5]
	// AAAAJ
	var option1 = Array(4).fill(card1).push(card5).join()
	// AJJJJ
	var option2 = [card1].push(Array(4).fill(card5)).join()
}

function compareHands(hand1, hand2) {
	for(var i=0; i<hand1.length; i++) {
		
	}
}

function calculateWinnings(){
	// var allhands = Array(1).fill(testCases) //line for testing purposes
	var totalwinnings = 0;
	var rank = totalCases;
	console.log(rank)
	allhands.forEach(handtype => {
		for(var i=0; i<handtype.length; i++) {
			var bid = handtype[i].split(" ")[1]		
			totalwinnings+= (rank*bid)
			rank--;
			console.log(totalwinnings)
		}
	})
	console.log("Total winnings: "+totalwinnings)
}
