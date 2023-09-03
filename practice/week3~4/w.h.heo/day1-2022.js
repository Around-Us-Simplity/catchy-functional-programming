"use strict";
/**
 * https://adventofcode.com/2022/day/1
 */
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
function readFile() {
    var inputPath = path.join(__dirname, "..", "day1-2022.txt");
    return fs
        .readFileSync(inputPath)
        .toString()
        .split("\n\n")
        .map(function (v) { return v.split("\n"); });
}
function sum(a, b) {
    return a + b;
}
function arraySum(array) {
    return array.reduce(function (acc, v) { return sum(acc, +v); }, 0);
}
function part1() {
    return readFile().reduce(function (acc, val) {
        var total = arraySum(val);
        if (acc < total) {
            return total;
        }
        return acc;
    }, 0);
}
console.log(part1());
function part2(count) {
    var descArray = readFile()
        .map(function (v) { return v.reduce(function (acc, v) { return sum(acc, +v); }, 0); })
        .sort(function (a, b) { return b - a; });
    return arraySum(descArray.slice(0, count));
}
console.log(part2(3));
