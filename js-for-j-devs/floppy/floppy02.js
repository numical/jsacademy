// if node has existed in 1995

// disguised callback hell

const floppy = require('floppy');

function mainFn (data6) {
  store(data6);
  useData();
}

function load6 () {
  floppy.load('disk6', mainFn);
}
function prompt6 (data5) {
  store(data5);
  floppy.prompt('Please insert disk6', load6);
}

function load5 () {
  floppy.load('disk5', prompt6);
}
function prompt5 (data4) {
  store(data4);
  floppy.prompt('Please insert disk5', load5);
}

function load4 () {
  floppy.load('disk4', prompt5);
}
function prompt4 (data3) {
  store(data3);
  floppy.prompt('Please insert disk4', load4);
}

function load3 () {
  floppy.load('disk3', prompt4);
}
function prompt3 (data2) {
  store(data2);
  floppy.prompt('Please insert disk3', load3);
}

function load2 () {
  floppy.load('disk2', prompt3);
}
function prompt2 (data1) {
  store(data1);
  floppy.prompt('Please insert disk2', load2);
}

function load1 () {
  floppy.load('disk1', prompt2);
}
function prompt1 () {
  floppy.prompt('Please insert disk1', load1);
}

prompt1();

