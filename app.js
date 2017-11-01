const fixy = require('fixy');
const medMap = require('./support/medicalMap.json');
// const sample = require('./samples/dm_med_ext_amercent.txt');

var filePath = '/Users/johnreineck/SpecKC_Cigna_Import/samples/dm_med_ext_amercent.txt'
var fs = require('fs'),
    readline = require('readline'),
    stream = require('stream');

var instream = fs.createReadStream(filePath);
var outstream = new stream;
outstream.readable = true;
outstream.writable = true;

var rl = readLine.createInterface({
    input: instream,
    output: outstream,
    terminal: false
});

rl.on('line', function(line) {
    console.log(line);
    var fixy = fixy.parse({
        map: medMap,line
    });
    console.log("Object %0:",fixy);
});





