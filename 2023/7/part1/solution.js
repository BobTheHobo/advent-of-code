const { inputToString, inputToList } = require("../../inputReader.js");

const testCases = [
	"32T3K 765",
	"T55J5 684",
	"KK677 28",
	"KTJJT 220",
	"QQQJA 483",
	"AAAAA 400",
	"JTJJJ 300",
	"JTJTJ 200"
]
var totalCases 
var fullhands = []
var fourhands = []
var fullhousehands = []
var threehands = []
var twopairhands = []
var onepairhands = []
var highcardhands = []
var allhands = [fullhands, fourhands,fullhousehands,threehands,twopairhands,onepairhands,highcardhands]

main(inputToList())
// test(testCases)

function test(input) {
	main(input);
}

function main(input) {
	totalCases = input.length
	determineStrength(input)
	// calculateWinnings()
}

function determineStrength(input) {
	console.log(input.length)
	for(var i=0; i<input.length; i++) {
		var line = input[i];
		var result = line.split(" ")
		var hand = result[0].split("") 
		var sortedHand = hand.sort()
		var bid = result[1] 
		// console.log(i)
		if(checkFullHand(sortedHand)){
			fullhands.push(line)
			continue;
		} 
		if(checkFourHand(sortedHand)){
			fourhands.push(line)
			continue;
		}
		if(checkFullHouse(sortedHand)){
			fullhousehands.push(line)
			continue;
		}
		if(checkThreeHand(sortedHand)){
			threehands.push(line)
			continue;
		}
		if(checkTwoPairHand(sortedHand)){
			twopairhands.push(line)
			continue;
		}
		if(checkOnePairHand(sortedHand)){
			onepairhands.push(line)
			continue;
		}
		highcardhands.push(line)
	}
	calculateWinnings()
}

function checkFullHand(hand){
	var card1 = hand[0]
	var strHand = hand.join("")
	var fullHand = Array(5).fill(card1).join("")
	if(strHand == fullHand) {
		return true;
	}
	return false;
}

function checkFourHand(sortedHand){
	var hand = sortedHand.join("")
	var card1 = hand[0]
	var card5 = hand[4]
	// AAAAJ
	var option1 = Array(4).fill(card1)
	option1.push(card5)
	var option1str = option1.join("")
	// AJJJJ
	var option2 = [card1].concat(Array(4).fill(card5))
	var option2str = option2.join("")

	if(hand === option1str) {
		return true;
	}
	if(hand === option2str) {
		return true;
	}
	return false;
}

function checkFullHouse(sortedHand){
	const hand = sortedHand
	if(hand[0] === hand[1] && hand[1] === hand[2] && hand[3] === hand[4]){
		return true;
	}
	if(hand[0] === hand[1] && hand[2] === hand[3] && hand[3] === hand[4]){
		return true;
	}
	return false;
}

function checkThreeHand(sortedHand){
	const hand = sortedHand
	if(hand[0] === hand[1] && hand[1] === hand[2] && hand[3] !== hand[4]){
		return true;
	}
	if(hand[2] === hand[3] && hand[3] === hand[4] && hand[0] !== hand[1]){
		return true;
	}
	return false;
}

function checkTwoPairHand(sortedHand){
	const hand = sortedHand
	// AABBC
	// ABBCC
	// AABCC
	if(
		(hand[0] === hand[1] && hand[2] === hand[3]) ||
		(hand[1] === hand[2] && hand[3] === hand[4]) ||
		(hand[0] === hand[1] && hand[3] === hand[4])
	) {
		return true;
	}
	return false;
}

function checkOnePairHand(sortedHand){
	const hand = sortedHand
	if(hand[0] === hand[1] || hand[1] === hand[2] || hand[2] === hand[3] || hand[3] === hand[4]){
		return true;
	}
	return false;
}

function compareHands(hand1, hand2) {
	for(var i=0; i<hand1.length; i++) {
		h1c = hand1[i];
		h2c = hand2[i];
		if(h1c === h2c){
			if(i === 4) {
				return 0
			}
			continue
		}
		else if(!isNaN(h1c) && !isNaN(h2c)){
			if(Number(h1c) < Number(h2c)){ //lower card numbers are better than higher card nums 
				return 1;
			}
			return -1;
		}
		else if(isNaN(h1c) && !isNaN(h2c)){
			return -1		
		}
		else if(!isNaN(h1c) && isNaN(h2c)){
			return 1
		}
		else if(isNaN(h1c) && isNaN(h2c)){ //handle non-number cards
			var pair = ["T","J","Q","K","A"] 
			var h1cval, h2cval
			for(var i=0; i<pair.length; i++) {
				if(h1c === pair[i]){
					h1cval = i;
				}
				if(h2c === pair[i]){
					h2cval = i;	
				}
			}
			if(h1cval < h2cval){
				return 1
			}else{
				return -1
			}
		}
	}
}

function calculateWinnings(){
	// var allhands = Array(1).fill(testCases) //line for testing purposes
	var totalwinnings = 0;
	var rank = totalCases;
	allhands.forEach(handtype => {
		var sortedHandtype = handtype.sort(compareHands)
		console.log("sortedHandtype: "+sortedHandtype)
		for(var i=0; i<sortedHandtype.length; i++) {
			var hand = sortedHandtype[i].split(" ")[0]		
			var bid = sortedHandtype[i].split(" ")[1]		
			var gain = rank*bid
			console.log("hand: "+hand+" rank: "+rank+" bid: "+bid+" total gain: "+gain)
			totalwinnings+= (gain)
			rank--;
		}
	})
	console.log("Total winnings: "+totalwinnings)
}
