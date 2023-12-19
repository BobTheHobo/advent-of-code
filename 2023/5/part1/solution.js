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

main(inputToList());
// test(testCases);
function test(input) {
	main(input);
}

function main(input) {
	evaluate(input);
}

function parseMaps(input) {
	var i = 0;
	var seeds = []
	var maps = []
	var mapnum = 0;
	var curNums = [];
	while(i<input.length) {
		const line = input[i]
		const firstChar = line.charAt(0);
		if(i==0) {
			seeds = line.split(": ")[1].split(" ")
			i+=2;
		} else if(isNaN(firstChar) && firstChar !== '' && firstChar !== '\n') {
			mapnum++;
			curNums = [];
		} else if(!isNaN(firstChar) && firstChar!=='') {
			var split = line.split(" ");
			curNums = curNums.concat(split);
			maps[mapnum] = curNums;
		}
		i++;
	}
	return [maps, seeds];
}	

function createFullMap(maps, seeds, callback) {
	var instructMap = [];
	maps.forEach(map => {
		var i=0;
		var destBegin = 0;
		var destEnd = 0;
		var sourceBegin = 0;
		var sourceEnd = 0;
		var range = 0;
		var insideArray = []
		while(i<map.length) {
			var remain = i%3; 
			if(remain === 0) { //1st number
				range = map[i+2] - 1;		
				destBegin = map[i];
				destEnd = +destBegin + +range;
			}else if(remain ===1) { //2nd number
				sourceBegin = map[i]
				sourceEnd = +sourceBegin + +range;	
			}else{ //3rd number
				// console.log("range: "+range)
				// console.log("destBegin: "+destBegin+", "+destEnd)
				// console.log("sourceBegin: "+sourceBegin+", "+sourceEnd)
				var shift = destBegin-sourceBegin
				// console.log("shift "+shift)
				var instruction = [Number(sourceBegin), Number(sourceEnd), Number(shift)]
				insideArray.push(instruction)
			}
			i++;
		}
		instructMap.push(insideArray)
	})
	// console.log(instructMap);
	callback(instructMap, seeds)
}

function evaluate(input) {
	var result = parseMaps(input);
	var maps = result[0]
	var seeds = result[1]
	// console.log(maps)
	// console.log(seeds);
	var instructMap = createFullMap(maps, seeds, findLowestLoc)	
}

function findLowestLoc(instructMap, seeds){
	var lowestLoc;
	var first = true;
	seeds.forEach(seed => {
		var loc = Number(seed);
		instructMap.forEach(map => {	
			var next = false;
			for(var i=0; i<map.length; i++) {
				var indivMap = map[i]
				var j = 0;
				while(j!==-1 && j < indivMap.length) {
					var begin = indivMap[j]
					var shift = indivMap[j+2]
					var end = indivMap[j+1]
					if(loc <= end && loc >= begin){
						loc = loc + Number(shift)
						next = true;
					}
					j+=3;
				}
				if(next === true){
					break;
				}
			}
			if(next === true){
				next = false;
				return;
			}
		})
		console.log("Final seed loc: "+loc);
		if(first){
			lowestLoc = loc
			first = false;
		}
		else if(loc < lowestLoc){
			lowestLoc = loc;
		}
	})
	console.log("Lowest loc: "+lowestLoc);
}
