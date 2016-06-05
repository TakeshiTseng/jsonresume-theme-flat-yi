#!/usr/bin/env node
var fs = require('fs');
var conv = require('./index.js');
var resume = fs.readFileSync(__dirname + "/resume.json");
resume = JSON.parse(resume);
var html = conv.render(resume);
fs.writeFileSync(__dirname + "/resume.html", html);
console.log("done");
