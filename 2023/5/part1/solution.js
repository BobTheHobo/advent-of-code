const { inputToString, inputToList } = require("../../inputReader.js");
 
const testCases = [
	"seeds: 79 14 55 13",
	"",
	"seed-to-soil map:",
	"50 98 2",
	"52 50 48",
	"",
	"soil-to-fertilizer map:",
	"0 15 37",
	"37 52 2",
	"39 0 15",
	"",
	"fertilizer-to-water map:",
	"49 53 8",
	"0 11 42",
	"42 0 7",
	"57 7 4",
	"",
	"water-to-light map:",
	"88 18 7",
	"18 25 70",
	"",
	"light-to-temperature map:",
	"45 77 23",
	"81 45 19",
	"68 64 13",
	"",
	"temperature-to-humidity map:",
	"0 69 1",
	"1 0 69",
	"",
	"humidity-to-location map:",
	"60 56 37",
	"56 93 4"
]

// main(inputToList());
test(testCases);
function test(input) {
	main(input);
}

function main(input) {
	parseMaps(input);
}

function parseMaps(input) {
	var i = 0;
	var seeds, seedToSoil, fertToWat, watToLig, ligToTemp, tempToHum, humToLoc;
	while(i<input.length) {
		const line = input[i]
		if(i==0) { seeds = line.split(": ")[1]; }
		switch(line) {
			case "seed-to-soil map:":
			break;
			case "fertilizer-to-water map:":
			break;
			case "water-to-light map:":
			break;
			case "light-to-temperature map:":
			break;
			case "temperature-to-humidity map:":
			break;
			case "humidity-to-location map:":
			break;
		}
		console.log(seeds);
		i++;
	}
}	

function separateMaps(matchline) {
	switch(matchline) {
		case "seed-to-soil map:":
			break;
		case "fertilizer-to-water map:":
			break;
		case "water-to-light map:":
			break;
		case "light-to-temperature map:":
			break;
		case "temperature-to-humidity map:":
			break;
		case "humidity-to-location map:":
			break;
	}
}
function parseMapsByString(input) {
	const categories = inputToString().split("\n\n") 
	const seeds = categories[0].split(": ")[1].split(" ");
	const seedToSoil = categories[1].split(":\n")[1].split(" "); 
	const soilToFertilizer = categories[2].split(":\n")[1].split(" "); 
	const fertilizerToWater = categories[3].split(":\n")[1].split(" "); 
	const waterToLIght = categories[4].split(":\n")[1].split(" "); 
	const lightToTemp = categories[5].split(":\n")[1].split(" "); 
	const humidityToLoc = categories[6].split(":\n")[1].split(" "); 
	console.log(humidityToLoc);
}	
