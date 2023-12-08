const fs = require("fs")
const path = require("path")

function inputToList() {
    const inputFile = fs.readFileSync("input.txt", 'utf-8')
    const inputList = inputFile.toString().trim().split("\n")
    return inputList;
}

function inputToString(day) {
    const inputFile = fs.readFileSync("input.txt", 'utf-8')
    const inputString = inputFile.toString().trim()
    return inputString;
}


function listdir() {
    fs.readdir("./", (err, files) => {
        files.forEach(file => {
            console.log(file)
        })
    })
}

function test() {
    const list = inputToList("1")
}

test()

module.exports = {
    inputToList,
    inputToString,
    listdir
}
