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
	for(var i=0; i<input.length; i++) {
		var line = input[i];
		var result = line.split(" ")
		var hand = result[0] 
		var sortedHand = hand.sort()
		var bid = result[1] 
		console.log(hand)
		console.log(bid)
		if(checkFullHand(hand)){ continue; } 
		if(checkFourHand(sortedHand)){ continue; }
		if(checkFullHouse(sortedHand)){ continue; }
		if(checkThreehand(sortedHand)){ continue; }
		if(checkTwoPairHand(sortedHand)){ continue; }
		if(checkOnePairHand(sortedHand)){ continue; }
		checkHighHand(hand)
		i++
	})
}

function checkFullHand(hand){
	var card1 = hand[0]
	var fullHand = Array(5).fill(card1).join("")
	if(hand === fullHand) {
		fullhands.push(result)
		return true;
	}
	return false;
}

function checkFourHand(sortedHand){
	var card1 = hand[0]
	var card5 = hand[5]
	// AAAAJ
	var option1 = Array(4).fill(card1).push(card5).join()
	// AJJJJ
	var option2 = [card1].push(Array(4).fill(card5)).join()
	if(sortedHand === option1) {
		fourhands.push(option1)
		return true;
	}
	if(sortedHand === option2) {
		fourhands.push(option2)
		return true;
	}
	return false;
}

function checkFullHouse(sortedHand){
	const hand = sortedHand
	if(hand[0] === hand[1] && hand[1] === hand[2] && hand[3] === hand[4]){
		fullhousehands.push(hand)
		return true;
	}
	if(hand[0] === hand[1] && hand[2] === hand[3] && hand[3] === hand[4]){
		fullhousehands.push(hand)
		return true;
	}
	return false;
}

function checkThreeHand(sortedHand){
	const hand = sortedHand
	if(hand[0] === hand[1] && hand[1] === hand[2] && hand[3] !== hand[4]){
		fullhousehands.push(hand)
		return true;
	}
	if(hand[2] === hand[3] && hand[3] === hand[4] && hand[0] !== hand[1]){
		fullhousehands.push(hand)
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

function checkHighHand(hand){
	addToArray(hand, arr)
}

function addToArray(hand, arr){
	if(arr.length == 0){
		arr.push(hand);
		return;
	}
	if(arr.length == 1){
		if(arr[0] > hand){
		//todo: finish this		
		}
		arr.push(hand)
	}
}

function compareHands(hand1, hand2) {
	for(var i=0; i<hand1.length; i++) {
		h1c = hand1[i];
		h2c = hand2[i];
		if(h1c === h2c){
			return 0;
		}
		else if(!isNaN(h1c) && !isNaN(h2c)){
			if(Number(h1c) > Number(h2c)){ //lower card numbers are better than higher card nums 
				return 1;
			}
			return -1;
		}
		else if(isNaN(h1c) && !isNaN(h2c)){
			return 1			
		}
		else if(!isNaN(h1c) && isNaN(h2c)){
			return -1
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
			if(h1cval > h2cval){
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
