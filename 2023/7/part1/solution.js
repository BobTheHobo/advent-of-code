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
var line
var linetoadd

// main(inputToList())
test(testCases)

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
		line = input[i];
		var result = line.split(" ")
		var hand = result[0].split("") 
		var sortedHand = hand.sort()
		var bid = result[1] 
		// console.log(i)
		if(checkFullHand(sortedHand)){
			fullhands.push(linetoadd)
			continue;
		} 
		if(checkFourHand(sortedHand)){
			fourhands.push(linetoadd)
			continue;
		}
		if(checkFullHouse(sortedHand)){
			fullhousehands.push(linetoadd)
			continue;
		}
		if(checkThreeHand(sortedHand)){
			threehands.push(linetoadd)
			continue;
		}
		if(checkTwoPairHand(sortedHand)){
			twopairhands.push(linetoadd)
			continue;
		}
		if(checkOnePairHand(sortedHand)){
			onepairhands.push(linetoadd)
			continue;
		}
		highcardhands.push(linetoadd)
	}
	calculateWinnings()
}

function checkFullHand(hand){
	var card1 = hand[0]
	var strHand = hand.join("")
	var fullHand = Array(5).fill(card1).join("")
	if(strHand == fullHand) {
		linetoadd = line.split(" ").concat(fullHand).join(" ")
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
		linetoadd = line.split(" ").concat(option1str).join(" ")
		return true;
	}
	if(hand === option2str) {
		var append = Array(4).fill(card5)
		append.push(card1)
		linetoadd = line.split(" ").concat(append.join("")).join(" ")	
		return true;
	}
	return false;
}

function checkFullHouse(sortedHand){
	const hand = sortedHand
	if(hand[0] === hand[1] && hand[1] === hand[2] && hand[3] === hand[4]){
		linetoadd = line.split(" ").concat(hand).join(" ")
		return true;
	}
	if(hand[0] === hand[1] && hand[2] === hand[3] && hand[3] === hand[4]){
		var appendstr = Array(3).fill(hand[2]).concat(Array(2).fill(hand[0])).join("")
		linetoadd = line.split(" ").concat(appendstr).join(" ")
		return true;
	}
	return false;
}

function checkThreeHand(sortedHand){
	const hand = sortedHand
	var append
	if(hand[0] === hand[1] && hand[1] === hand[2] && hand[3] !== hand[4]){
		if(compareSuits(hand[3], hand[4]) > 0){
			append = Array(3).fill(hand[0]).concat([hand[3], hand[4]]).join("")	
		}else{
			append = Array(3).fill(hand[0]).concat([hand[4], hand[3]]).join("")	
		}
		linetoadd = line.split(" ").concat(append).join(" ")
		return true;
	}
	if(hand[2] === hand[3] && hand[3] === hand[4] && hand[0] !== hand[1]){
		if(compareSuits(hand[0], hand[1]) > 0){
			append = Array(3).fill(hand[2]).concat([hand[0], hand[1]]).join("")	
		}else{
			append = Array(3).fill(hand[2]).concat([hand[1], hand[0]]).join("")	
		}
		linetoadd = line.split(" ").concat(append).join(" ")
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

function compareHands(hand1unsorted, hand2unsorted) {
	// var hand1 = hand1unsorted.split("").sort().join("")
	// var hand2 = hand2unsorted.split("").sort().join("")
	var hand1 = hand1unsorted
	var hand2 = hand2unsorted

	for(var i=0; i<hand1.length; i++) {
		h1c = hand1[i];
		h2c = hand2[i];
		var diff = compareSuits(h1c, h2c)
		if(diff === 0){
			if(i === 4) {
				return 0
			}
			continue
		}
		return diff
	}
}

function compareSuits(s1,s2){
	if(s1 === s2){
		return 0
	}
	else if(!isNaN(s1) && !isNaN(s2)){
		if(Number(s1) < Number(s2)){
			return 1;
		}
		return -1;
	}
	else if(isNaN(s1) && !isNaN(s2)){
		return -1		
	}
	else if(!isNaN(s1) && isNaN(s2)){
		return 1
	}
	else if(isNaN(s1) && isNaN(s2)){ //handle non-number cards
		var pair = ["T","J","Q","K","A"] 
		var n1, n2
		for(var i=0; i<pair.length; i++) {
			if(n1 === pair[i]){
				n1 = i;
			}
			if(n2 === pair[i]){
				n2 = i;	
			}
		}
		if(n1 < n2){
			return 1
		}else{
			return -1
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
