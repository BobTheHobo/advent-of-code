const fs = require("fs")
const path = require("path")

function inputToList(day) {
    const inputFile = fs.readFileSync("input.txt", 'utf-8')
    const inputList = inputFile.toString().trim().split("\n")
    return inputList;
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
    listdir
}