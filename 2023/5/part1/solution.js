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
	var maps = parseMaps(input);
	createFullMap(maps)	
}

function parseMaps(input) {
	var i = 0;
	var seeds;
	var maps = []
	var mapnum = -1;
	var curNums = [];
	while(i<input.length) {
		const line = input[i]
		const firstChar = line.charAt(0);
		if(i==0) {
			seeds = line.split(": ")[1] 
			i+=2;
		} else if(isNaN(firstChar) && firstChar !== '' && firstChar !== '\n') {
			mapnum++;
			maps[mapnum] = curNums;
			curNums = [];
		} else if(!isNaN(firstChar) && firstChar!=='') {
			var split = line.split(" ");
			curNums = curNums.concat(split);
		}
		i++;
	}
	// console.log(maps);
	return maps;
}	

function determineLoc(seeds, maps) {
	var smallestLocation = 100;
	seeds.forEach(seed => {
		
	})
}

function createFullMap(maps) {
	maps.forEach(map => {
		var i=0;
		var destBegin = 0;
		var destEnd = 0;
		var sourceBegin = 0;
		var sourceEnd = 0;
		var range = 0;
		while(i<map.length) {
			var remain = i%3; 
			if(remain === 1) { //1st number
					range = map[i+2];		
			}else if(remain ===2) { //2nd number
				
			}else{ //3rd number

			}
			i++;
			console.log(range)
		}
	})
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
	}
}
